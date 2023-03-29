import * as Joi from 'joi';
const CreateMesaDto = Joi.object({
  name: Joi.string() .max(40) .required(),
  description: Joi.string() .required(),
})
export { CreateMesaDto };
