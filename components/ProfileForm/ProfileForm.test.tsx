import * as React from "react";
import {
  render,
  fireEvent,
  getAllByPlaceholderText,
  getByPlaceholderText
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProfileForm from "./ProfileForm";
import selectEvent from "react-select-event";
import { yearsOfExperienceList } from "../../utils/yearsOfExperience";

//initialvalues
const initialValues = {
  firstName: {
    value: ""
  },
  lastName: {
    value: ""
  },
  country: {
    value: ""
  },
  phoneNumber: {
    value: ""
  },
  yearsOfExperience: {
    value: ""
  },
  degree: {
    value: ""
  },
  headline: {
    value: ""
  },
  skills: {
    value: ""
  },
  about: {
    value: ""
  }
};
describe("Test profile form", () => {
  test("Form submits successfully", async () => {
    const onSubmit = jest.fn();
    const { getByLabelText, getByText, getByPlaceholderText } = render(
      <ProfileForm
        onSubmit={onSubmit}
        updatingUser={false}
        initialValues={initialValues}
      />
    );

    fireEvent.change(getByPlaceholderText("First Name"), {
      target: { value: "Mohammad" }
    });
    fireEvent.change(getByPlaceholderText("Last Name"), {
      target: {
        value: "Abed"
      }
    });
    const country = getByLabelText("Country*");
    await selectEvent.select(country, ["Lebanon"]);
    fireEvent.change(getByPlaceholderText("Phone Number"), {
      target: {
        value: "96178969767"
      }
    });
    const yearsOfExperience = getByLabelText("Years of Experience");
    await selectEvent.select(yearsOfExperience, ["1"]);
    const degreeAchieved = getByLabelText("Degree Achieved");
    await selectEvent.select(degreeAchieved, ["Bachelor's"]);
    const skills = getByLabelText("Skills");
    await selectEvent.select(skills, ["html", "React"]);
    fireEvent.change(getByPlaceholderText("About"), {
      target: {
        value:
          "Hello My name is mohammad abed and I am a front end developer currently at CloudGate consulting."
      }
    });

    fireEvent.click(getByText(/Save/i));
    expect(onSubmit).toBeCalledTimes(1);
  }),
    test("Form doesn't submit if First Name is not provided", async () => {
      const onSubmit = jest.fn();
      const { getByLabelText, getByText, getByPlaceholderText } = render(
        <ProfileForm
          onSubmit={onSubmit}
          updatingUser={false}
          initialValues={initialValues}
        />
      );

      fireEvent.change(getByPlaceholderText("Last Name"), {
        target: {
          value: "Abed"
        }
      });
      const country = getByLabelText("Country*");
      await selectEvent.select(country, ["Lebanon"]);
      fireEvent.change(getByPlaceholderText("Phone Number"), {
        target: {
          value: "96178969767"
        }
      });
      const yearsOfExperience = getByLabelText("Years of Experience");
      await selectEvent.select(yearsOfExperience, ["1"]);
      const degreeAchieved = getByLabelText("Degree Achieved");
      await selectEvent.select(degreeAchieved, ["Bachelor's"]);
      const skills = getByLabelText("Skills");
      await selectEvent.select(skills, ["html", "React"]);
      fireEvent.change(getByPlaceholderText("About"), {
        target: {
          value:
            "Hello My name is mohammad abed and I am a front end developer currently at CloudGate consulting."
        }
      });

      fireEvent.click(getByText(/Save/i));
      expect(onSubmit).toBeCalledTimes(0);
    }),
    test("Form doesn't submit if Last Name is not provided", async () => {
      const onSubmit = jest.fn();
      const { getByLabelText, getByText, getByPlaceholderText } = render(
        <ProfileForm
          onSubmit={onSubmit}
          updatingUser={false}
          initialValues={initialValues}
        />
      );

      fireEvent.change(getByPlaceholderText("First Name"), {
        target: {
          value: "Mohammad"
        }
      });
      const country = getByLabelText("Country*");
      await selectEvent.select(country, ["Lebanon"]);
      fireEvent.change(getByPlaceholderText("Phone Number"), {
        target: {
          value: "96178969767"
        }
      });
      const yearsOfExperience = getByLabelText("Years of Experience");
      await selectEvent.select(yearsOfExperience, ["1"]);
      const degreeAchieved = getByLabelText("Degree Achieved");
      await selectEvent.select(degreeAchieved, ["Bachelor's"]);
      const skills = getByLabelText("Skills");
      await selectEvent.select(skills, ["html", "React"]);
      fireEvent.change(getByPlaceholderText("About"), {
        target: {
          value:
            "Hello My name is mohammad abed and I am a front end developer currently at CloudGate consulting."
        }
      });

      fireEvent.click(getByText(/Save/i));
      expect(onSubmit).toBeCalledTimes(0);
    }),
    test("Form doesn't submit if Country is not provided", async () => {
      const onSubmit = jest.fn();
      const { getByLabelText, getByText, getByPlaceholderText } = render(
        <ProfileForm
          onSubmit={onSubmit}
          updatingUser={false}
          initialValues={initialValues}
        />
      );

      fireEvent.change(getByPlaceholderText("First Name"), {
        target: {
          value: "Mohammad"
        }
      });
      fireEvent.change(getByPlaceholderText("Last Name"), {
        target: {
          value: "Abed"
        }
      });

      fireEvent.change(getByPlaceholderText("Phone Number"), {
        target: {
          value: "96178969767"
        }
      });
      const yearsOfExperience = getByLabelText("Years of Experience");
      await selectEvent.select(yearsOfExperience, ["1"]);
      const degreeAchieved = getByLabelText("Degree Achieved");
      await selectEvent.select(degreeAchieved, ["Bachelor's"]);
      const skills = getByLabelText("Skills");
      await selectEvent.select(skills, ["html", "React"]);
      fireEvent.change(getByPlaceholderText("About"), {
        target: {
          value:
            "Hello My name is mohammad abed and I am a front end developer currently at CloudGate consulting."
        }
      });

      fireEvent.click(getByText(/Save/i));
      expect(onSubmit).toBeCalledTimes(0);
    }),
    test("Form submits if only First Name , Last Name and Country are provided", async () => {
      const onSubmit = jest.fn();
      const { getByLabelText, getByText, getByPlaceholderText } = render(
        <ProfileForm
          onSubmit={onSubmit}
          updatingUser={false}
          initialValues={initialValues}
        />
      );

      fireEvent.change(getByPlaceholderText("First Name"), {
        target: {
          value: "Mohammad"
        }
      });
      fireEvent.change(getByPlaceholderText("Last Name"), {
        target: {
          value: "Abed"
        }
      });

      const country = getByLabelText("Country*");
      await selectEvent.select(country, ["Lebanon"]);

      fireEvent.click(getByText(/Save/i));
      expect(onSubmit).toBeCalledTimes(1);
    });
});
