import React from "react";
import "./ProfileForm.scss";
import Input from "../shared/Input/Input";
import Select from "../shared/Select/Select";
import PrimaryButton from "../shared/PrimaryButton/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton/SecondaryButton";
export default function ProfileForm() {
  return (
    <form data-testid="profile-form">
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
                value=""
                onChange={() => {}}
              />
            </div>
            <div className="column is-half">
              <Input
                label="Last Name"
                name="lastName"
                placeholder={""}
                value=""
                onChange={() => {}}
              />
            </div>
            <div className="column is-half">
              <Select
                label="Country"
                options={["Lebanon", "Canada"]}
                name="country"
                value={""}
                onChange={() => {}}
                placeholder="Country"
              />
            </div>
            <div className="column is-half">
              <Input
                label="Phone Number"
                name="phoneNumber"
                placeholder={""}
                value=""
                onChange={() => {}}
              />
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
                options={["Lebanon", "Canada"]}
                name="yearsOfExperience"
                value={""}
                onChange={() => {}}
                placeholder="Year"
              />
            </div>
            <div className="column is-half">
              <Select
                label="Degree Achieved"
                options={["Lebanon", "Canada"]}
                name="degreeAchieved"
                value={""}
                onChange={() => {}}
                placeholder="Degree"
              />
            </div>
            <div className="column is-half">
              <Input
                label="Headline"
                name="headline"
                placeholder={""}
                value=""
                onChange={() => {}}
              />
            </div>
            <div className="column is-half">
              <Input
                label="Skills"
                name="skills"
                placeholder={""}
                value=""
                onChange={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
      <hr style={{ backgroundColor: "#b2b2b2" }} />
      <div className="profile-submit-btns buttons is-flex">
        <SecondaryButton>Cancel</SecondaryButton>
        <PrimaryButton>Save</PrimaryButton>
      </div>
    </form>
  );
}
