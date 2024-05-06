import React from "react";

function Label({ className = "", children }) {
  return (
    <label
      className={`block font-semibold text-sm text-gray-900 mb-1 uppercase ${className}`}
    >
      {children}
    </label>
  );
}

export default Label;
