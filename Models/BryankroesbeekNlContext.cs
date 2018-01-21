using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace BryankroesbeekNl.Models
{
    public partial class BryankroesbeekNlContext : DbContext
    {
        public virtual DbSet<InfoBlock> InfoBlock { get; set; }

        public BryankroesbeekNlContext(DbContextOptions<BryankroesbeekNlContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<InfoBlock>(entity =>
            {
                entity.Property(e => e.Id).HasColumnType("int(11)");

                entity.Property(e => e.Content)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.Created).HasColumnType("datetime");

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(255);

                entity.Property(e => e.Updated).HasColumnType("datetime");
            });
        }
    }
}
