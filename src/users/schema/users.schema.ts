import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  telefone: string;

  @Prop()
  senha: string;

  @Prop()
  tipo: string;

  @Prop({ default: false })
  isAdmin: boolean;

  @Prop({ default: new Date })
  createat: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
