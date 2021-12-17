using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Azure.Storage;
using Microsoft.Azure.Storage.Blob;
using Newtonsoft.Json;

class EventSpecificationStorage
{
  [Newtonsoft.Json.JsonProperty(PropertyName = "events")]
  public List<EventSpecification> eventList { get; set; }

  public EventSpecificationStorage(List<EventSpecification> eventSpecs)
  {
    eventList = eventSpecs;
  }
}

public class EventStorage
{
  CloudBlobContainer storageContainer;

  public static async Task<EventStorage> CreateEventStorage(string connectionString)
  {
    EventStorage eventStorage = new EventStorage();

    CloudStorageAccount storageAccount = CloudStorageAccount.Parse(connectionString);
    CloudBlobClient blobClient = storageAccount.CreateCloudBlobClient();
    CloudBlobContainer container = blobClient.GetContainerReference("events");
    await container.CreateIfNotExistsAsync();

    eventStorage.storageContainer = container;

    return eventStorage;
  }

  public async Task<EventCollection> Load()
  {
      CloudBlockBlob cloudBlockBlob = storageContainer.GetBlockBlobReference("events.json");

      if (await cloudBlockBlob.ExistsAsync())
      {
        string eventsJson = await cloudBlockBlob.DownloadTextAsync();
        EventSpecificationStorage eventStorage = JsonConvert.DeserializeObject<EventSpecificationStorage>(eventsJson);

        if (eventsJson != null || eventsJson.Length != 0)
        {
          return EventCollection.CreateFromEvents(eventStorage.eventList);
        }

      }

    return EventCollection.CreateEmpty();
  }

  public async Task Save(EventCollection events)
  {
      EventSpecificationStorage eventStorage = new EventSpecificationStorage(events.GetAllEventSpecs());
      string eventsJson = JsonConvert.SerializeObject(eventStorage);
      var cloudBlockBlob = storageContainer.GetBlockBlobReference("events.json");
      cloudBlockBlob.Properties.ContentType = "application/json";

      await cloudBlockBlob.UploadTextAsync(eventsJson);
  }
}