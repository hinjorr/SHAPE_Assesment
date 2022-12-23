using SHAPE_Assesment.DBContext;
using SHAPE_Assesment.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SHAPE_Assesment.Models
{
    public class RegistrationModel : IRegistration
    {
        private readonly Shape_DBContext db;

        public RegistrationModel(Shape_DBContext db)
        {
            this.db = db;
        }
        public async Task<bool> Register(TblUserInfo dto)
        {
            try
            {
                await db.TblUserInfo.AddAsync(dto);
                await db.SaveChangesAsync();
                return true;
            }
            catch (Exception)
            {
                return false;
            }
        }
    }
}
