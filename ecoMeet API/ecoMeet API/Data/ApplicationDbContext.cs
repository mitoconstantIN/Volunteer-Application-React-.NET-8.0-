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
               .HasMany(u => u.EventUsers)
               .WithOne(eu => eu.User)
               .HasForeignKey(eu => eu.UserId);

            modelBuilder.Entity<User>()
               .HasMany(u => u.UserCards)
               .WithOne(uc => uc.User)
               .HasForeignKey(uc => uc.UserId);

            modelBuilder.Entity<Card>()
              .HasMany(c => c.UserCards)
              .WithOne(uc => uc.Card)
              .HasForeignKey(uc => uc.CardId)
              .OnDelete(DeleteBehavior.Cascade);
            
            modelBuilder.Entity<Event>()
                .HasMany(e => e.EventUsers)
                .WithOne(eu => eu.Event)
                .HasForeignKey(eu => eu.EventId)
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<EventUser>()
                .HasKey(eu => eu.Id);

            modelBuilder.Entity<UserCard>()
                .HasKey(eu => eu.Id);

            modelBuilder.Entity<EventUser>()
                .HasIndex(eu => new { eu.EventId, eu.UserId })
                .IsUnique();

            modelBuilder.Entity<UserCard>()
                .HasIndex(eu => new { eu.UserId, eu.CardId })
                .IsUnique();

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
