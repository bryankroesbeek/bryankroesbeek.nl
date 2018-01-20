using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BryankroesbeekNl.Models
{
    public partial class databaseContext : DbContext
    {
        public virtual DbSet<InfoBlock> InfoBlock { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<InfoBlock>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedNever();

                entity.Property(e => e.Content).IsRequired();

                entity.Property(e => e.CreatedDate).IsRequired();

                entity.Property(e => e.Title).IsRequired();

                entity.Property(e => e.UpdatedDate).IsRequired();
            });
        }
    }
}
