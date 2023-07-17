import { IsEmail, IsString, MinLength } from 'class-validator';

export class AuthForgetDTO {
  @IsEmail()
  email: string;
}
