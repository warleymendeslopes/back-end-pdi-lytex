import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schema/users.schema";
import { Model } from "mongoose";
import * as bcrypt from 'bcrypt';







const saltOrRounds = 10;


@Injectable()
export class UsersService {

  findOne() {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectModel(User.name) private readonly UserModel: Model<UserDocument>,

  ){}
  async create(createuser) {
    //verrifica se o email esta cadastrado 
    const userExists = await this.checkExists(
      createuser.email,
    );
    if (userExists) throw new ConflictException('Este e-mail ja esta sendo ultilizado');

    const hash = await bcrypt.hash(createuser.senha, saltOrRounds);
    var UpdateUsers = {
      name: createuser.name, 
      email: createuser.email, 
      telefone: createuser.telefone, 
      senha: hash,
    }
  
    const CreateUser = await this.UserModel.create([UpdateUsers]);
    return CreateUser;
  }

  findAll() {
    return this.UserModel.find().exec();
  }



  //verifica se existe um usuario com o mesmo e-mail 
  async checkExists(email: string): Promise<UserDocument> {
    return this.UserModel.findOne({
      $or: [{ email }],
    });
  }
}
