using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

using BryankroesbeekNl.Models;
using BryankroesbeekNl.Models.Database;

namespace BryankroesbeekNl.Controllers
{
    [Route("api/[controller]")]
    public class ExperienceController : Controller
    {
        private BryankroesbeekNlContext Context { get; }
        private IConfiguration configuration;
        public ExperienceController(BryankroesbeekNlContext context, IConfiguration configuration)
        {
            this.Context = context;
            this.configuration = configuration;
        }

        [HttpGet("all")]
        public IActionResult Get()
        {
            var nonStart = this.Context.Experience.Where(e => e.StartYear == null);
            var nonEnd = this.Context.Experience
                .Where(e => e.EndYear == null)
                .Where(e => e.StartYear != null)
                .OrderBy(e => e.StartYear);

            var experiences = this.Context.Experience
                .Where(e => e.StartYear != null)
                .Where(e => e.EndYear != null)
                .GroupBy(e => e.EndYear)
                .OrderByDescending(e => e.Key)
                .SelectMany(e => e.OrderBy(item => item.StartYear));

            return Ok(nonEnd.Concat(experiences.Concat(nonStart)));
        }
    }
}