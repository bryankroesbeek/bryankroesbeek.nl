using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace BryankroesbeekNl.Controllers
{
    [Route("/")]
    public class HomeController : Controller
    {
        [HttpGet("/")]
        [HttpGet("/projects")]
        [HttpGet("/experience")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("{*url}")]
        public IActionResult NotFound()
        {
            Response.StatusCode = 404;
            return View();
        }
    }
}
