import React from "react";
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

  return (
    <form data-testid="profile-form" onSubmit={handleSubmit}>
      <hr style={{ backgroundColor: "#b2b2b2" }} />
      <div className="columns is-multiline">
        <div className="column is-half">
          <div className="profile-basics">
            <p className="profile-basics__title">Basics</p>
            <p className="profile-basics__description">
              This information will show publicly so be careful what you provide
            </p>
          </div>
        </div>
        <div className="column is-half">
          <div className="columns is-multiline">
            <div className="column is-half">
              <Input
                label="First Name"
                name="firstName"
                placeholder={""}
                value={values.firstName ? values.firstName.value : ""}
                onChange={onChange}
                error={values.firstName ? values.firstName.errorLabel : ""}
              />
            </div>
            <div className="column is-half">
              <Input
                label="Last Name"
                name="lastName"
                placeholder={""}
                value={values.lastName ? values.lastName.value : ""}
                onChange={onChange}
                error={values.lastName ? values.lastName.errorLabel : ""}
              />
            </div>
            <div className="column is-half">
              <Select
                label="Country"
                options={countryList}
                name="country"
                value={values.country ? values.country.value : ""}
                onChange={onChange}
                placeholder="Country"
                error={values.country ? values.country.errorLabel : ""}
              />
            </div>
            <div className="column is-half">
              <Input
                label="Phone Number"
                name="phoneNumber"
                placeholder={""}
                value={values.phoneNumber ? values.phoneNumber.value : ""}
                onChange={onChange}
              />
            </div>
            <div className="column is-half">
              <label htmlFor="" className="label">
                Password
              </label>
              <PrimaryAnchor to="/profile">Change Password</PrimaryAnchor>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ backgroundColor: "#b2b2b2" }} />

      <div className="columns is-multiline">
        <div className="column is-half">
          <div className="profile-about">
            <p className="profile-about__title">Tell us more about yourself</p>
            <p className="profile-about__description">
              This information will show publicly so be careful what you provide
            </p>
          </div>
        </div>
        <div className="column is-half">
          <div className="columns is-multiline">
            <div className="column is-half">
              <Select
                label="Years of Experience"
                options={yearsOfExperienceList}
                name="yearsOfExperience"
                value={
                  values.yearsOfExperience ? values.yearsOfExperience.value : ""
                }
                onChange={onChange}
                placeholder="Year"
              />
            </div>
            <div className="column is-half">
              <Select
                label="Degree Achieved"
                options={degreesList}
                name="degree"
                value={values.degree ? values.degree.value : ""}
                onChange={onChange}
                placeholder="Degree"
              />
            </div>
            <div className="column is-half">
              <Input
                label="Headline"
                name="headline"
                placeholder={""}
                value={values.headline ? values.headline.value : ""}
                onChange={onChange}
              />
            </div>
            <div className="column is-half">
              <Input
                label="Skills"
                name="skills"
                placeholder={""}
                value=""
                onChange={onChange}
              />
            </div>
            <div className="column is-full">
              <TextArea
                label="About"
                value={values.about ? values.about.value : ""}
                placeholder="about"
                name="about"
                onChange={onChange}
              ></TextArea>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ backgroundColor: "#b2b2b2" }} />
      <div className="profile-submit-btns buttons is-flex">
        <SecondaryButton onClick={handleDiscardChanges}>
          Discard Changes
        </SecondaryButton>
        <PrimaryButton loading={updatingUser}>Save</PrimaryButton>
      </div>
    </form>
  );
}
