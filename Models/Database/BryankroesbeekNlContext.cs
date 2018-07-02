using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BryankroesbeekNl.Models.Database
{
    public partial class BryankroesbeekNlContext : DbContext
    {
        public BryankroesbeekNlContext(DbContextOptions<BryankroesbeekNlContext> options) : base(options) { }
        public virtual DbSet<Project> Project { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Project>(entity =>
            {
                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.Description).HasColumnType("text");

                entity.Property(e => e.Link)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Position).HasColumnType("int(11)");

                entity.Property(e => e.Visible).HasColumnType("bit(1)");
            });
        }
    }
}
