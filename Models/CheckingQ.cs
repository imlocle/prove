using System;

namespace prove.Models
{
    // Model matches db
    public class CheckingQ 
    {
        public int Id {get;set;}
        public int SeverityLevel {get;set;}
        public bool Covid19 {get;set;}
        public string Illness {get;set;}
        public DateTime CreatedDate {get;set;}
    }

    // Model matches the View
    public class CheckingQView
    {
        public string Id {get;set;}
        public string PatientId {get; set;}
        public string FirstName{get;set;}
        public string LastName {get;set;}
        public string DateOfBirth {get;set;}
        public string SeverityLevel {get;set;}
        public string Covid19 {get;set;}
        public string Illness {get;set;}
        public string CreatedDate {get;set;}
    }
}