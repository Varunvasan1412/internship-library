// PasswordInput.jsx
import React from "react";

const PasswordInput = ({
  register,
  name,
  rules,
  placeholder,
  errorMessage,
}) => {
  return (
    <div>
      <input
        type="password"
        {...register(name, rules)}
        placeholder={placeholder}
        className="w-full p-2 border rounded"
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
    </div>
  );
};

export default PasswordInput;
