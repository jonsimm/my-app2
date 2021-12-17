using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

class ApiEventsResponseGet
{
  [Newtonsoft.Json.JsonProperty(PropertyName = "events")]
  public List<Event> eventList { get; set; }

  public ApiEventsResponseGet(List<Event> events)
  {
    eventList = events;
  }
}
class ApiEventsResponsePost
{
}

class ApiEventsResponseDelete
{
}

public class ApiEvents
{
  EventCollection events;
  EventStorage storage;

  public static async Task<ApiEvents> CreateFromStorage(EventStorage eventStorage)
  {
    ApiEvents api = new ApiEvents();
    api.storage = eventStorage;
    api.events = await eventStorage.Load();

    return api;
  }

  public IActionResult Get()
  {
    ApiEventsResponseGet responseBody = new ApiEventsResponseGet(events.GetAllEvents());

    return new OkObjectResult(JsonConvert.SerializeObject(responseBody));
  }

  public async Task<IActionResult> Post(HttpRequest req)
  {
    string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
    Event testEvent = JsonConvert.DeserializeObject<Event>(requestBody);

    events.AddOrUpdateEvent(testEvent);

    await storage.Save(events);

    // TODO: right now the clients specifies the ID. We want the
    // service to do that instead. However in order to facilitate
    // smarter clients we should at least return the new ID here.
    return new OkObjectResult(JsonConvert.SerializeObject(new ApiEventsResponsePost()));
  }

  public async Task<IActionResult> Delete(int id)
  {
      events.DeleteEvent(id);

      await storage.Save(events);

    return new OkObjectResult(JsonConvert.SerializeObject(new ApiEventsResponseDelete()));
  }
}