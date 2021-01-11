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
    public class SupplyController : ControllerBase
    {
        [HttpGet]
        public List<Supply> GetAll()
        {
            var listSupplies = new List<Supply>();
            // example data
            var sup1 = new Supply(){
                Id = 1,
                Name = "Wheelchair"
            };
            var sup2 = new Supply(){
                Id = 2,
                Name = "Crutch"
            };

            listSupplies.Add(sup1);
            listSupplies.Add(sup2);

            return listSupplies;
        }
    }
}