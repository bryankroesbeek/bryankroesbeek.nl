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
            return Ok(this.Context.Project.Where(p => p.Visible).OrderBy(p => p.Position));
        }

        [HttpGet]
        public IActionResult GetProject(int id)
        {
            Project project = this.Context.Project.Where(p => p.Id == id).SingleOrDefault();
            if (project == null) return NotFound();
            return Ok(project);
        }

        [HttpPost("create")]
        public IActionResult CreateProject()
        {
            var project = new Project
            {
                Name = "",
                Link = "",
                Description = "",
                Position = this.Context.Project.OrderByDescending(p => p.Position).FirstOrDefault().Position + 1,
                Visible = false
            };

            this.Context.Project.Add(project);
            this.Context.SaveChanges();

            return Ok(project);
        }

        [HttpPut("update")]
        public IActionResult UpdateProject([FromBody] Project updatedProject)
        {
            var exists = this.Context.Project.Any(p => p.Id == updatedProject.Id);
            if (!exists) return BadRequest();

            this.Context.Project.Update(updatedProject);
            this.Context.SaveChanges();
            return Ok();
        }

        [HttpDelete("{id}")]
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