using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Reflection;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

using BryankroesbeekNl.Models;
using BryankroesbeekNl.Models.Database;
using Microsoft.EntityFrameworkCore;

namespace BryankroesbeekNl.Controllers.Api
{
    [Route("api/[controller]")]
    public class DatabaseController : Controller
    {
        private BryankroesbeekNlContext Context { get; }
        private IConfiguration configuration;
        public DatabaseController(BryankroesbeekNlContext context, IConfiguration configuration)
        {
            this.Context = context;
            this.configuration = configuration;
        }

        [HttpGet("tables")]
        public IActionResult GetTables()
        {
            return Ok(Assembly.GetExecutingAssembly().GetTypes()
                .Where(a => a.Namespace == "BryankroesbeekNl.Models.Database")
                .Where(a => a.Name.ToLower() != "bryankroesbeeknlcontext")
                .Where(a => a.IsPublic)
                .Select(a => a.Name));
        }

        [HttpGet("{table}/columns")]
        public IActionResult GetColumns(string table)
        {
            if (table.ToLower() == "bryankroesbeeknlcontext")
                return NotFound();

            var type = Assembly
                .GetExecutingAssembly()
                .GetType($"BryanKroesbeekNl.Models.Database.{table}", false, true);

            if (type == null)
                return NotFound();

            var dbType = this.Context.Model.FindEntityType(type).GetProperties().Select(t => new {
                Name = t.Relational().ColumnName,
                Type = t.Relational().ColumnType
            });

            return Ok(dbType);
        }
    }
}