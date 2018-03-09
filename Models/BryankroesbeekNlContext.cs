using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BryankroesbeekNl.Models
{
    public partial class BryankroesbeekNlContext : DbContext
    {
        public BryankroesbeekNlContext(DbContextOptions<BryankroesbeekNlContext> options) : base(options) { }
        public virtual DbSet<Repository> Repository { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Repository>(entity =>
            {
                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.Description).HasColumnType("text");

                entity.Property(e => e.GithubId).HasColumnType("int(11)");

                entity.Property(e => e.Link)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.OwnerName)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.Position).HasColumnType("int(11)");

                entity.Property(e => e.Visible).HasColumnType("bool");
            });
        }
    }
}
