import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUser } from './dto/create-user.dto';
import { JoiValidationPipe } from '../outros/joi/joi-validation.pipe'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body(new JoiValidationPipe(CreateUser)) createuser,
  @Request() {},
  ) {
    return this.usersService.create(createuser);
  }
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.usersService.findAll();
  }
  
}
