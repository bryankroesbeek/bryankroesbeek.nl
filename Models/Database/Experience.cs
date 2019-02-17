using System;
using System.Collections.Generic;

namespace BryankroesbeekNl.Models.Database
{
    public class Experience
    {
        public int Id { get; set; }
        public string Company { get; set; }
        public string Position { get; set; }
        public int? StartYear { get; set; }
        public int? EndYear { get; set; }
        public string Description { get; set; }
    }
}