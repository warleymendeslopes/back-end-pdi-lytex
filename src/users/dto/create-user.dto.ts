import * as Joi from 'joi';
const CreateUser = Joi.object({
  name: Joi.string() .max(100) .required(),
  email: Joi.string() .required(),
  telefone: Joi.string() .required(),
  senha: Joi.string() .required(),
})
export { CreateUser };
