import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schemas/employee.schema';
import mongoose from 'mongoose';
import { UpdateEmployeeDto } from './dto/update-employee-dto';
import { User } from 'src/auth/schemas/user.schema';

@Injectable()
export class EmployeesService {

    constructor(
        @InjectModel(Employee.name)
         private employeeModel: mongoose.Model<Employee>,
    ) {}


    async findAllEmployee({ page, limit }: { page: number; limit: number }) {
        const skip = (page - 1) * limit; 
    
        const [employees, total] = await Promise.all([
          this.employeeModel.find().skip(skip).limit(limit).exec(), 
          this.employeeModel.countDocuments().exec(), 
        ]);
    
        return {
          data: employees,
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        };
      }
    

    async createEmployee(employee: Employee, user: User): Promise<Employee> {

      const data = Object.assign(employee, { user: user._id });
        const res = await this.employeeModel.create(employee);
        return res;
    }

    async findEmployeeById(id: string): Promise<Employee> {
        const employee = await this.employeeModel.findById(id);
        if (!employee) {
            throw new NotFoundException(`Employee with id ${id} not found`);
        }
        return employee;
    }

    async updateEmployeeById(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<Employee> {
        const employee = await this.employeeModel.findByIdAndUpdate(id, updateEmployeeDto, { new: true });
        if (!employee) {
          throw new NotFoundException(`Employee with ID ${id} not found`);
        }
        return employee;
      }
      

    async deleteEmployeeById(id: string): Promise<Employee> {
        return await this.employeeModel.findByIdAndDelete(id);
    }
}
