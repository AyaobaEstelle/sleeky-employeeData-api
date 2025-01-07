import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })

export class Employee {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  gender: string;

  @Prop({ required: true, unique: true })
  emailAddress: string;

  @Prop({ required: true })
  physicalAddress: string;

  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ required: true })
  emergencyPhoneNumber: string;

  @Prop({ required: true })
  bankName: string;

  @Prop({ required: true })
  bankAccountNumber: string;

  @Prop({ required: true })
  accountName: string;

  @Prop({ required: true })
  nextOfKinFullName: string;

  @Prop({ required: true })
  nextOfKinPhoneNumber: string;

  @Prop({ required: true })
  nextOfKinRelationship: string;

  @Prop({ required: true })
  employmentRole: string;

  @Prop({ required: true })
  employmentStartDate: Date;

  @Prop({ required: true })
  dateOfBirth: Date;

  @Prop({ required: true })
  educationalLevel: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
