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
        public List<SupplyView> GetAll()
        {
            var listSupplies = new List<SupplyView>();
            // example data
            var sup1 = new SupplyView(){
                Name = "Wheelchair"
            };
            var sup2 = new SupplyView(){
                Name = "Crutch"
            };

            listSupplies.Add(sup1);
            listSupplies.Add(sup2);

            return listSupplies;
        }
    }
}