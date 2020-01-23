export const validationSchema: object = {
  firstName: {
    presence: {
      allowEmpty: false,
      message: "^First name is required"
    }
  },
  lastName: {
    presence: {
      allowEmpty: false,
      message: "^Last name is required"
    }
  },
  country: {
    presence: {
      allowEmpty: false,
      message: "^Country is required"
    }
  }
};
