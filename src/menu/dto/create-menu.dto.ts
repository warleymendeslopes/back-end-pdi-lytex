import * as Joi from 'joi';
const CreateMenuDto = Joi.object({
  name: Joi.string() .max(40) .required(),
  price: Joi.number() .required(),
  description: Joi.string() .required(),
  image: Joi.string(),
})
export { CreateMenuDto };
