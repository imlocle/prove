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
        public List<Employee> GetAll()
        {
            var listEmployees = new List<Employee>();
            // example data
            var emp1 = new Employee(){
                Id = 1,
                FirstName = "Lois",
                LastName = "Griffin",
                EmployeeTypeId = 1,
            };
            var emp2 = new Employee(){
                Id = 2,
                FirstName = "Frank",
                LastName = "Murphy",
                EmployeeTypeId = 24,
            };

            listEmployees.Add(emp1);
            listEmployees.Add(emp2);

            return listEmployees;
        }
    }
}