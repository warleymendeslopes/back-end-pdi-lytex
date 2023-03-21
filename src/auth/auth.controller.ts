import { Controller, Post, Body, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUser } from './dto/login-user.dto'
import { JoiValidationPipe } from 'src/outros/joi/joi-validation.pipe';
import { RegisterUser } from './dto/register-user.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('login')
  login(
    @Body(new JoiValidationPipe(LoginUser)) loginuser,
  ) {
    return this.authService.Login(loginuser);
  }

  @Post('register')
  register(
    @Body(new JoiValidationPipe(RegisterUser)) loginuser,
  ) {
    return this.authService.Register(loginuser)
    
  }
}


