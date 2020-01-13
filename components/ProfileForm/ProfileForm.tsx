import * as React from "react";
import "./ProfileForm.scss";
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
  updatingUser: boolean;
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

export default function ProfileForm({
  initialValues = {},
  onSubmit,
  updatingUser
}: FormProps) {
  const { values, onChange, setValues, handleFormSubmit } = useFormValidation(
    initialValues,
    validationSchema
  );

  React.useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  // update user
  const handleUpdateUser = () => {
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
    <form data-testid="profile-form" onSubmit={handleSubmit}>
      <hr className="profile-form__page-break" />
      <div className="profile-form__subcontainer">
        <div className="columns is-multiline">
          <div className="column profile-basics">
            <p className="profile-basics__title">Basics</p>
            <p className="profile-basics__description">
              This information will show publicly so be careful what you provide
            </p>
          </div>
        </div>
        <div>
          <div>
            <div className="columns is-multiline">
              <div className="column is-one-third">
                <label htmlFor="firstName" className="label">
                  First Name
                  <span title="required" className="required-astrisk">
                    *
                  </span>
                </label>
              </div>
              <div className="column">
                <Input
                  name="firstName"
                  placeholder={"First Name"}
                  value={values.firstName ? values.firstName.value : ""}
                  onChange={onChange}
                  error={values.firstName ? values.firstName.errorLabel : ""}
                />
              </div>
            </div>
            <div className="columns is-multiline">
              <div className="column  is-one-third">
                <label htmlFor="lastName" className="label">
                  Last Name
                  <span title="required" className="required-astrisk">
                    *
                  </span>
                </label>
              </div>
              <div className="column">
                <Input
                  name="lastName"
                  placeholder={"Last Name"}
                  value={values.lastName ? values.lastName.value : ""}
                  onChange={onChange}
                  error={values.lastName ? values.lastName.errorLabel : ""}
                />
              </div>
            </div>
            <div className="columns is-multiline">
              <div className="column  is-one-third">
                <label htmlFor="country" className="label">
                  Country
                  <span title="required" className="required-astrisk">
                    *
                  </span>
                </label>
              </div>
              <div className="column">
                <Select
                  options={countries}
                  name="country"
                  value={
                    values.country && values.country.value
                      ? {
                          value: values.country.value,
                          label: values.country.value
                        }
                      : null
                  }
                  onChange={val => handleSelectChange(val, "country")}
                  placeholder="Country"
                  error={values.country ? values.country.errorLabel : ""}
                  inputId="country"
                />
              </div>
            </div>
            <div className="columns is-multiline">
              <div className="column  is-one-third">
                <label htmlFor="phoneNumber" className="label">
                  Phone Number
                </label>
              </div>
              <div className="column">
                <Input
                  name="phoneNumber"
                  placeholder={"Phone Number"}
                  value={values.phoneNumber ? values.phoneNumber.value : ""}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="columns is-multiline">
              <div className="column  is-one-third">
                <label className="label">Password</label>
              </div>
              <div className="column">
                <PrimaryAnchor to="/profile">Change Password</PrimaryAnchor>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="profile-form__page-break" />

      <div className="profile-form__subcontainer">
        <div className="columns is-multiline">
          <div className="column is-full">
            <div className="profile-about">
              <p className="profile-about__title">
                Tell us more about yourself
              </p>
              <p className="profile-about__description">
                This information will show publicly so be careful what you
                provide
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className="columns is-multiline">
              <div className="column  is-one-third">
                <label htmlFor="yearsOfExperience" className="label">
                  Years of Experience
                </label>
              </div>
              <div className="column">
                <Select
                  options={years}
                  name="yearsOfExperience"
                  inputId="yearsOfExperience"
                  value={
                    values.yearsOfExperience && values.yearsOfExperience.value
                      ? {
                          value: values.yearsOfExperience.value,
                          label: values.yearsOfExperience.value
                        }
                      : null
                  }
                  onChange={val => handleSelectChange(val, "yearsOfExperience")}
                  placeholder="Year"
                />
              </div>
            </div>
            <div className="columns is-mutiline">
              <div className="column  is-one-third">
                <label htmlFor="degree" className="label">
                  Degree Achieved
                </label>
              </div>
              <div className="column">
                <Select
                  options={degrees}
                  name="degree"
                  inputId="degree"
                  value={
                    values.degree && values.degree.value
                      ? {
                          value: values.degree.value,
                          label: values.degree.value
                        }
                      : null
                  }
                  onChange={val => handleSelectChange(val, "degree")}
                  placeholder="Degree"
                />
              </div>
            </div>
            <div className="columns is-multiline">
              <div className="column is-one-third">
                <label htmlFor="headline" className="label">
                  Headline
                </label>
              </div>
              <div className="column">
                <Input
                  name="headline"
                  placeholder={"Headline"}
                  value={values.headline ? values.headline.value : ""}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="columns is-multiline">
              <div className="column is-one-third">
                <label htmlFor="skills" className="label">
                  Skills
                </label>
              </div>
              <div className="column">
                <Select
                  inputId="skills"
                  options={skills}
                  name="skills"
                  value={skillsValue}
                  onChange={val => handleSelectChange(val, "skills")}
                  placeholder="Skills"
                  isMulti
                />
              </div>
            </div>
            <div className="columns is-multiline">
              <div className="column is-one-third">
                <label htmlFor="about" className="label">
                  About
                </label>
              </div>
              <div className="column">
                <TextArea
                  value={values.about ? values.about.value : ""}
                  placeholder="About"
                  name="about"
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="profile-form__page-break" />
      <div className="profile-submit-btns buttons is-flex">
        <SecondaryButton onClick={handleDiscardChanges}>
          Discard Changes
        </SecondaryButton>
        <PrimaryButton disabled={hasErrors()} loading={updatingUser}>
          Save
        </PrimaryButton>
      </div>
    </form>
  );
}
