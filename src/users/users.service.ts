import { Injectable, ConflictException } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "./schema/users.schema";
import { Model } from "mongoose";





@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly UserModel: Model<UserDocument>,
  ){}
  async create(createuser) {
    //verrifica se o email esta cadastrado 
    const userExists = await this.checkExists(
      createuser.email,
    );
    if (userExists) throw new ConflictException('Este e-mail ja esta sendo ultilizado');
    
    const CreateUser = await this.UserModel.create([createuser]);
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




  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
