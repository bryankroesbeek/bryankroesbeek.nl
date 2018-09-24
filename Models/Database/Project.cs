using System;
using System.Collections.Generic;

namespace BryankroesbeekNl.Models.Database
{
    public partial class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Link { get; set; }
        public string Description { get; set; }
        public int Position { get; set; }
        public bool Visible { get; set; }
    }
}
