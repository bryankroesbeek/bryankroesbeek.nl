using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

using BryankroesbeekNl.Models;

namespace BryankroesbeekNl.Controllers.Api
{
    [Route("api/[controller]")]
    public class InfoBlockController : Controller
    {
        private BryankroesbeekNlContext Context { get; set; }
        public InfoBlockController(BryankroesbeekNlContext context)
        {
            this.Context = context;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(this.Context.InfoBlock.Select(i => i));
        }

        [HttpPost]
        public IActionResult Post([FromBody] InfoBlock infoBlock)
        {
            this.Context.InfoBlock.Add(new InfoBlock
            {
                Title = infoBlock.Title,
                Content = infoBlock.Content,
                Created = DateTime.Now,
                Updated = DateTime.Now
            });
            this.Context.SaveChanges();

            return Ok();
        }

        [HttpDelete]
        public IActionResult Delete([FromBody] int id)
        {
            var block = this.Context.InfoBlock.Where(x => x.Id == id).FirstOrDefault();

            if (block == null) return NotFound();
            this.Context.Remove<InfoBlock>(block);
            this.Context.SaveChanges();
            return Ok();
        }
    }
}