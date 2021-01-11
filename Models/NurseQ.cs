using System;

namespace prove.Models
{
    public class NurseQ 
    {
        public int Id {get;set;}
        public string Illness{get;set;}
        public string Detail{get;set;}
        public DateTime SubmitDateTime {get;set;}
    }

    public class NurseQView
    {
        public string Id {get;set;}
        public string EmployeeId{get;set;}
        public string PatientId {get; set;}
        public string FirstName{get;set;}
        public string LastName {get;set;}
        public string DateOfBirth {get;set;}
        public string Illness {get;set;}
        public string Detail {get;set;}
        public string CreatedDate {get;set;}
        public string Cast {get;set;}
        public string CastType {get;set;}
    }
}