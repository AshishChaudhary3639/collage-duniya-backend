const Joi = require('joi');

const signupSchema = Joi.object({
  fullName: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  mobile: Joi.string().pattern(/^[\d]{10}$/).required(),
  city: Joi.string().min(2).required(),
  coursesInterested: Joi.string().required(),
});

const validateSignup = (req, res, next) => {
  const { error } = signupSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = { validateSignup };
