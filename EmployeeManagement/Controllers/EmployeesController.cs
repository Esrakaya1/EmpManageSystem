using EmployeeManagement.Models;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeesController : ControllerBase
    {

        static List<Employee> employees = new List<Employee> {
            new Employee { Id = 1, name = "Serhat Sari", age = 28, department = "Satin alma" },
            new Employee { Id = 2, name = "Ebru Yakut", age = 35, department = "IT" },
            new Employee { Id = 3, name = "Ömer Çoban", age = 30, department = "İnsan Kaynaklari" },
            new Employee { Id = 4, name = "Burcu Güleç", age = 26, department = "Yazilim Gelistirme" },
            new Employee { Id = 5, name = "Ali Günes", age = 27, department = "Yazilim Gelistirme" }
         };

        [HttpGet]
        public List<Employee> GetEmployees()
        {
            return employees;
        }

        [HttpGet("{id}")]
        public Employee GetEmployee(int id)
        {
            return employees.FirstOrDefault(e => e.Id == id);
        }
        private static int nextId = 6;
        [HttpPost]
        public Employee Post(Employee employee)
        {
            employee.Id = nextId++; // Yeni çalışana otomatik artan bir Id verilir.
            employees.Add(employee);
            return employee;
        }

        [HttpPut("{id}")]
        public Employee UpdateEmployee(int id, Employee updatedEmployee)
        {
            var employee = employees.FirstOrDefault(e => e.Id == id);

            employee.name = updatedEmployee.name;
            employee.age = updatedEmployee.age;
            employee.department = updatedEmployee.department;

            return employee;
        }

        [HttpDelete("{id}")]
        public void DeleteEmployee(int id)
        {
            var employee = employees.FirstOrDefault(e => e.Id == id);
            if (employee != null)
            {
                employees.Remove(employee);
            }

        }

    }
}
