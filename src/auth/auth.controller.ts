import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import {LoginUser} from './dto/login-user.dto'
import { JoiValidationPipe } from 'src/outros/joi/joi-validation.pipe';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}





  @Post()
  login(@Body(new JoiValidationPipe(LoginUser)) loginuser,
  @Request() {},
  ){
   // return loginuser
    return this.authService.Login(loginuser);
  }
}

