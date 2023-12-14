import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import * as bcrypt from 'bcryptjs';
import { RegisterDto } from 'src/dto/register.dto';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from 'src/dto/login.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name)
    private userModal: Model<User>,
    private jwtservice: JwtService,
  ) {}

  async userRegster(registerDto: RegisterDto) {
    try {
      const { userName, email, password } = registerDto;
      const hashedPassword = await bcrypt.hash(password || '', 5);
      const user = await this.userModal.create({
        userName,
        email,
        password: hashedPassword,
      });
      const token = this.jwtservice.sign({ id: user.id });
      return { token };
    } catch (error) {
      console.error('Error during user registration:', error);
    }
  }

  async userLogin(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const user = await this.userModal.findOne({ email });
    if (!user) {
      throw new UnauthorizedException('invalid email ');
    }

    const passwordMatched = await bcrypt.compare(password, user.password);

    if (!passwordMatched) {
      throw new UnauthorizedException('invalid password');
    }
    const token = this.jwtservice.sign({ id: user.id });
    return { token };
  }
}
