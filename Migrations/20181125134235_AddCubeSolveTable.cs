using Microsoft.EntityFrameworkCore.Migrations;

namespace BryankroesbeekNl.Migrations
{
    public partial class AddCubeSolveTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TimeSolved",
                table: "CubeSolve");

            migrationBuilder.AddColumn<long>(
                name: "TimeStampSolved",
                table: "CubeSolve",
                type: "bigint(20)",
                nullable: false,
                defaultValue: 0L);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TimeStampSolved",
                table: "CubeSolve");

            migrationBuilder.AddColumn<long>(
                name: "TimeSolved",
                table: "CubeSolve",
                type: "bigint(20)",
                nullable: false,
                defaultValue: -8586584538770922462L);
        }
    }
}
