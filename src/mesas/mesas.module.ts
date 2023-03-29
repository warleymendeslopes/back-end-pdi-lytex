import { Module } from '@nestjs/common';
import { MesasService } from './mesas.service';
import { MesasController } from './mesas.controller';

import { Mesa, MesaSchema } from './schema/menu.schema';
import { MongooseModule } from '@nestjs/mongoose';
import * as QRCode from 'qrcode';

@Module({
  imports: [ MongooseModule.forFeature([{name: Mesa.name, schema: MesaSchema}])],
  controllers: [MesasController],
  providers: [
    MesasService,
    {
      provide: 'QRCode', // defina um nome para o provider do QRCode
      useValue: QRCode, // use o módulo do QRCode como valor do provider
    },
  ]
})
export class MesasModule {}





