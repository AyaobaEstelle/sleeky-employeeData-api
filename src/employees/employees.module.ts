import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { EmployeeSchema } from './schemas/employee.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Employee", schema: EmployeeSchema }])],
  controllers: [EmployeesController],
  providers: [EmployeesService]
})
export class EmployeesModule {}
