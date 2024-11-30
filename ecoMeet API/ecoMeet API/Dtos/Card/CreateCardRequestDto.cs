namespace ecoMeet_API.Dtos.Card
{
    public class CreateCardRequestDto
    {
            public int Id { get; set; }
            public string Title { get; set; }
            public int Points { get; set; }
            public string ImageUrl { get; set; }
            public string Description { get; set; }
    }
}
