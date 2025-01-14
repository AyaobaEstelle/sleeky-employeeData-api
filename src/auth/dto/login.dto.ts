import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class LoginDto {
    @IsNotEmpty({ message: 'Email is required' })
    @IsEmail({}, { message: 'Email must be valid' })
    readonly email: string;
  
    @IsNotEmpty({ message: 'Password is required' })
    @IsString()
    readonly password: string;

}