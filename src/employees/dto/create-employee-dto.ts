import { IsString, IsEmail, IsNotEmpty, IsDateString, Length, Matches, IsEmpty } from 'class-validator';
import { User } from 'src/auth/schemas/user.schema';

export class CreateEmployeeDto {
  @IsNotEmpty()
  @IsString()
  @Length(2, 50)
  readonly firstName: string;

  @IsString()
  @IsNotEmpty()
  @Length(2, 50)
  readonly lastName: string;

  @IsString()
  @IsNotEmpty()
  readonly gender: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail({}, { message: 'Enter correct email address' })
  readonly emailAddress: string;

  @IsString()
  @IsNotEmpty()
  readonly physicalAddress: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\+?[1-9]\d{1,14}$/, { message: 'Invalid phone number format' })
  readonly phoneNumber: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\+?[1-9]\d{1,14}$/, { message: 'Invalid emergency phone number format' })
  readonly emergencyPhoneNumber: string;

  @IsString()
  @IsNotEmpty()
  readonly bankName: string;

  @IsString()
  @IsNotEmpty()
  readonly bankAccountNumber: string;

  @IsString()
  @IsNotEmpty()
  readonly accountName: string;

  @IsString()
  readonly nextOfKinFullName: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^\+?[1-9]\d{1,14}$/, { message: 'Invalid next of kin phone number format' })
  readonly nextOfKinPhoneNumber: string;

  @IsString()
  @IsNotEmpty()
  readonly nextOfKinRelationship: string;

  @IsString()
  @IsNotEmpty()
  readonly employmentRole: string;

  @IsNotEmpty()
  @IsDateString({}, { message: 'Invalid date format for employment start date' })
  readonly employmentStartDate: Date;

  @IsNotEmpty()
  @IsDateString({}, { message: 'Invalid date format for date of birth' })
  readonly dateOfBirth: Date;

  @IsNotEmpty()
  @IsString()
  readonly educationalLevel: string;

  @IsEmpty({message: "cannot pass user id"})
  readonly user: User
}
