using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace ecoMeet_API.Migrations
{
    /// <inheritdoc />
    public partial class AddUsername : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1d49a8ca-7e61-405f-87e9-e5471f4fd9c5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "228f2d7b-ad52-44ba-8c72-7b1e51072bd2");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "aecd1405-fa3d-4821-9cd1-9f3a4542fe32");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "34015193-1c96-4b6c-80bb-aa9fead9fc69", null, "Organizer", "Organizer" },
                    { "9fc3a8b1-a3c9-44ae-8458-9abb12d87c32", null, "Volunteer", "VOLUNTEER" },
                    { "c989fcd4-9c3e-44ff-923c-473f0b672466", null, "Collaborator", "COLLABORATOR" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "34015193-1c96-4b6c-80bb-aa9fead9fc69");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9fc3a8b1-a3c9-44ae-8458-9abb12d87c32");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "c989fcd4-9c3e-44ff-923c-473f0b672466");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1d49a8ca-7e61-405f-87e9-e5471f4fd9c5", null, "Collaborator", "COLLABORATOR" },
                    { "228f2d7b-ad52-44ba-8c72-7b1e51072bd2", null, "Organizer", "Organizer" },
                    { "aecd1405-fa3d-4821-9cd1-9f3a4542fe32", null, "Volunteer", "VOLUNTEER" }
                });
        }
    }
}
