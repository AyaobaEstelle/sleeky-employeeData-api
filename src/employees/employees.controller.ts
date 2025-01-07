import {Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './schemas/employee.schema';
import { CreateEmployeeDto } from './dto/create-employee-dto';
import { UpdateEmployeeDto } from './dto/update-employee-dto';

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeeService: EmployeesService) {}

    @Get()
    async getAllEmployees(): Promise<Employee[]> { 
        return this.employeeService.findAll(); 
    }CreateEmployeeDto 

    @Post()
    async createEmployee(
        @Body()
        employee: CreateEmployeeDto
        ): Promise<Employee> { 
        return this.employeeService.create(employee);
    }

    @Get(':id')
    async getEmployee(@Param('id') id: string): Promise<Employee> { 
        return this.employeeService.findById(id); 
    }

    @Put(':id')
    async updateEmployee(
        @Param('id')
         id: string,
        @Body()
        employee: UpdateEmployeeDto
        ): Promise<Employee> { 
        return this.employeeService.updateById(id, employee); 
    }

    @Delete(':id')
    async deleteEmployee(@Param('id') id: string): Promise<Employee> { 
        return this.employeeService.deleteById(id); 
    }
}
