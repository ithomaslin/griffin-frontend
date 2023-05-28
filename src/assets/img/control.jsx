import React from "react";

const ControlIcon = ({ isActive }) => {
  return (
    <svg
      aria-hidden="true"
      className={`
        w-6 h-6 ${isActive ? "text-primary" : "text-gray-500"} transition duration-75 dark:text-gray-400 
        group-hover:text-primary dark:group-hover:text-white
      `}
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
      ></path>
    </svg>
  );
}

export default ControlIcon;