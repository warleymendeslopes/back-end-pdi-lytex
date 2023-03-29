import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from "mongoose";
import { Mesa, MesaDocument } from './schema/menu.schema';

@Injectable()
export class MesasService {

  constructor(
    @InjectModel(Mesa.name) private readonly MesaModel: Model<MesaDocument>,
    @Inject('QRCode') private readonly qrCodeModule: any
  ){}








  async create(createmesa) {
  // let qrCodeLinkMesa = this.qrCodeModule.toDataURL("www.google.com.br/");
  let LinkMesa= "http://localhost:4200/?mesa="+this.addHyphen();
    createmesa = {
      "name": createmesa.name,
      "description": createmesa.description,
      "cod": this.addHyphen(),
      "CreateAT": new Date(),
      "urlMesa": LinkMesa,
    }
    //const CreateItenMesa = await this.MesaModel.create([createmesa]);
    return createmesa
  }

  createQrCode(codeMesa){
    return  this.qrCodeModule.toDataURL("http://localhost:4200/?mesa="+codeMesa);
  }

  addHyphen() {
    const randomNum = Math.floor(Math.random() * 300004 + 746);
    const randomNumber = randomNum.toString().slice(0,6);
    let result = "";
    for (let i = 0; i < randomNumber.length; i++) {
      if (i !== 0 && i % 3 === 0) {
        result += "-";
      }
      result += randomNumber[i];
    }
    return result;
  }
  

}