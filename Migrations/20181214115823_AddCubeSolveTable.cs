using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BryankroesbeekNl.Migrations
{
    public partial class AddCubeSolveTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CubeSolve",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int(11)", nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    Scramble = table.Column<string>(maxLength: 255, nullable: true, defaultValue: ""),
                    Time = table.Column<int>(type: "int(11)", nullable: false, defaultValue: 0),
                    PuzzleType = table.Column<string>(maxLength: 100, nullable: false, defaultValue: ""),
                    Penalty = table.Column<string>(maxLength: 100, nullable: true, defaultValue: ""),
                    TimeStampSolved = table.Column<long>(type: "bigint(20)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CubeSolve", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CubeSolve");
        }
    }
}
