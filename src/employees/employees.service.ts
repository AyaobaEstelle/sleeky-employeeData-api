import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schemas/employee.schema';
import mongoose from 'mongoose';

@Injectable()
export class EmployeesService {

    constructor(
        @InjectModel(Employee.name)
         private employeeModel: mongoose.Model<Employee>,
    ) {}

    async findAll(): Promise<Employee[]> {
        const employees = await this.employeeModel.find();
        return employees;

    }

    async create(employee: Employee): Promise<Employee> {
        const res = await this.employeeModel.create(employee);
        return res;
    }

    async findById(id: string): Promise<Employee> {
        const employee = await this.employeeModel.findById(id);
        if (!employee) {
            throw new NotFoundException(`Employee with id ${id} not found`);
        }
        return employee;
    }

    async updateById(id: string, employee: Employee): Promise<Employee> {
        return await this.employeeModel.findByIdAndUpdate(id, employee, { 
            new: true ,
            runValidators: true
        });
    }

    async deleteById(id: string): Promise<Employee> {
        return await this.employeeModel.findByIdAndDelete(id);
    }
}
