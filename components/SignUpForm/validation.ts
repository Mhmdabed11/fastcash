export const validationSchema: object = {
  firstName: {
    presence: {
      allowEmpty: false,
      message: "^This is required"
    }
  },
  lastName: {
    presence: {
      allowEmpty: false,
      message: "^This is required"
    }
  },
  email: {
    presence: {
      allowEmpty: false,
      message: "^This is required"
    },
    email: {
      message: "^Must be a valid email"
    }
  },
  country: {
    presence: {
      allowEmpty: false,
      message: "^This is required"
    }
  },
  password: {
    presence: {
      allowEmpty: false,
      message: "^This is required"
    }
  },
  confirmPassword: {
    presence: {
      allowEmpty: false,
      message: "^This is required"
    }
  }
};
