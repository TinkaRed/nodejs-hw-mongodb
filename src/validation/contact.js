import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be at least 3 symbols',
    'string.max': 'Name must be under 20 symbols',
    'any.required': 'Name is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Phone must be a string',
    'string.min': 'Phone must be at least 3 symbols',
    'string.max': 'Phone must be under 20 symbols',
    'any.required': 'Phone is required',
  }),
  email: Joi.string().min(3).max(20).messages({
    'string.base': 'Email must be a string',
    'string.min': 'Email must be at least 3 symbols',
    'string.max': 'Email must be under 20 symbols',
  }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .min(3)
    .max(20)
    .required()
    .messages({
      'string.base': 'Type must be a string',
      'string.min': 'Type must be at least 3 symbols',
      'string.max': 'Type must be under 20 symbols',
      'any.only': 'Type must be work, home, or personal',
      'any.required': 'Type is required',
    }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be at least 3 symbols',
    'string.max': 'Name must be under 20 symbols',
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'Phone must be a string',
    'string.min': 'Phone must be at least 3 symbols',
    'string.max': 'Phone must be under 20 symbols',
  }),
  email: Joi.string().min(3).max(20).messages({
    'string.base': 'Email must be a string',
    'string.min': 'Email must be at least 3 symbols',
    'string.max': 'Email must be under 20 symbols',
  }),
  isFavourite: Joi.boolean(),
  contactType: Joi.string()
    .min(3)
    .max(20)
    .valid('work', 'home', 'personal')
    .messages({
      'string.base': 'Type must be a string',
      'string.min': 'Type must be at least 3 symbols',
      'string.max': 'Type must be under 20 symbols',
    }),
});