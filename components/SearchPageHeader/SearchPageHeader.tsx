import React from "react";
import "./SearchPageHeader.scss";
import SearchInput from "../shared/SearchInput/SearchInput";
export default function SearchPageHeader({
  onSubmit,
  initialValue,
  initialLocation
}) {
  const handleSearchSubmit = searchTerm => {
    onSubmit(searchTerm);
  };

  return (
    <section className="section searchPageSearchHeader-section">
      <div className="container searchPageSearchHeader-container">
        <div className="hero-container">
          <h1 className="title">Start a new career and much more ...</h1>
          <SearchInput
            onSubmit={handleSearchSubmit}
            initialLocation={initialLocation}
            initialValue={initialValue}
          />
        </div>
      </div>
    </section>
  );
}
