import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MesaDocument = HydratedDocument<Mesa>;

@Schema()
export class Mesa {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  cod: number;

  @Prop()
  urlMesa: string;

  @Prop()
  CreateAT: Date;
}

export const MesaSchema = SchemaFactory.createForClass(Mesa);


