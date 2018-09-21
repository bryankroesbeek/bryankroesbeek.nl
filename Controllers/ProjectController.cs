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
    public class ProjectController : Controller
    {
        private BryankroesbeekNlContext Context { get; }
        private IConfiguration configuration;
        public ProjectController(BryankroesbeekNlContext context, IConfiguration configuration)
        {
            this.Context = context;
            this.configuration = configuration;
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