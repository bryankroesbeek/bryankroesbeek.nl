using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace BryankroesbeekNl.Controllers.Api
{
    [Route("[controller]")]
    public class GithubController : Controller
    {
        public IConfiguration configuration;
        public HttpClient client;
        public GithubController(IConfiguration configuration)
        {
            this.configuration = configuration;
            this.client = new HttpClient();
        }

        [HttpGet("details")]
        public IActionResult GetGithubRepos()
        {
            var key = this.configuration.GetSection("ApiKeys").GetSection("Github").Value;
            var url = "https://api.github.com/user/repos";

            client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("token", key);
            client.DefaultRequestHeaders.Add("User-Agent", "request");

            var res = client.GetAsync(url).Result.Content.ReadAsStringAsync().Result;

            return Ok(res);
        }
    }
}