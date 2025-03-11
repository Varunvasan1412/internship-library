// RadioGroup.jsx
import React from "react";

const RadioGroup = ({ register, name, options, errorMessage }) => {
  return (
    <div>
      <label className="block font-medium">Gender</label>
      <div className="flex space-x-4">
        {options.map((option) => (
          <div key={option.value}>
            <label>
              <input
                type="radio"
                {...register(name, { required: "Gender is required" })}
                value={option.value}
                className="mr-2"
              />
              {option.label}
            </label>
          </div>
        ))}
      </div>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default RadioGroup;
