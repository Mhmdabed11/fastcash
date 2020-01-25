import * as React from "react";
import "./SearchInput.scss";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

type SearchProps = {
  initialValue?: string;
  initialLocation?: string;
  onSubmit: Function;
};

export default function SearchInput({
  initialValue,
  initialLocation,
  onSubmit
}: SearchProps) {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [location, setLocation] = React.useState("");

  React.useEffect(() => {
    setLocation(initialLocation || "");
  }, [initialLocation]);

  React.useEffect(() => {
    setSearchTerm(initialValue || "");
  }, [initialValue]);

  //change value of search input
  const handleSearchTermChange = e => setSearchTerm(e.target.value);

  // change value of location input
  const handleLocaitonChange = e => setLocation(e.target.value);

  //handle form submit
  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit({
      searchTerm,
      location
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="search-input">
        <div className="search-input__container">
          <input
            value={searchTerm}
            onChange={handleSearchTermChange}
            type="text"
            placeholder="Search for a job..."
            autoCorrect="off"
            autoComplete="off"
          />
        </div>
        <div className="search-input__container">
          <input
            value={location}
            onChange={handleLocaitonChange}
            type="text"
            placeholder="Beirut, Lebanon"
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
