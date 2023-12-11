import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
    
  @IsNotEmpty()
  @IsEmail({}, { message: 'please enter a valid email' })
  readonly email: string;

  @IsNotEmpty()
  readonly password: string;
}
