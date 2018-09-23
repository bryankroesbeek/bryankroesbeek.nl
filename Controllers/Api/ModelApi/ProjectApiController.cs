using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

using BryankroesbeekNl.Models;
using BryankroesbeekNl.Models.Database;

namespace BryankroesbeekNl.Controllers.Api.ModelApi
{
    [Route("api/[controller]")]
    public class ProjectApiController : Controller
    {
        private BryankroesbeekNlContext Context { get; }
        private IConfiguration configuration;
        public ProjectApiController(BryankroesbeekNlContext context, IConfiguration configuration)
        {
            this.Context = context;
            this.configuration = configuration;
        }

        [HttpGet("all")]
        public IActionResult GetProjects()
        {
            return Ok(this.Context.Project);
        }

        [HttpGet]
        public IActionResult GetProject(int id)
        {
            Project project = this.Context.Project.Where(p => p.Id == id).SingleOrDefault();
            if (project == null) return NotFound();
            return Ok(project);
        }

        [HttpPost]
        public IActionResult CreateProject([FromBody] Project project)
        {
            this.Context.Project.Add(project);
            this.Context.SaveChanges();
            return Ok();
        }

        [HttpPut]
        public IActionResult UpdateProject(int id, [FromBody] Project updatedProject)
        {
            var project = this.Context.Project.Where(p => p.Id == id).SingleOrDefault();
            if (project == null) return BadRequest();

            project = updatedProject;
            this.Context.SaveChanges();
            return Ok();
        }

        [HttpDelete]
        public IActionResult DeleteProject(int id)
        {
            var project = this.Context.Project.Where(p => p.Id == id).SingleOrDefault();
            if (project == null) return BadRequest();

            this.Context.Project.Remove(project);
            this.Context.SaveChanges();

            return Ok();
        }
    }
}