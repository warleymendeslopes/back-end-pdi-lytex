import * as Joi from 'joi';
const LoginUser = Joi.object({
  email: Joi.string() .required(),
  senha: Joi.string() .required(),
})
export { LoginUser };
