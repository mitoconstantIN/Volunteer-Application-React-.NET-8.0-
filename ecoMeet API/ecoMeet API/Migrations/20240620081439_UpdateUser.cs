using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace ecoMeet_API.Migrations
{
    /// <inheritdoc />
    public partial class UpdateUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "72bf442b-8682-4bd8-b6c5-f83eedb35f75");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9adce67f-7988-417f-a309-4a0d2b6536e1");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "dcff5cfa-9a7c-45b6-b868-a035492bf7ed");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "217934a0-3dd9-4400-bd96-b6b37f8a8bd0", null, "Volunteer", "VOLUNTEER" },
                    { "2247f672-8e3a-4312-b1e6-eacaafd1ff75", null, "Collaborator", "COLLABORATOR" },
                    { "cb2a5d42-28be-4af5-b261-b525a455497c", null, "Organizer", "Organizer" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "217934a0-3dd9-4400-bd96-b6b37f8a8bd0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "2247f672-8e3a-4312-b1e6-eacaafd1ff75");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "cb2a5d42-28be-4af5-b261-b525a455497c");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "72bf442b-8682-4bd8-b6c5-f83eedb35f75", null, "Collaborator", "COLLABORATOR" },
                    { "9adce67f-7988-417f-a309-4a0d2b6536e1", null, "Volunteer", "VOLUNTEER" },
                    { "dcff5cfa-9a7c-45b6-b868-a035492bf7ed", null, "Organizer", "Organizer" }
                });
        }
    }
}
