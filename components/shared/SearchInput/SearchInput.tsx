import * as React from "react";
import "./SearchInput.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

type SearchProps = {
  initialValue?: string;
  onSubmit: Function;
};

export default function SearchInput({ initialValue, onSubmit }: SearchProps) {
  const [seachTerm, setSearchTerm] = React.useState(initialValue || "");

  //change value of search input
  const handleSearchTermChange = e => setSearchTerm(e.target.value);

  //handle form submit
  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="search-input">
        <div className="search-input__container">
          <input
            value={seachTerm}
            onChange={handleSearchTermChange}
            type="text"
            placeholder="Search for a job..."
            autoCorrect="off"
            autoComplete="off"
          />
        </div>
        <div className="search-input__search">
          <PrimaryButton
            size="medium"
            type="submit"
            style={{ borderRadius: 4 }}
          >
            Search
          </PrimaryButton>
        </div>
      </div>
    </form>
  );
}
