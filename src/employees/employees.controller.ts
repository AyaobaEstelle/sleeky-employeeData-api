import {Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './schemas/employee.schema';
import { CreateEmployeeDto } from './dto/create-employee-dto';
import { UpdateEmployeeDto } from './dto/update-employee-dto';
import { PaginationDto } from './dto/pagination-dto';

@Controller('employees')
export class EmployeesController {
    constructor(private readonly employeeService: EmployeesService) {}

  
     @Get()
  async findAll(@Query() paginationDto: PaginationDto) {
    const { page = 1, limit = 10 } = paginationDto;
    return this.employeeService.findAllEmployee({ page, limit });
  }



    @Post()
    async createEmployee(
        @Body()
        employee: CreateEmployeeDto
        ): Promise<Employee> { 
        return this.employeeService.createEmployee(employee);
    }

    @Get(':id')
    async getEmployee(@Param('id') id: string): Promise<Employee> { 
        return this.employeeService.findEmployeeById(id); 
    }

    @Put(':id')
async updateEmployee(
  @Param('id') id: string, 
  @Body() updateEmployeeDto: UpdateEmployeeDto 
): Promise<Employee> { 
  return this.employeeService.updateEmployeeById(id, updateEmployeeDto); 
}


    @Delete(':id')
    async deleteEmployee(@Param('id') id: string): Promise<Employee> { 
        return this.employeeService.deleteEmployeeById(id); 
    }
}
