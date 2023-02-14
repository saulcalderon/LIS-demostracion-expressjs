const { body, param } = require('express-validator');

const [
  validateTitle,
  validateContent,
  validateID,
] = [
  body('title')
    .exists()
    .withMessage('title does not exists.')
    .isString()
    .withMessage('Value must be String.')
    .notEmpty()
    .withMessage('Value must not be empty.'),
  body('content')
    .exists()
    .withMessage('content does not exists.')
    .isString()
    .withMessage('Value must be String.')
    .notEmpty()
    .withMessage('Value must not be empty.'),
  param('id')
    .exists()
    .withMessage('id param does not exists.')
    .isInt()
    .withMessage('Value must be Integer.'),
];

module.exports = {
    validateTitle,
    validateContent,
    validateID,
};
