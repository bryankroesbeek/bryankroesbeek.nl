﻿// <auto-generated />
using BryankroesbeekNl.Models.Database;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace BryankroesbeekNl.Migrations
{
    [DbContext(typeof(BryankroesbeekNlContext))]
    [Migration("20181125134235_AddCubeSolveTable")]
    partial class AddCubeSolveTable
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("BryankroesbeekNl.Models.Database.AuthToken", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)");

                    b.Property<long>("CreatedAt")
                        .HasColumnType("bigint(20)");

                    b.Property<long>("ExpiresAt")
                        .HasColumnType("bigint(20)");

                    b.Property<string>("Token")
                        .HasMaxLength(255);

                    b.HasKey("Id");

                    b.ToTable("AuthToken");
                });

            modelBuilder.Entity("BryankroesbeekNl.Models.Database.CubeSolve", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)");

                    b.Property<string>("Penalty")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(100)
                        .HasDefaultValue("");

                    b.Property<string>("PuzzleType")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(100)
                        .HasDefaultValue("");

                    b.Property<string>("Scramble")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(255)
                        .HasDefaultValue("");

                    b.Property<int>("Time")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasDefaultValue(0);

                    b.Property<long>("TimeStampSolved")
                        .HasColumnType("bigint(20)");

                    b.HasKey("Id");

                    b.ToTable("CubeSolve");
                });

            modelBuilder.Entity("BryankroesbeekNl.Models.Database.Project", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)");

                    b.Property<string>("Description")
                        .HasColumnType("text");

                    b.Property<string>("Link")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(255)
                        .HasDefaultValue("");

                    b.Property<string>("Name")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(100)
                        .HasDefaultValue("");

                    b.Property<int>("Position")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int(11)")
                        .HasDefaultValue(0);

                    b.Property<bool>("Visible")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit(1)")
                        .HasDefaultValue(false);

                    b.HasKey("Id");

                    b.ToTable("Project");
                });
#pragma warning restore 612, 618
        }
    }
}
