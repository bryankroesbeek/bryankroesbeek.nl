using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using BryankroesbeekNl.Models;
using BryankroesbeekNl.Models.Database;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Newtonsoft.Json;

namespace BryankroesbeekNl.Controllers
{
    [Route("api/[controller]")]
    public class GithubController : Controller
    {
        private BryankroesbeekNlContext Context { get; }
        private IConfiguration configuration;
        public GithubController(BryankroesbeekNlContext context, IConfiguration configuration)
        {
            this.Context = context;
            this.configuration = configuration;
        }

        [HttpGet("details")]
        public IActionResult GetGithubRepos()
        {
            var key = this.configuration.GetSection("ApiKeys").GetSection("Github").Value;
            var url = "https://api.github.com/user/repos?type=owner";

            using (HttpClient client = new HttpClient())
            {
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("token", key);
                client.DefaultRequestHeaders.Add("User-Agent", "request");

                var res = client.GetAsync(url).Result;
                var content = res.Content.ReadAsStringAsync().Result;

                return Ok(JsonConvert.DeserializeObject<Repo[]>(content));
            }
        }

        [HttpGet("repos")]
        public IActionResult GetRepos()
        {
            return Ok(this.Context.Project.Where(repo => repo.Visible));
        }

        [HttpPost("repos")]
        public IActionResult PostGithubRepos([FromBody] Project[] repos)
        {
            return StatusCode(418);
        }

        [HttpPut("repos/{repoId}")]
        public IActionResult UpdateGithubRepos(int repoId, [FromBody] Project repos)
        {
            return StatusCode(418);
        }
    }
}