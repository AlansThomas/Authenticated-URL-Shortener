import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  @IsString()
  readonly userName: string;

  @IsNotEmpty()
  @IsEmail({}, { message: 'please enter a valid email' })
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;
}


