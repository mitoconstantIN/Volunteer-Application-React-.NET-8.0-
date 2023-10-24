using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.Models
{
    public partial class Shop_item
    {
        public int Id { get; set; }
        public string Name { get; set; } = null!;
        public int Price { get; set; }
        public string Description { get; set; } = null!;
        [Required]
        public string? CollaboratorEmail { get; set; }

        public virtual Collaborator? CollaboratorEmailNavigation { get; set; }
    }
}
