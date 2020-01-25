import React from "react";
import "./PostCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationArrow,
  faBuilding,
  faShoppingBag
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type PostCardProps = {
  newPost?: boolean;
  title: string;
  postedBy: string;
  type: "Full-time" | "Part-time" | "Remote";
  location: string;
  description: string;
  techStack: Array<string>;
  company: string;
};

export default function PostCard({
  newPost = false,
  title,
  postedBy,
  type,
  location,
  description,
  techStack,
  company
}: PostCardProps) {
  return (
    <div className={`postcard__container ${newPost ? "new-post" : ""}`}>
      <div className="postcard__container-title">
        <Link href="/">
          <a>
            <b>{title}</b>
          </a>
        </Link>
      </div>
      <div className="postcard__container-postedby">
        Posted by&nbsp;
        <a href="https://apple.com" target="_blank">
          {postedBy}
        </a>
      </div>

      <div className="postcard__container-jobmeta is-flex">
        <div className="postcard__container-jobmeta-item">
          <FontAwesomeIcon icon={faShoppingBag} /> {type}
        </div>
        <div className="postcard__container-jobmeta-item">
          <FontAwesomeIcon icon={faLocationArrow} /> {location}
        </div>
        <div className="postcard__container-jobmeta-item">
          <FontAwesomeIcon icon={faBuilding} /> {company}
        </div>
      </div>

      <div className="postcard__container-description">{description}</div>
      <div className="postcard__container-techtags">
        {techStack.map((techItem, index) => (
          <div key={index} className="postcard__container-techtag">
            {techItem}
          </div>
        ))}
      </div>
    </div>
  );
}
