using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;

namespace JonSimm.MyApp2
{
    public static class HttpTriggerApiEvents
    {
        [FunctionName("HttpTriggerApiEvents")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", "delete", Route = "events/{id:int?}")] HttpRequest req,
            int? id,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");
            
            // Load data structure
            string storageConnectionString = Environment.GetEnvironmentVariable("AzureWebJobsStorage");
            EventStorage eventStorage = await EventStorage.CreateEventStorage(storageConnectionString);
            ApiEvents apiEvents = await ApiEvents.CreateFromStorage(eventStorage);

            // perform operation
            if (req.Method == HttpMethods.Get)
            {
                return apiEvents.Get();
            }
            else if (req.Method == HttpMethods.Post)
            {
                return await apiEvents.Post(req);
            }
            else if (req.Method == HttpMethods.Delete)
            {
                if (id.HasValue)
                {
                    return await apiEvents.Delete(id.Value);
                }

                return new BadRequestObjectResult("delete must specify an ID");
            }
            else
            {
                return new BadRequestObjectResult("unhandled HTTP method");
            }
        }
    }
}
