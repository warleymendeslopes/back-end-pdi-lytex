import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { User, UserSchema } from "../users/schema/users.schema";
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';





@Module({
  imports: [PassportModule, JwtModule.register({
    secret: "Um4M3n24g3m2ecr3t4",
    signOptions: { expiresIn: '86400s' },
  }), MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],

  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy
  ]
})
export class AuthModule {}





