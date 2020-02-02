import React from "react";
import "./HomePageSearchHeader.scss";
import SearchInput from "../shared/SearchInput/SearchInput";

type HomePageSearchHeaderProps = {
  onSubmit: Function;
};

export default function HomePageSearchHeader({
  onSubmit
}: HomePageSearchHeaderProps) {
  const handleSearchSubmit = values => {
    onSubmit(values);
  };
  return (
    <section className="section homePageSearchheader-section">
      <div className="container homePageSearchheader-container">
        <div className="hero-container">
          <h1 className="title">Find jobs easily.</h1>
          <h1 className="subtitle">Search for jobs anywhere in the world.</h1>
          <SearchInput onSubmit={handleSearchSubmit} />
        </div>
      </div>
    </section>
  );
}
