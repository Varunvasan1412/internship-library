// CheckboxGroup.jsx
import React from "react";

const Checkbox = ({ register, name, errorMessage }) => {
  return (
    <div>
      <div className="flex items-center">
        <input
          type="checkbox"
          {...register(name, {
            required: "You must accept the terms and conditions",
          })}
          className="mr-2"
        />
        <label>
          I agree to the{" "}
          <span className="text-blue-500">Terms and Conditions</span>
        </label>
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default Checkbox;
