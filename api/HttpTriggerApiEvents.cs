using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;

namespace JonSimm.MyApp2
{
    public static class HttpTriggerApiEvents
    {
        [FunctionName("HttpTriggerApiEvents")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Anonymous, "get", "post", Route = "events/{id:int?}")] HttpRequest req,
            int? id,
            ILogger log)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            // perform operation
            if (req.Method == HttpMethods.Get)
            {
                return new OkObjectResult("get succeeded");
            }
            else if (req.Method == HttpMethods.Post)
            {
                return new OkObjectResult("post succeeded");
            }
            else if (req.Method == HttpMethods.Delete)
            {
                if (id.HasValue)
                {
                    return new OkObjectResult("delete succeeded");
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
