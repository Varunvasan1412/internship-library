import React from "react";

const ConfirmNotification = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed top-4 right-4 p-4 bg-gray-800 text-white rounded-lg shadow-lg">
      <div className="flex flex-col">
        <span className="mb-2">{message}</span>
        <div className="flex justify-end gap-2">
          <button onClick={onCancel} className="bg-red-500 px-3 py-1 rounded">
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-green-500 px-3 py-1 rounded"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmNotification;
