using System;

namespace prove.Models
{
    public class Employee 
    {
        public int Id {get;set;}
        public string FirstName {get; set;}
        public string LastName {get; set;}
        public int EmployeeTypeId {get; set;}
        public string Availability {get;set;}
        public DateTime CreateDate {get;set;}
        public DateTime Modified {get;set;}
    }

    public class EmployeeView
    {
        public string FirstName {get; set;}
        public string LastName {get; set;}
        public string EmployeeType {get; set;}
    }
}