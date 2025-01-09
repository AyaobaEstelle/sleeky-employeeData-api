import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class SignUpDto {
    @IsNotEmpty({ message: 'Name is required' })
    @IsString()
   readonly name: string;
  
    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail({}, { message: 'Email must be valid' })
   readonly email: string;
  
    @IsNotEmpty({ message: 'Password is required' })
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
   readonly password: string;
}