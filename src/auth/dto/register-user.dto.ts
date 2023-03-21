import * as Joi from 'joi';
const RegisterUser = Joi.object({
  email: Joi.string() .required(),
  senha: Joi.string() .required(),
  telefone: Joi.string() .required(),
  nome: Joi.string() .required(),
  tipo: Joi.string() .required(),
})
export { RegisterUser };
