import * as React from "react";
import "./PostaJob.scss";
import Input from "../shared/Input/Input";
import Select from "../shared/Select/Select";
import PrimaryButton from "../shared/PrimaryButton/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton/SecondaryButton";
import TextArea from "../shared/TextArea/TextArea";
import PrimaryAnchor from "../shared/PrimaryAnchor/PrimaryAcnhor";
import { useFormValidation } from "../../utils/hooks/useFormValidation";
import { countryList } from "../../utils/countries";
import { degreesList } from "../../utils/degrees";
import { yearsOfExperienceList } from "../../utils/yearsOfExperience";
import { validationSchema } from "./validation";
import Router from "next/router";
type FormProps = {
  initialValues: object;
  onSubmit: (values: object) => void;
};

const skills = [
  { value: "React", label: "React" },
  { label: "html", value: "html" }
];

let countries = countryList.map(country => ({
  value: country,
  label: country
}));

let degrees = degreesList.map(degree => ({
  value: degree,
  label: degree
}));

let years = yearsOfExperienceList.map(degree => ({
  value: degree,
  label: degree
}));

export default function PostaJobForm({ initialValues, onSubmit }: FormProps) {
  const { values, onChange, setValues, handleFormSubmit } = useFormValidation(
    initialValues,
    validationSchema
  );

  React.useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  // update user
  const handleUpdateUser = () => {
    console.log(values);
    onSubmit(values);
  };

  // handle submit
  const handleSubmit = e => {
    e.preventDefault();
    handleFormSubmit(handleUpdateUser);
  };

  // handle discard changes
  const handleDiscardChanges = e => {
    e.preventDefault();
    Router.push("/");
  };

  // handlke countries change
  const handleSelectChange = (selectedOption, name) => {
    let finalValue = selectedOption;
    if (Array.isArray(selectedOption)) {
      let temp = [];
      selectedOption.forEach(option => temp.push(option.value));
      finalValue = { value: temp, label: temp };
    }
    setValues(currVal => ({ ...currVal, [name]: finalValue }));
  };

  // check if there are any validation errors
  const hasErrors = React.useCallback(() => {
    let isError = false;
    Object.keys(values).forEach(key => {
      if (values[key] && values[key].errorLabel) {
        isError = true;
      }
    });
    return isError;
  }, [values]);

  // console.log(values.skills);
  // skills value
  const skillsValue = React.useMemo(
    () =>
      values.skills && values.skills.value && Array.isArray(values.skills.value)
        ? values.skills.value.map(val => ({ value: val, label: val }))
        : null,
    [values.skills]
  );

  return (
    <form data-testid="postjob-form" onSubmit={handleSubmit}>
      <hr className="postjob-form__page-break" />
      <div className="postjob-form__subcontainer">
        <div className="columns is-multiline">
          <div className="column postjob-basics">
            <p className="postjob-basics__title">
              What job do you want to post ?
            </p>
            <p className="postjob-basics__description">
              Please provide information about the job you want to post
            </p>
          </div>
        </div>
        <div>
          <div>
            <div className="columns is-multiline">
              <div className="column is-one-third">
                <label htmlFor="companyName" className="label">
                  Company Name
                  <span title="required" className="required-astrisk">
                    *
                  </span>
                </label>
              </div>
              <div className="column">
                <Input
                  name="companyName"
                  placeholder={"First Name"}
                  value={values.companyName ? values.companyName.value : ""}
                  onChange={onChange}
                  error={
                    values.companyName ? values.companyName.errorLabel : ""
                  }
                />
              </div>
            </div>
            <div className="columns is-multiline">
              <div className="column  is-one-third">
                <label htmlFor="jobTitle" className="label">
                  Job Title
                  <span title="required" className="required-astrisk">
                    *
                  </span>
                </label>
              </div>
              <div className="column">
                <Input
                  name="jobTitle"
                  placeholder={"Last Name"}
                  value={values.jobTitle ? values.jobTitle.value : ""}
                  onChange={onChange}
                  error={values.jobTitle ? values.jobTitle.errorLabel : ""}
                />
              </div>
            </div>
            <div className="columns is-multiline">
              <div className="column  is-one-third">
                <label htmlFor="location" className="label">
                  Location
                  <span title="required" className="required-astrisk">
                    *
                  </span>
                </label>
              </div>
              <div className="column">
                <Select
                  options={countries}
                  name="location"
                  value={
                    values.location && values.location.value
                      ? {
                          value: values.location.value,
                          label: values.location.value
                        }
                      : null
                  }
                  onChange={val => handleSelectChange(val, "location")}
                  placeholder="Location"
                  error={values.location ? values.location.errorLabel : ""}
                  inputId="location"
                />
              </div>
            </div>
            <div className="columns is-multiline">
              <div className="column  is-one-third">
                <label htmlFor="jobDescription" className="label">
                  Job Description
                </label>
              </div>
              <div className="column">
                <TextArea
                  name="jobDescription"
                  placeholder={"Job Description"}
                  value={
                    values.jobDescription ? values.jobDescription.value : ""
                  }
                  onChange={onChange}
                  error={
                    values.jobDescription
                      ? values.jobDescription.errorLabel
                      : ""
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="postjob-form__page-break" />

      <div className="postjob-form__subcontainer">
        <div className="columns is-multiline">
          <div className="column is-full">
            <div className="postjob-about">
              <p className="postjob-about__title">And a bit more</p>
              <p className="postjob-about__description">
                Please provide more information about the job you want to post
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="columns is-multiline">
              <div className="column  is-one-third">
                <label htmlFor="category" className="label">
                  Category
                </label>
              </div>
              <div className="column">
                <Select
                  options={years}
                  name="category"
                  inputId="category"
                  value={
                    values.category && values.category.value
                      ? {
                          value: values.category.value,
                          label: values.category.value
                        }
                      : null
                  }
                  onChange={val => handleSelectChange(val, "category")}
                  placeholder="Category"
                  error={values.category ? values.category.errorLabel : ""}
                />
              </div>
            </div>
            <div className="columns is-mutiline">
              <div className="column  is-one-third">
                <label htmlFor="currency" className="label">
                  Currency
                </label>
              </div>
              <div className="column">
                <Select
                  options={degrees}
                  name="currency"
                  inputId="currency"
                  value={
                    values.currency && values.currency.value
                      ? {
                          value: values.currency.value,
                          label: values.currency.value
                        }
                      : null
                  }
                  onChange={val => handleSelectChange(val, "currency")}
                  placeholder="Currency"
                  error={values.currency ? values.currency.errorLabel : ""}
                />
              </div>
            </div>

            <div className="columns is-multiline">
              <div className="column is-one-third">
                <label htmlFor="skillsRequired" className="label">
                  Skills
                </label>
              </div>
              <div className="column">
                <Select
                  inputId="skillsRequired"
                  options={skills}
                  name="skillsRequired"
                  value={skillsValue}
                  onChange={val => handleSelectChange(val, "skills")}
                  placeholder="Skills"
                  isMulti
                  error={values.skills ? values.skills.errorLabel : ""}
                />
              </div>
            </div>

            <div className="columns is-mutiline">
              <div className="column  is-one-third">
                <label htmlFor="type" className="label">
                  Employment Type
                </label>
              </div>
              <div className="column">
                <Select
                  options={degrees}
                  name="type"
                  inputId="type"
                  value={
                    values.type && values.type.value
                      ? {
                          value: values.type.value,
                          label: values.type.value
                        }
                      : null
                  }
                  onChange={val => handleSelectChange(val, "type")}
                  placeholder="Employment Type"
                  error={values.type ? values.type.errorLabel : ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="postjob-form__page-break" />
      <div className="postjob-submit-btns buttons is-flex">
        <SecondaryButton onClick={handleDiscardChanges}>
          Discard Changes
        </SecondaryButton>
        <PrimaryButton disabled={hasErrors()}>Save</PrimaryButton>
      </div>
    </form>
  );
}
