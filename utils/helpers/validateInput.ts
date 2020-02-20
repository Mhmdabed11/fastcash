const validatejs = require("validate.js");
export function validateInput(name, value, validationSchema) {
  const result = validatejs(
    {
      [name]: value
    },
    {
      [name]: validationSchema[name]
    }
  );

  if (result) {
    return result[name][0];
  }

  return null;
}
