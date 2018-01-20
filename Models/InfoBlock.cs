using System;
using System.Collections.Generic;

namespace BryankroesbeekNl.Models
{
    public partial class InfoBlock
    {
        public long Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public string CreatedDate { get; set; }
        public string UpdatedDate { get; set; }
    }
}
