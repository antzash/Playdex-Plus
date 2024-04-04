const { body } = require("express-validator");

const validateRegistrationData = [
  body("username", "username is required").not().isEmpty(),
  body("password", "password is required").not().isEmpty(),
  body("password", "password min is 6 and max is 50").isLength({
    min: 6,
    max: 50,
  }),
];

const validateLoginData = [
  body("username", "username is required").not().isEmpty(),
  body("password", "password is required").not().isEmpty(),
];

const validateRefreshToken = [
  body("refresh", "refresh token is required")
    .not()
    .isEmpty()
    .isLength({ min: 1 }),
];

module.exports = {
  validateRegistrationData,
  validateLoginData,
  validateRefreshToken,
};
