

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
          //verrifica se o email esta cadastrado 
          const userExists = await this.checkExists(
            loginuser.email,
          );
          if (userExists){
            const isMatch = await bcrypt.compare(loginuser.senha, userExists.senha);
            if(!isMatch) throw new UnauthorizedException();
            const payload = { username: userExists.name, sub: userExists._id };
            return {
              access_token: this.jwtService.sign(payload),
            };
            
  
  
            return isMatch
          }else throw new ConflictException('Este e-mail nao esta cadastrado');
    }



}
