import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, Request } from '@nestjs/common';
import { MesasService } from './mesas.service';
import { CreateMesaDto } from './dto/create-mesa.dto';
import { JoiValidationPipe } from 'src/outros/joi/joi-validation.pipe';


@Controller('mesas')
export class MesasController {
  constructor(private readonly mesasService: MesasService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body(new JoiValidationPipe(CreateMesaDto)) createmesa,
    @Request() {},
  ) {
    return this.mesasService.create(createmesa);
  }

  @Get('code/:code')
  createQrCode(@Param('code') code: string) {
    return this.mesasService.createQrCode(code);
  }

  
}
