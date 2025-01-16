import React, { useContext } from "react";
import { ImageCompContext } from "../App";
import ImageCard from "./ImageCard";
import SkeletonImageComponent from "./SkeletonImageComponent";

const ImageComponent = () => {
  const { response, isLoading } = useContext(ImageCompContext);

  return (
    <>
      <h2 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 py-4 px-4">
        Featured Images
      </h2>
      {response?.length === 0 ? (
        <p className="text-2xl text-center font-semibold text-white mb-8 py-4 px-4">
          No results found...
        </p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-7xl mx-auto pb-8 px-4">
          {isLoading && response?.length > 0 ? (
            <SkeletonImageComponent item={10} />
          ) : (
            response.map((data, key) => <ImageCard key={key} data={data} />)
          )}
        </div>
      )}
    </>
  );
};

export default ImageComponent;
