using SHAPE_Assesment.DBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SHAPE_Assesment.Repository
{
    public interface IRegistration
    {
        Task<bool> Register(TblUserInfo dto);
    }
}
