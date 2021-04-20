const Joi = require('joi');

const userUpdateSchemaValidation = (req, res, next) => {

    const userValidationSchema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email(),
        isAdmin: Joi.boolean(),
        password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,64}$/).required(),
   
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        birthDate: Joi.date().required(),
        address: Joi.string().required(),
        phone: Joi.string().required()
    });
    
    const validation = userValidationSchema.validate(req.body);

    if (validation.error) {
        return res.status(400).send({
            error: validation.error
        })
    }
    next();
}

module.exports = userUpdateSchemaValidation;