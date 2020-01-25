import * as React from "react";
import "./PostaJob.scss";
import Input from "../shared/Input/Input";
import Select from "../shared/Select/Select";
import PrimaryButton from "../shared/PrimaryButton/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton/SecondaryButton";
import TextArea from "../shared/TextArea/TextArea";
import { useFormValidation } from "../../utils/hooks/useFormValidation";
import { categoriesList } from "../../utils/categories";
import { countryList } from "../../utils/countries";
import { currenciesList } from "../../utils/currencies";
import { typesList } from "../../utils/types";
import { yearsOfExperienceList } from "../../utils/yearsOfExperience";
import { validationSchema } from "./validation";
import Router from "next/router";
type FormProps = {
  initialValues: object;
  onSubmit: (values: object) => void;
  postingJob: boolean;
};

const skills = [
  { value: "React", label: "React" },
  { label: "html", value: "html" }
];

let categories = categoriesList.map(category => ({
  value: category,
  label: category
}));

let countries = countryList.map(country => ({
  value: country,
  label: country
}));

let currencies = currenciesList.map(currency => ({
  value: currency,
  label: currency
}));

let types = typesList.map(type => ({
  value: type,
  label: type
}));

export default function PostaJobForm({
  initialValues,
  onSubmit,
  postingJob
}: FormProps) {
  const { values, onChange, setValues, handleFormSubmit } = useFormValidation(
    initialValues,
    validationSchema
  );

  React.useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  // update user
  const handlePostAJob = () => {
    onSubmit(values);
  };

  // handle submit
  const handleSubmit = e => {
    e.preventDefault();
    handleFormSubmit(handlePostAJob);
  };

  // handle discard <changes></changes>
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
                    &nbsp;*
                  </span>
                </label>
              </div>
              <div className="column">
                <Input
                  name="companyName"
                  placeholder={"ex. Google"}
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
                <label htmlFor="title" className="label">
                  Job Title
                  <span title="required" className="required-astrisk">
                    &nbsp;*
                  </span>
                </label>
              </div>
              <div className="column">
                <Input
                  name="title"
                  placeholder={"ex. Front End Developer"}
                  value={values.title ? values.title.value : ""}
                  onChange={onChange}
                  error={values.title ? values.title.errorLabel : ""}
                />
              </div>
            </div>
            <div className="columns is-multiline">
              <div className="column  is-one-third">
                <label htmlFor="location" className="label">
                  Location
                  <span title="required" className="required-astrisk">
                    &nbsp;*
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
                  placeholder="ex. Germany"
                  error={values.location ? values.location.errorLabel : ""}
                  inputId="location"
                />
              </div>
            </div>
            <div className="columns is-multiline">
              <div className="column  is-one-third">
                <label htmlFor="description" className="label">
                  Job Description
                  <span title="required" className="required-astrisk">
                    &nbsp;*
                  </span>
                </label>
              </div>
              <div className="column">
                <TextArea
                  name="description"
                  placeholder={
                    "ex. Front end developer with over 2 years of experience..."
                  }
                  value={values.description ? values.description.value : ""}
                  onChange={onChange}
                  error={
                    values.description ? values.description.errorLabel : ""
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
                  <span title="required" className="required-astrisk">
                    &nbsp;*
                  </span>
                </label>
              </div>
              <div className="column">
                <Select
                  options={categories}
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
                  placeholder="ex. Software Engineering"
                  error={values.category ? values.category.errorLabel : ""}
                />
              </div>
            </div>
            <div className="columns is-multiline">
              <div className="column  is-one-third">
                <label htmlFor="salary" className="label">
                  Salary
                  <span title="required" className="required-astrisk">
                    &nbsp;*
                  </span>
                </label>
              </div>
              <div className="column">
                <Input
                  name="salary"
                  placeholder={"ex. 60000"}
                  value={values.salary ? values.salary.value : ""}
                  onChange={onChange}
                  error={values.salary ? values.salary.errorLabel : ""}
                  type="number"
                  min="0"
                />
              </div>
            </div>
            <div className="columns is-mutiline">
              <div className="column  is-one-third">
                <label htmlFor="currency" className="label">
                  Currency
                  <span title="required" className="required-astrisk">
                    &nbsp;*
                  </span>
                </label>
              </div>
              <div className="column">
                <Select
                  options={currencies}
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
                  placeholder="ex. USD"
                  error={values.currency ? values.currency.errorLabel : ""}
                />
              </div>
            </div>

            <div className="columns is-multiline">
              <div className="column is-one-third">
                <label htmlFor="skills" className="label">
                  Skills
                  <span title="required" className="required-astrisk">
                    &nbsp;*
                  </span>
                </label>
              </div>
              <div className="column">
                <Select
                  inputId="skills"
                  options={skills}
                  name="skills"
                  value={skillsValue}
                  onChange={val => handleSelectChange(val, "skills")}
                  placeholder="ex. React , HTML"
                  isMulti
                  error={values.skills ? values.skills.errorLabel : ""}
                />
              </div>
            </div>

            <div className="columns is-mutiline">
              <div className="column  is-one-third">
                <label htmlFor="type" className="label">
                  Employment Type
                  <span title="required" className="required-astrisk">
                    &nbsp;*
                  </span>
                </label>
              </div>
              <div className="column">
                <Select
                  options={types}
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
                  placeholder="ex. Full Time"
                  error={values.type ? values.type.errorLabel : ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className="postjob-form__page-break" />
      <div className="postjob-submit-btns buttons is-flex">
        <SecondaryButton onClick={handleDiscardChanges}>Cancel</SecondaryButton>
        <PrimaryButton loading={postingJob}>Save</PrimaryButton>
      </div>
    </form>
  );
}
