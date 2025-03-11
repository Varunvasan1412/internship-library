import { useState } from "react";

const ImageUpload = ({ setValue }) => {
  const [preview, setPreview] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (file) => {
    if (file && ["image/jpeg", "image/png"].includes(file.type)) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      setFile(file);
      setValue("imageUrl", imageUrl);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    handleFileChange(droppedFile);
  };

  return (
    <div
      className="flex flex-col items-center border-2 border-dashed border-gray-400 p-4 rounded-lg w-full cursor-pointer"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      <label className="cursor-pointer bg-gray-200 px-4 py-2 rounded">
        Upload Image
        <input
          type="file"
          className="hidden"
          accept="image/jpeg, image/png"
          onChange={(e) => handleFileChange(e.target.files[0])}
        />
      </label>

      <p className="text-gray-500 text-sm mt-2">
        Or drag and drop your image here
      </p>

      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="mt-2 w-16 h-16 rounded-full object-cover border"
        />
      )}
    </div>
  );
};

export default ImageUpload;
