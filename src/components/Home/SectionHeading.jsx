import React from "react";

const SectionHeading = ({ text }) => {
  return (
    <div className="flex items-center mb-4">
      <div className="w-1 rounded h-10 bg-blue-900 mr-2"></div>
      <h2 className="text-blue-900 text-2xl font-bold">{text}</h2>
    </div>
  );
};
export default SectionHeading;
