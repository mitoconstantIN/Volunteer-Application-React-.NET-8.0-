using System.ComponentModel.DataAnnotations.Schema;

namespace ecoMeet_API.Models
{
    public class EventUser
    {
        public int Id { get; set; }

        [ForeignKey("UserId")]
        public string UserId { get; set; }
        public virtual User User { get; set; }

        [ForeignKey("EventId")]
        public int EventId { get; set; }
        public virtual Event Event { get; set; }

    }

}