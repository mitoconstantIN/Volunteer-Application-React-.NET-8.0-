using ecoMeet_API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace ecoMeet_API.Data
{
    public class ApplicationDbContext : IdentityDbContext<User>
    {
        public ApplicationDbContext()
        {

        }
        public ApplicationDbContext(DbContextOptions dbContextOptions)
            : base(dbContextOptions)
        {

        }

        public DbSet<Event> Events { get; set; }
        public DbSet<Card> Cards { get; set; }
        public DbSet<EventUser> EventUsers { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<UserCard> UserCards { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
               .HasOne(u => u.EventUser)
               .WithOne(eu => eu.User)
               .HasForeignKey<EventUser>(eu => eu.UserId);

            modelBuilder.Entity<User>()
               .HasOne(u => u.UserCard)
               .WithOne(uc => uc.User)
               .HasForeignKey<UserCard>(uc => uc.UserId);

            modelBuilder.Entity<Card>()
              .HasOne(c => c.UserCard)
              .WithOne(uc => uc.Card)
              .HasForeignKey<UserCard>(uc => uc.CardId)
              .OnDelete(DeleteBehavior.Cascade);
            
            modelBuilder.Entity<Event>()
                .HasOne(e => e.EventUser)
                .WithOne(eu => eu.Event)
                .HasForeignKey<EventUser>(eu => eu.EventId)
                .OnDelete(DeleteBehavior.Cascade);

            List<IdentityRole> roles = new List<IdentityRole>
            {
                new IdentityRole
                {
                    Name = "Volunteer",
                    NormalizedName = "VOLUNTEER"
                },
                new IdentityRole
                {
                    Name = "Organizer",
                    NormalizedName = "Organizer"
                },
                new IdentityRole
                {
                    Name = "Collaborator",
                    NormalizedName = "COLLABORATOR"
                },
            };
            modelBuilder.Entity<IdentityRole>().HasData(roles);
        }
    }
}
