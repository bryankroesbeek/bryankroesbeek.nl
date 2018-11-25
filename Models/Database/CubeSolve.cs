using System;
using System.Collections.Generic;

namespace BryankroesbeekNl.Models.Database
{
    public class CubeSolve
    {
        public int Id { get; set; }
        public string Scramble { get; set; }
        public float Time { get; set; }
        public string PuzzleType { get; set; }
        public string Penalty { get; set; }
        public long TimeStampSolved { get; set; }
    }
}