using System;

namespace prove.Models
{
    public class Patient
    {
        public int Id {get;set;}
        public string FirstName {get;set;}
        public string LastName {get;set;}
        public DateTime DateOfBirth {get;set;}
    }
    public class PatientView
    {
        public string FirstName {get;set;}
        public string LastName {get;set;}
        public string DateOfBirth {get;set;}
    }
}