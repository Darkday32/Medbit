const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateCase(data) {
  let errors = {};

  data.positives = !isEmpty(data.positives) ? data.positives : '';
  data.name = !isEmpty(data.name) ? data.name : '';
  data.system = !isEmpty(data.system) ? data.system : '';
  data.ward = !isEmpty(data.ward) ? data.ward : '';
  data.condition = !isEmpty(data.condition) ? data.condition : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'case Name is required';
  }

  if (Validator.isEmpty(data.system)) {
    errors.system = 'Queried system is required';
  }
  if (Validator.isEmpty(data.positives)) {
    errors.positives = 'Key positives required';
  }
  if (Validator.isEmpty(data.condition)) {
    errors.condition = 'Queried condition is required';
  }

  if (Validator.isEmpty(data.ward)) {
    errors.ward = 'Ward is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
