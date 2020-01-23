import React from "react";
import ContentLoader from "react-content-loader";

export default function PostSkeletonLoader() {
  return (
    <ContentLoader
      height={160}
      width={400}
      speed={2}
      primaryColor="#c0c0c0"
      secondaryColor="#ecebeb"
    >
      <rect x="0" y="19" rx="3" ry="3" width="85" height="6" />
      <rect x="0" y="35" rx="3" ry="3" width="100" height="6" />
      <rect x="0" y="52" rx="3" ry="3" width="205" height="6" />
      <rect x="0" y="75" rx="3" ry="3" width="350" height="6" />
      <rect x="0" y="95" rx="3" ry="3" width="380" height="50" />
    </ContentLoader>
  );
}
