import { IsBoolean, IsDate, IsEmail,  IsString, IsStrongPassword, IsUUID } from 'class-validator';

export class CreateUserDTO {

  @IsString()
  name: string;

  @IsString()
  contact: string;

  @IsString()
  nationalId: string;
  
  @IsDate()
  birthDate: Date;

  @IsStrongPassword({
  minLength: 6,
  minUppercase: 0,
  minNumbers: 0,
  minSymbols: 0
})
  password: string;

  @IsEmail()
  email: string;
}