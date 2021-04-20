const Joi = require('joi');

const subscriptionSchemaValidation = (req, res, next) => {
    const subscriptionValidationSchema = Joi.object({
        subscriptionStart: Joi.date().required(),
        subscriptionEnd: Joi.date().required(),
        price: Joi.number().min(0).required(),
        description: Joi.string().required(),
        createdBy: Joi.string()
    });
    
    const validation = subscriptionValidationSchema.validate(req.body);

    if (validation.error) {
        return res.status(400).send({
            error: validation.error
        })
    }

    next();
}

module.exports = subscriptionSchemaValidation;