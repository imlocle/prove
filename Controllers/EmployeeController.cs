using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using prove.Models;
using Newtonsoft.Json;

namespace prove.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        public List<EmployeeView> GetAll()
        {
            var listEmployees = new List<EmployeeView>();
            // example data
            var emp1 = new EmployeeView(){
                FirstName = "Lois",
                LastName = "Griffin",
                EmployeeType = "Physician",
            };
            var emp2 = new EmployeeView(){
                FirstName = "Frank",
                LastName = "Murphy",
                EmployeeType = "CNA",
            };

            listEmployees.Add(emp1);
            listEmployees.Add(emp2);

            return listEmployees;
        }
    }
}