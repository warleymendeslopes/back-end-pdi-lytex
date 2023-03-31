import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../users/schema/users.schema";
import { Model } from "mongoose";

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {

  constructor(
    @InjectModel(User.name) private readonly UserModel: Model<UserDocument>,
    private jwtService: JwtService,
  ){}


    //verifica se existe um usuario com o mesmo e-mail 
    async checkExists(email: string): Promise<UserDocument> {
      return this.UserModel.findOne({
        $or: [{ email }],
      });
    }
  
    async Login(loginuser){


      console.log(loginuser)
          //verrifica se o email esta cadastrado 
          const userExists = await this.checkExists(
            loginuser.email,
          );
          if (userExists){
            const isMatch = await bcrypt.compare(loginuser.senha, userExists.senha);
            if(!isMatch) throw new UnauthorizedException();
            const payload = { data: userExists };
            return {
              access_token: this.jwtService.sign(payload),
              _id: userExists._id,
              username: userExists.name,
              email: userExists.email,
              tipo: userExists.tipo
            };
            
  
  
           
          }else throw new ConflictException('Este e-mail nao esta cadastrado');
    }

    async Register(registeruser){
      const userExists = await this.checkExists(
        registeruser.email,
      );
      if (userExists) throw new ConflictException('Este e-mail ja esta cadastrado');
      const user = new this.UserModel(registeruser);
      user.senha = await bcrypt.hash(registeruser.senha, 10);
      user.tipo = registeruser.tipo;
      await user.save();
      return user;
    }



}
