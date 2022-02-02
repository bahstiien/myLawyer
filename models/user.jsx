const db = require("../db");
const argon2 = require("argon2");
const Joi = require("joi");

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCost: 5,
  parallelism: 1,
};

const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOptions);
};

const verifyPassword = (plainPassword, hashedPassword) => {
  return argon2.verify(hashedPassword, plainPassword, hashingOptions);
};

const validateUser = (data, forUpdate = false) => {
  return Joi.object({
    // CHAMPS REQUIRED
    email: Joi.string().email().max(255).required(),
    name: Joi.string().max(255).required(),
    password: Joi.string()
      .min(8)
      .max(100)
      .presence(forUpdate ? "optional" : "required"),
  }).validate(data, { abortEarly: false }).error;
};

const create = async ({ name, email, password }) => {
  const hashedPassword = await hashPassword(password);
  return db.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });
};

const getSafeAttributes = (user) => ({
  ...user,
  hashPassword: undefined,
});

module.exports = {
  hashPassword,
  verifyPassword,
  validateUser,
  create,
  getSafeAttributes,
};
