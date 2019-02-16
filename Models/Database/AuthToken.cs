namespace BryankroesbeekNl.Models.Database
{
    public class AuthToken
    {
        public int Id { get; set; }
        public string Token { get; set; }
        public long CreatedAt { get; set; }
        public long ExpiresAt { get; set; }
    }
}