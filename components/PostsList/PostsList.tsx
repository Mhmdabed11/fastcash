import React from "react";
import "./PostsList.scss";
import Link from "next/link";
import PostCard from "../shared/PostCard/PostCard";
import PostSkeletonLoader from "../shared/PostSkeletonLoader/PostSkeletonLoader";

type Post = {
  id: string;
  companyName: string;
  title: string;
  location: string;
  description: string;
  author: author;
  skills: string[];
};

type author = {
  firstName: string;
  lastName: string;
};

type PostsListProps = {
  posts: any;
  loading: boolean;
  title: string;
};

const skeletonMap = [1, 2];

export default function PostsList({ posts, loading, title }: PostsListProps) {
  return (
    <div className="postsList__container">
      <div className="is-flex postsList-header">
        <div>
          <h1 className="title">{title}</h1>
        </div>
        <div className="postsList-alljobs">
          <Link href="/search">
            <a className="is-link">View all jobs</a>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: "40px" }}>
        {loading
          ? skeletonMap.map((item, index) => <PostSkeletonLoader key={index} />)
          : posts.map((post: Post) => (
              <PostCard
                key={post.id}
                title={post.title}
                postedBy={post.author.firstName}
                type="Full-time"
                description={post.description}
                location={post.location}
                techStack={post.skills}
                company={post.companyName}
              />
            ))}
      </div>
    </div>
  );
}
