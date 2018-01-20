using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BryankroesbeekNl.Models
{
    public partial class databaseContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlite(@"Filename=./dbname");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        { }
    }
}
