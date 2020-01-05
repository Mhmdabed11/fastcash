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
  email: {
    presence: {
      allowEmpty: false,
      message: "^Email is required"
    },
    email: {
      message: "^Must be a valid email"
    }
  },
  country: {
    presence: {
      allowEmpty: false,
      message: "^Country is required"
    }
  },
  password: {
    presence: {
      allowEmpty: false,
      message: "^Password is required"
    }
  },
  confirmPassword: {
    presence: {
      allowEmpty: false,
      message: "^Password confirmation is required"
    }
  }
};
