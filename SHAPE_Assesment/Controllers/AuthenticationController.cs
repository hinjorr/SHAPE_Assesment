using Microsoft.AspNetCore.Mvc;
using SHAPE_Assesment.DBContext;
using SHAPE_Assesment.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SHAPE_Assesment.Controllers
{
    public class AuthenticationController : Controller
    {
        private readonly IRegistration service;
        public AuthenticationController(IRegistration service)
        {
            this.service = service;
        }
        public IActionResult SignUp()
        {
            return View();
        }

        [HttpPost("RegisterUser")]
        public async Task<IActionResult> RegisterUser(TblUserInfo dto)
        {
            var chk = await service.Register(dto);
            var message = chk ? "User Registered Successfully!" : "Registration Failed!";
            return Ok(message);
        }
    }
}
