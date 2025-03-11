import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  nameRegex,
  emailRegex,
  phoneRegex,
  zipRegex,
  passwordRegex,
} from "../Components/Forms/regex.jsx";
import SkillsSelect from "../Components/Forms/SkillsSelect.jsx";
import NameInput from "../Components/Forms/NameInput.jsx";
import PasswordInput from "../Components/Forms/PasswordInput.jsx";
import Radio from "../Components/Forms/Radio.jsx";
import Checkbox from "../Components/Forms/Checkbox.jsx";
import SuccessNotification from "../Components/Forms/SuccessNotification.jsx";
import ConfirmNotification from "../Components/Forms/ConfirmNotification.jsx";
import ImageUpload from "../Components/Forms/ImageUpload.jsx";

const Forms = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState(null);

  const country = watch("country");

  // const onSubmit = (data) => {
  //   const imageFile = data.imageUpload[0]; // Get the uploaded file
  //   if (imageFile) {
  //     const imageUrl = URL.createObjectURL(imageFile); // Create a temporary URL
  //     setValue("imageUrl", imageUrl); // Set image URL properly
  //   }
  //   setFormData(data);
  //   setShowConfirmation(true);
  // };

  const onSubmit = (data) => {
    const imageFile = data.imageUpload?.[0];
    if (imageFile) {
      const imageUrl = URL.createObjectURL(imageFile);
      data.imageUrl = imageUrl;  // ✅ Assign before setFormData
      setValue("imageUrl", imageUrl);
    }
  
    console.log("Form data before confirmation:", data);
    setFormData(data);
    setShowConfirmation(true);
  };
  

  const handleConfirmSubmit = () => {
    console.log("Confirmed submission with data:", formData);
    setShowConfirmation(false);
    setShowSuccess(true);
  };

  const handleCancelSubmit = () => {
    setShowConfirmation(false);
    console.log("Form submission canceled");
  };

  const handleCloseSuccess = () => {

  
    if (formData.imageUrl) {
      localStorage.setItem("imageUrl", formData.imageUrl);
    }
  
    console.log("Navigating to result page with data:", formData);
    setShowSuccess(false);
    navigate("/result", { state: { formData } });
  };
  

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Registration Form</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* First Name */}
        <NameInput
          register={register}
          name="firstName"
          rules={{
            required: "First name is required",
            pattern: {
              value: nameRegex,
              message: "Only alphabets are allowed",
            },
          }}
          placeholder="First Name"
          errorMessage={errors.firstName?.message}
        />
        {/* Last Name */}
        <NameInput
          register={register}
          name="lastName"
          rules={{
            required: "Last name is required",
            pattern: {
              value: nameRegex,
              message: "Only alphabets are allowed",
            },
          }}
          placeholder="Last Name"
        />
        {/* Email */}
        <div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: { value: emailRegex, message: "Invalid email format" },
            })}
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        {/* Phone Number */}
        <div>
          <input
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: phoneRegex,
                message: "Invalid phone number (10 digits only)",
              },
            })}
            placeholder="Phone Number"
            className="w-full p-2 border rounded"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>
        {/* Country Selection */}
        <div>
          <select
            {...register("country", { required: "Country is required" })}
            className="w-full p-2 border rounded appearance-none"
          >
            <option value="">Select Country</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="China">China</option>
          </select>
          {errors.country && (
            <p className="text-red-500">{errors.country.message}</p>
          )}
        </div>
        {/* Address Field (Conditional) */}
        {country === "India" && (
          <div>
            <input
              {...register("address", { required: "Address is required" })}
              placeholder="Address"
              className="w-full p-2 border rounded"
            />
            {errors.address && (
              <p className="text-red-500">{errors.address.message}</p>
            )}
          </div>
        )}
        <div>
          <input
            {...register("zip", {
              required: "Zip code is required",
              pattern: {
                value: zipRegex,
                message: "Invalid zip code (6 digits only)",
              },
            })}
            placeholder="Zip Code"
            className="w-full p-2 border rounded"
          />
          {errors.zip && <p className="text-red-500">{errors.zip.message}</p>}
        </div>
        {/* Skills Select */}
        <SkillsSelect
          control={control}
          name="skills"
          rules={{ required: "Skills are required" }}
        />
        {/* Image Upload */}
        <ImageUpload register={register} setValue={setValue} />
        {/* Gender Selection */}
        <Radio
          register={register}
          name="gender"
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
            { value: "other", label: "Other" },
          ]}
          errorMessage={errors.gender?.message}
        />
        {/* Terms Agreement */}
        <Checkbox
          register={register}
          name="terms"
          errorMessage={errors.terms?.message}
        />
        {/* Password */}
        <PasswordInput
          register={register}
          name="password"
          rules={{
            required: "Password is required",
            pattern: {
              value: passwordRegex,
              message:
                "Min 6 chars, at least one letter, one number & one special character",
            },
          }}
          placeholder="Password"
          errorMessage={errors.password?.message}
        />
        {/* Confirm Password */}
        <PasswordInput
          register={register}
          name="confirmPassword"
          rules={{
            required: "Confirm password is required",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          }}
          placeholder="Confirm Password"
          errorMessage={errors.confirmPassword?.message}
        />
        {/* Submit Button */}
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Custom Confirmation Notification */}
      {showConfirmation && (
        <ConfirmNotification
          message="Are you sure you want to submit the form?"
          onConfirm={handleConfirmSubmit}
          onCancel={handleCancelSubmit}
        />
      )}

      {/* Success Notification */}
      {showSuccess && (
        <SuccessNotification
          message="Form submitted successfully!"
          onClose={handleCloseSuccess}
        />
      )}
    </div>
  );
};

export default Forms;
