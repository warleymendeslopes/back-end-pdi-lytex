
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './menu/menu.module';
import { MesasModule } from './mesas/mesas.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://root:12mudar@cluster0.gduvjh9.mongodb.net/?retryWrites=true&w=majority'),
    UsersModule,
    AuthModule,
    MenuModule,
    MesasModule,
  ],
})
export class AppModule {}