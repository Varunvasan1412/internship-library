import React from "react";

const SuccessNotification = ({ message, onClose }) => {
  return (
    <div className="fixed top-4 right-4 p-4 bg-green-500 text-white rounded-lg shadow-lg">
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button onClick={onClose} className="ml-4 text-white">
          &times;
        </button>
      </div>
    </div>
  );
};

export default SuccessNotification;
