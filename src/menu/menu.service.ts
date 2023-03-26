import { BadRequestException, Injectable } from "@nestjs/common";
import { UpdateMenuDto } from './dto/update-menu.dto';
import { InjectModel } from "@nestjs/mongoose";
import { Menu, MenuDocument } from "./schema/menu.schema";
import { Model } from "mongoose";
@Injectable()
export class MenuService {

  constructor(
    @InjectModel(Menu.name) private readonly MenuModel: Model<MenuDocument>,

  ){}




  async create(createmenu) {
    const CreateItenMenu = await this.MenuModel.create([createmenu]);
    return CreateItenMenu;
  }

  findAll() {
    return this.MenuModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id) {
    console.log(id)
    return this.MenuModel.findByIdAndDelete(id);
  }
}
