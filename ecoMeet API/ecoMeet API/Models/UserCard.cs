using System.ComponentModel.DataAnnotations.Schema;

namespace ecoMeet_API.Models
{
    public class UserCard
    {
        public int Id { get; set; }

        [ForeignKey("UserId")]
        public string UserId { get; set; }
        public virtual User User { get; set; }

        [ForeignKey("CardId")]
        public int CardId { get; set; }
        public virtual Card Card { get; set; }
    }
}
