import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/users.schema';

import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register({
          secret: "Um4M3n24g3m2ecr3t4",
          signOptions: { expiresIn: '86400s' },
        }), MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
  controllers: [UsersController],
  providers: [UsersService]
})







export class UsersModule {}

