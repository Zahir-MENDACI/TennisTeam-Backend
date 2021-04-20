const Joi = require('joi');

const userRegistrationSchemaValidation = (req, res, next) => {
    
    const userValidationSchema = Joi.object({
        username: Joi.string().required(),
        email: Joi.string().email(),
        isAdmin: Joi.boolean(),
        // Minimum 6 characters, at least one uppercase letter, one lowercase letter and one number for password.
        password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,64}$/).required()
    });
    
    const validation = userValidationSchema.validate(req.body);

    if (validation.error) {
        return res.status(400).send({
            error: validation.error
        })
    }
    next();
}

module.exports = userRegistrationSchemaValidation;