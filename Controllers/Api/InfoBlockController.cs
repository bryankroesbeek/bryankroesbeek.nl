using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

using BryankroesbeekNl.Models;

namespace BryankroesbeekNl.Controllers.Api
{
    [Route("api/[controller]")]
    public class InfoBlockController : Controller
    {
        private databaseContext Context { get; set; }
        public InfoBlockController(databaseContext context)
        {
            this.Context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(this.Context.InfoBlock.Select(i => i));
        }

        [HttpPost]
        public IActionResult Post([FromBody] InfoBlock infoBlock){
            this.Context.InfoBlock.AddRange(new InfoBlock{
                Title = infoBlock.Title,
                Content = infoBlock.Content,
                CreatedDate = DateTime.Now.ToShortDateString(),
                UpdatedDate = DateTime.Now.ToShortDateString()
            });
            this.Context.SaveChanges();

            return Ok();
        }
    }
}