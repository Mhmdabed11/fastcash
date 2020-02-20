export const validationSchema: object = {
  companyName: {
    presence: {
      allowEmpty: false,
      message: "^Company name is required"
    }
  },
  title: {
    presence: {
      allowEmpty: false,
      message: "^Job title is required"
    }
  },
  location: {
    presence: {
      allowEmpty: false,
      message: "^Location is required"
    }
  },
  description: {
    presence: {
      allowEmpty: false,
      message: "^Job Description is required"
    }
  },
  category: {
    presence: {
      allowEmpty: false,
      message: "^Category is required"
    }
  },
  currency: {
    presence: {
      allowEmpty: false,
      message: "^Currency is required"
    }
  },
  skills: {
    presence: {
      allowEmpty: false,
      message: "^Skills are required"
    }
  },
  type: {
    presence: {
      allowEmpty: false,
      message: "^Employment type is required"
    }
  },
  salary: {
    presence: {
      allowEmpty: false,
      message: "^Salary is required"
    },
    numericality: {
      greaterThan: 0,
      message: "^Salary should be a positive number"
    }
  }
};
