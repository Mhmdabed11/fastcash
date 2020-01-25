import * as React from "react";
import {
  render,
  fireEvent,
  getAllByPlaceholderText,
  getByPlaceholderText
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import selectEvent from "react-select-event";
import PostaJobForm from "../../components/PostaJobForm/PostaJobForm";

//initialvalues
const initialValues = {
  companyName: {
    value: ""
  },
  title: {
    value: ""
  },
  location: {
    value: ""
  },
  description: {
    value: ""
  },
  category: {
    value: ""
  },
  salary: {
    value: ""
  },
  currency: {
    value: ""
  },
  skills: {
    value: ""
  },
  type: {
    value: ""
  }
};
describe("Test profile form", () => {
  test("Form submits successfully", async () => {
    const onSubmit = jest.fn();
    const { getByLabelText, getByText, getByPlaceholderText } = render(
      <PostaJobForm
        onSubmit={onSubmit}
        postingJob={false}
        initialValues={initialValues}
      />
    );

    fireEvent.change(getByPlaceholderText("ex. Google"), {
      target: { value: "Google" }
    });
    fireEvent.change(getByPlaceholderText("ex. Front End Developer"), {
      target: {
        value: "Front End Developer"
      }
    });
    const country = getByLabelText("Location *");
    await selectEvent.select(country, ["Lebanon"]);
    fireEvent.change(
      getByPlaceholderText(
        /ex. Front end developer with over 2 years of experience/i
      ),
      {
        target: {
          value: "Front End Develoepr needed."
        }
      }
    );

    const category = getByLabelText("Category *");
    await selectEvent.select(category, ["Software Engineering"]);
    fireEvent.change(getByPlaceholderText("ex. 60000"), {
      target: {
        value: 1000
      }
    });
    const currency = getByLabelText("Currency *");
    await selectEvent.select(currency, ["LBP"]);
    const skills = getByLabelText("Skills *");
    await selectEvent.select(skills, ["html", "React"]);
    await selectEvent.select(getByLabelText("Employment Type *"), "Full Time");

    fireEvent.click(getByText(/Save/i));
    expect(onSubmit).toBeCalledTimes(1);
  }),
    test("Form doesn't submit when company name is nit provided", async () => {
      const onSubmit = jest.fn();
      const { getByLabelText, getByText, getByPlaceholderText } = render(
        <PostaJobForm
          onSubmit={onSubmit}
          postingJob={false}
          initialValues={initialValues}
        />
      );

      fireEvent.change(getByPlaceholderText("ex. Google"), {
        target: { value: "" }
      });
      fireEvent.change(getByPlaceholderText("ex. Front End Developer"), {
        target: {
          value: "Front End Developer"
        }
      });
      const country = getByLabelText("Location *");
      await selectEvent.select(country, ["Lebanon"]);
      fireEvent.change(
        getByPlaceholderText(
          /ex. Front end developer with over 2 years of experience/i
        ),
        {
          target: {
            value: "Front End Develoepr needed."
          }
        }
      );

      const category = getByLabelText("Category *");
      await selectEvent.select(category, ["Software Engineering"]);
      fireEvent.change(getByPlaceholderText("ex. 60000"), {
        target: {
          value: 1000
        }
      });
      const currency = getByLabelText("Currency *");
      await selectEvent.select(currency, ["LBP"]);
      const skills = getByLabelText("Skills *");
      await selectEvent.select(skills, ["html", "React"]);
      await selectEvent.select(
        getByLabelText("Employment Type *"),
        "Full Time"
      );

      fireEvent.click(getByText(/Save/i));
      expect(onSubmit).toBeCalledTimes(0);
    }),
    test("Form doesn't submit when Job title is not provided", async () => {
      const onSubmit = jest.fn();
      const { getByLabelText, getByText, getByPlaceholderText } = render(
        <PostaJobForm
          onSubmit={onSubmit}
          postingJob={false}
          initialValues={initialValues}
        />
      );

      fireEvent.change(getByPlaceholderText("ex. Google"), {
        target: { value: "Google" }
      });
      const country = getByLabelText("Location *");
      await selectEvent.select(country, ["Lebanon"]);
      fireEvent.change(
        getByPlaceholderText(
          /ex. Front end developer with over 2 years of experience/i
        ),
        {
          target: {
            value: "Front End Develoepr needed."
          }
        }
      );

      const category = getByLabelText("Category *");
      await selectEvent.select(category, ["Software Engineering"]);
      fireEvent.change(getByPlaceholderText("ex. 60000"), {
        target: {
          value: 1000
        }
      });
      const currency = getByLabelText("Currency *");
      await selectEvent.select(currency, ["LBP"]);
      const skills = getByLabelText("Skills *");
      await selectEvent.select(skills, ["html", "React"]);
      await selectEvent.select(
        getByLabelText("Employment Type *"),
        "Full Time"
      );

      fireEvent.click(getByText(/Save/i));
      expect(onSubmit).toBeCalledTimes(0);
    }),
    test("Form doesn't submit when location is not provided", async () => {
      const onSubmit = jest.fn();
      const { getByLabelText, getByText, getByPlaceholderText } = render(
        <PostaJobForm
          onSubmit={onSubmit}
          postingJob={false}
          initialValues={initialValues}
        />
      );

      fireEvent.change(getByPlaceholderText("ex. Google"), {
        target: { value: "Google" }
      });
      fireEvent.change(getByPlaceholderText("ex. Front End Developer"), {
        target: {
          value: "Front End Developer"
        }
      });
      fireEvent.change(
        getByPlaceholderText(
          /ex. Front end developer with over 2 years of experience/i
        ),
        {
          target: {
            value: "Front End Develoepr needed."
          }
        }
      );

      const category = getByLabelText("Category *");
      await selectEvent.select(category, ["Software Engineering"]);
      fireEvent.change(getByPlaceholderText("ex. 60000"), {
        target: {
          value: 1000
        }
      });
      const currency = getByLabelText("Currency *");
      await selectEvent.select(currency, ["LBP"]);
      const skills = getByLabelText("Skills *");
      await selectEvent.select(skills, ["html", "React"]);
      await selectEvent.select(
        getByLabelText("Employment Type *"),
        "Full Time"
      );

      fireEvent.click(getByText(/Save/i));
      expect(onSubmit).toBeCalledTimes(0);
    }),
    test("Form doesn't submit when job description is not provided", async () => {
      const onSubmit = jest.fn();
      const { getByLabelText, getByText, getByPlaceholderText } = render(
        <PostaJobForm
          onSubmit={onSubmit}
          postingJob={false}
          initialValues={initialValues}
        />
      );

      fireEvent.change(getByPlaceholderText("ex. Google"), {
        target: { value: "Google" }
      });
      fireEvent.change(getByPlaceholderText("ex. Front End Developer"), {
        target: {
          value: "Front End Developer"
        }
      });
      const country = getByLabelText("Location *");
      await selectEvent.select(country, ["Lebanon"]);

      const category = getByLabelText("Category *");
      await selectEvent.select(category, ["Software Engineering"]);
      fireEvent.change(getByPlaceholderText("ex. 60000"), {
        target: {
          value: 1000
        }
      });
      const currency = getByLabelText("Currency *");
      await selectEvent.select(currency, ["LBP"]);
      const skills = getByLabelText("Skills *");
      await selectEvent.select(skills, ["html", "React"]);
      await selectEvent.select(
        getByLabelText("Employment Type *"),
        "Full Time"
      );

      fireEvent.click(getByText(/Save/i));
      expect(onSubmit).toBeCalledTimes(0);
    }),
    test("Form doesn't submit category is not provided", async () => {
      const onSubmit = jest.fn();
      const { getByLabelText, getByText, getByPlaceholderText } = render(
        <PostaJobForm
          onSubmit={onSubmit}
          postingJob={false}
          initialValues={initialValues}
        />
      );

      fireEvent.change(getByPlaceholderText("ex. Google"), {
        target: { value: "Google" }
      });
      fireEvent.change(getByPlaceholderText("ex. Front End Developer"), {
        target: {
          value: "Front End Developer"
        }
      });
      const country = getByLabelText("Location *");
      await selectEvent.select(country, ["Lebanon"]);
      fireEvent.change(
        getByPlaceholderText(
          /ex. Front end developer with over 2 years of experience/i
        ),
        {
          target: {
            value: "Front End Develoepr needed."
          }
        }
      );

      fireEvent.change(getByPlaceholderText("ex. 60000"), {
        target: {
          value: 1000
        }
      });
      const currency = getByLabelText("Currency *");
      await selectEvent.select(currency, ["LBP"]);
      const skills = getByLabelText("Skills *");
      await selectEvent.select(skills, ["html", "React"]);
      await selectEvent.select(
        getByLabelText("Employment Type *"),
        "Full Time"
      );

      fireEvent.click(getByText(/Save/i));
      expect(onSubmit).toBeCalledTimes(0);
    }),
    test("Form doesn't submit when salary is not provided", async () => {
      const onSubmit = jest.fn();
      const { getByLabelText, getByText, getByPlaceholderText } = render(
        <PostaJobForm
          onSubmit={onSubmit}
          postingJob={false}
          initialValues={initialValues}
        />
      );

      fireEvent.change(getByPlaceholderText("ex. Google"), {
        target: { value: "Google" }
      });
      fireEvent.change(getByPlaceholderText("ex. Front End Developer"), {
        target: {
          value: "Front End Developer"
        }
      });
      const country = getByLabelText("Location *");
      await selectEvent.select(country, ["Lebanon"]);
      fireEvent.change(
        getByPlaceholderText(
          /ex. Front end developer with over 2 years of experience/i
        ),
        {
          target: {
            value: "Front End Develoepr needed."
          }
        }
      );

      const category = getByLabelText("Category *");
      await selectEvent.select(category, ["Software Engineering"]);
      const currency = getByLabelText("Currency *");
      await selectEvent.select(currency, ["LBP"]);
      const skills = getByLabelText("Skills *");
      await selectEvent.select(skills, ["html", "React"]);
      await selectEvent.select(
        getByLabelText("Employment Type *"),
        "Full Time"
      );

      fireEvent.click(getByText(/Save/i));
      expect(onSubmit).toBeCalledTimes(0);
    }),
    test("Form doesn't submit when currency is not submitted", async () => {
      const onSubmit = jest.fn();
      const { getByLabelText, getByText, getByPlaceholderText } = render(
        <PostaJobForm
          onSubmit={onSubmit}
          postingJob={false}
          initialValues={initialValues}
        />
      );

      fireEvent.change(getByPlaceholderText("ex. Google"), {
        target: { value: "Google" }
      });
      fireEvent.change(getByPlaceholderText("ex. Front End Developer"), {
        target: {
          value: "Front End Developer"
        }
      });
      const country = getByLabelText("Location *");
      await selectEvent.select(country, ["Lebanon"]);
      fireEvent.change(
        getByPlaceholderText(
          /ex. Front end developer with over 2 years of experience/i
        ),
        {
          target: {
            value: "Front End Develoepr needed."
          }
        }
      );

      const category = getByLabelText("Category *");
      await selectEvent.select(category, ["Software Engineering"]);
      fireEvent.change(getByPlaceholderText("ex. 60000"), {
        target: {
          value: 1000
        }
      });
      const skills = getByLabelText("Skills *");
      await selectEvent.select(skills, ["html", "React"]);
      await selectEvent.select(
        getByLabelText("Employment Type *"),
        "Full Time"
      );

      fireEvent.click(getByText(/Save/i));
      expect(onSubmit).toBeCalledTimes(0);
    }),
    test("Form doesn't submit whe skills is not provided", async () => {
      const onSubmit = jest.fn();
      const { getByLabelText, getByText, getByPlaceholderText } = render(
        <PostaJobForm
          onSubmit={onSubmit}
          postingJob={false}
          initialValues={initialValues}
        />
      );

      fireEvent.change(getByPlaceholderText("ex. Google"), {
        target: { value: "Google" }
      });
      fireEvent.change(getByPlaceholderText("ex. Front End Developer"), {
        target: {
          value: "Front End Developer"
        }
      });
      const country = getByLabelText("Location *");
      await selectEvent.select(country, ["Lebanon"]);
      fireEvent.change(
        getByPlaceholderText(
          /ex. Front end developer with over 2 years of experience/i
        ),
        {
          target: {
            value: "Front End Develoepr needed."
          }
        }
      );

      const category = getByLabelText("Category *");
      await selectEvent.select(category, ["Software Engineering"]);
      fireEvent.change(getByPlaceholderText("ex. 60000"), {
        target: {
          value: 1000
        }
      });
      const currency = getByLabelText("Currency *");
      await selectEvent.select(currency, ["LBP"]);
      await selectEvent.select(
        getByLabelText("Employment Type *"),
        "Full Time"
      );

      fireEvent.click(getByText(/Save/i));
      expect(onSubmit).toBeCalledTimes(0);
    }),
    test("Form doesn't submit when employment type is not provided", async () => {
      const onSubmit = jest.fn();
      const { getByLabelText, getByText, getByPlaceholderText } = render(
        <PostaJobForm
          onSubmit={onSubmit}
          postingJob={false}
          initialValues={initialValues}
        />
      );

      fireEvent.change(getByPlaceholderText("ex. Google"), {
        target: { value: "Google" }
      });
      fireEvent.change(getByPlaceholderText("ex. Front End Developer"), {
        target: {
          value: "Front End Developer"
        }
      });
      const country = getByLabelText("Location *");
      await selectEvent.select(country, ["Lebanon"]);
      fireEvent.change(
        getByPlaceholderText(
          /ex. Front end developer with over 2 years of experience/i
        ),
        {
          target: {
            value: "Front End Develoepr needed."
          }
        }
      );

      const category = getByLabelText("Category *");
      await selectEvent.select(category, ["Software Engineering"]);
      fireEvent.change(getByPlaceholderText("ex. 60000"), {
        target: {
          value: 1000
        }
      });
      const currency = getByLabelText("Currency *");
      await selectEvent.select(currency, ["LBP"]);
      const skills = getByLabelText("Skills *");
      await selectEvent.select(skills, ["html", "React"]);

      fireEvent.click(getByText(/Save/i));
      expect(onSubmit).toBeCalledTimes(0);
    });
});
