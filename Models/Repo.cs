using System;
using System.Collections.Generic;
using Newtonsoft.Json;

namespace BryankroesbeekNl.Models
{
    public partial class Repo
    {
        [JsonProperty("id")]
        public int Id { get; set; }

        [JsonProperty("html_url")]
        public string Link { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("private")]
        public bool Private { get; set; }

        [JsonProperty("description")]
        public string Description { get; set; }
    }
}
