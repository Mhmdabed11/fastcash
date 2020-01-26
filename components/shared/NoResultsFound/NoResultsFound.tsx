import React from "react";
import "./NoResultsFound.scss";
export default function NoResultsFound() {
  return (
    <div className="not-found has-text-centered">
      <img src="/NoResultsFound.svg" alt="" />
      <h1 className="title">No Result Found</h1>
      <h2 className="subtitle">
        We’ve tried our best to find results for what you’re looking for, but
        sadly we found nothing.
      </h2>
    </div>
  );
}
