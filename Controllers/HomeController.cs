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
        [HttpGet("/about")]
        [HttpGet("/projects")]
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("/admin")]
        [HttpGet("/admin/{*url}")]
        public IActionResult AdminIndex()
        {
            return View();
        }

        [HttpGet("{*url}")]
        public IActionResult PageNotFound()
        {
            Response.StatusCode = 404;
            return View();
        }
    }
}
