import React from "react";
import "./LatestPosts.scss";
import Link from "next/link";
import PostCard from "../shared/PostCard/PostCard";
import { pseudoRandomBytes } from "crypto";

type Post = {
  id: string;
  title: string;
  location: string;
  description: string;
  author: object;
  skillsRequired: string[];
};

type LatestPostsProps = {
  postts: Array<Post> | [];
};

export default function LatestPosts({ posts }) {
  return (
    <section className="section latestposts-section">
      <div className="container">
        <div className="latestposts__container">
          <div className="is-flex latestposts-header">
            <div>
              <h1 className="title">Latest Jobs</h1>
            </div>
            <div className="latestposts-alljobs">
              <Link href="/">
                <a className="is-link">View all jobs</a>
              </Link>
            </div>
          </div>
          <div style={{ marginTop: "40px" }}>
            {posts.map(post => (
              <PostCard
                key={post.id}
                title={post.title}
                postedBy={post.author.firstName}
                type="Full-time"
                description={post.description}
                location={post.location}
                techStack={post.skillsRequired}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
