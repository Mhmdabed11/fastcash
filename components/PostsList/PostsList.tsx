import React from "react";
import "./PostsList.scss";
import Link from "next/link";
import PostCard from "../shared/PostCard/PostCard";
import PostSkeletonLoader from "../shared/PostSkeletonLoader/PostSkeletonLoader";
import NoResultsFound from "../shared/NoResultsFound/NoResultsFound";

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
  console.log("hello");
  // render header of not found results
  const renderHeader = React.useCallback(() => {
    if (!loading && posts.length === 0) {
      return null;
    }
    return (
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
    );
  }, [loading, posts]);

  // render body of not found results
  const renderBody = React.useCallback(() => {
    if (!loading && posts.length === 0) {
      return <NoResultsFound />;
    }
    if (loading) {
      return skeletonMap.map((item, index) => (
        <PostSkeletonLoader key={index} />
      ));
    } else {
      return posts.map((post: Post) => (
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
      ));
    }
  }, [loading, posts]);

  return (
    <div className="postsList__container">
      {renderHeader()}
      <div style={{ marginTop: "40px" }}>{renderBody()}</div>
    </div>
  );
}
