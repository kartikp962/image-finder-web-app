import React from "react";

const SkeletonImageComponent = ({ item }) => {
  return [...Array(item).keys()].map(() => (
    <div className="animate-pulse">
      <div className="bg-gray-300 rounded-lg h-72 shadow"></div>
    </div>
  ));
};

export default SkeletonImageComponent;
