import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div className="bg-gray-900 flex items-center py-10">
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
          Discover Amazing Images
        </h1>
        {children}
      </div>
    </div>
  );
};

export default Jumbotron;
