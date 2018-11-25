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

            modelBuilder.Entity<CubeSolve>(entity =>
            {
                entity.HasKey(e => e.Id);

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int(11)");

                entity.Property(e => e.PuzzleType)
                    .IsRequired()
                    .HasMaxLength(100)
                    .HasDefaultValue("");

                entity.Property(e => e.Scramble)
                    .HasMaxLength(255)
                    .HasDefaultValue("");

                entity.Property(e => e.Time)
                    .HasColumnType("int(11)")
                    .HasDefaultValue(0);

                entity.Property(e => e.Penalty)
                    .HasMaxLength(100)
                    .HasDefaultValue("");

                entity.Property(e => e.TimeStampSolved)
                    .HasColumnType("bigint(20)");
            });

            modelBuilder.Entity<AuthToken>(entity =>
            {
                entity.HasKey(e => e.Id);

                entity.Property(e => e.Id)
                    .ValueGeneratedOnAdd()
                    .HasColumnType("int(11)");

                entity.Property(e => e.Token)
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedAt).HasColumnType("bigint(20)");

                entity.Property(e => e.ExpiresAt).HasColumnType("bigint(20)");
            });
        }
    }
}
