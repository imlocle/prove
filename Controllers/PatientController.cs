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
    public class PatientController : ControllerBase
    {
        [HttpPost]
        [Route("patientCheckingQData")]
        public Object PatientCheckingQData(Object patientCheckingQData)
        {
            var data = JsonConvert.DeserializeObject<CheckingQView>(patientCheckingQData.ToString());
            // log for testing
            Console.WriteLine(data);
            // convert data to Patient and CheckingQ models
            // Then Save to db with matching tables and columns with models
            return data;
        }
        [HttpPost]
        [Route("patientNurseQData")]
        public Object PatientNurseQData(Object patientNurseQData)
        {
            var data = JsonConvert.DeserializeObject<NurseQView>(patientNurseQData.ToString());
            // log for testing
            Console.WriteLine(data);
            // convert data to Patient and NurseQ models
            // Then Save to db with matching tables and columns with models
            return data;
        }
        [HttpGet]
        [Route("getAllCurrentPatients")]
        public List<Patient> GetAllCurrentPatients()
        {
            var allPatients = new List<Patient>();
            // dummy data
            var p1 = new Patient
            {
                Id = 1,
                FirstName = "Richard",
                LastName = "Grayson"
            };
            var p2 = new Patient
            {
                Id = 2,
                FirstName = "Wally",
                LastName = "West"
            };
            var p3 = new Patient
            {
                Id = 3,
                FirstName = "Roy",
                LastName = "Harper"
            };

            allPatients.Add(p1);
            allPatients.Add(p2);
            allPatients.Add(p3);

            return allPatients;
        }
    }
}
