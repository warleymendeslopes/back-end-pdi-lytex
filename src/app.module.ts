
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:12mudar@cluster0.gduvjh9.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule,
  ],
})
export class AppModule {}
