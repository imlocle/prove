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
    }
}
