using System.ComponentModel.DataAnnotations.Schema;

namespace ecoMeet_API.Models
{
    public class Card
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Points { get; set; }
        public string ImageUrl { get; set; }
        public string Description { get; set; }

        public UserCard UserCard {get; set;}
    }
}
