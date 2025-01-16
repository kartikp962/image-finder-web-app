import React from "react";
import { Link } from "react-router-dom";

const ImageCard = ({ data }) => {
  return (
    <div className="backdrop-blur-sm border-0 shadow transition-transform hover:scale-105">
      <img
        src={data.urls.small}
        alt={data.alt_description}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <Link to={`/add-caption/${data.id}`} state={data}>
        <button className="w-full h-10 bg-custom-light-blue rounded-b-lg hover:bg-custom-blue text-white">
          Add Caption
        </button>
      </Link>
    </div>
  );
};

export default ImageCard;
