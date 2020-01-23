export const validationSchema: object = {
  companyName: {
    presence: {
      allowEmpty: false,
      message: "^Company name is required"
    }
  },
  jobTitle: {
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
  jobDescription: {
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
  }
};
