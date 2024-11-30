namespace ecoMeet_API.Dtos.User
{
    public class NewUserDto
    {
        public string Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Token { get; set; }
        public int UserType { get; set; }
        public string FirstName {  get; set; }
        public string LastName { get; set; }
        public string City { get; set; }
        public int Points { get; set; }
        public string OrganizationName {  get; set; }
        public string OrganizationEmail { get; set; }
        public string PhoneNumber { get; set; }

    }
}
