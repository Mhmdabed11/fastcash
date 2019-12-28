export const validationSchema: object = {
  email: {
    presence: {
      allowEmpty: false,
      message: "^Email is required"
    },
    email: {
      message: "^Must be a valid email"
    }
  },

  password: {
    presence: {
      allowEmpty: false,
      message: "^Password is required"
    }
  }
};
