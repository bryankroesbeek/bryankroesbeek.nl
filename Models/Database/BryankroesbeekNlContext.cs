using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BryankroesbeekNl.Models.Database
{
    public partial class BryankroesbeekNlContext : DbContext
    {
        public BryankroesbeekNlContext(DbContextOptions<BryankroesbeekNlContext> options) : base(options) { }
        public virtual DbSet<Project> Project { get; set; }
        public virtual DbSet<Experience> Experience { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Project>(entity =>
            {
                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.Description).HasColumnType("text");

                entity.Property(e => e.Link)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasDefaultValue("");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasDefaultValue("");

                entity.Property(e => e.Position)
                    .HasColumnType("int(11)")
                    .HasDefaultValue(0);

                entity.Property(e => e.Visible)
                    .HasColumnType("bit(1)")
                    .HasDefaultValue(false);
            });

            modelBuilder.Entity<Experience>(entity =>
            {
                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.Description).HasColumnType("text");

                entity.Property(e => e.Company)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasDefaultValue("");

                entity.Property(e => e.Position)
                    .IsRequired()
                    .HasMaxLength(255)
                    .HasDefaultValue("");

                entity.Property(e => e.StartYear)
                    .HasDefaultValue(null);

                entity.Property(e => e.EndYear)
                    .HasDefaultValue(null);
            });
        }
    }
}
