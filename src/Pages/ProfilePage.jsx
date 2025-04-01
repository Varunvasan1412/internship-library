import { useLocation, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state?.formData || {};

  const imageUrl = formData.imageUrl || ""; // Retrieve uploaded image

  const handleDownload = () => {
    if (imageUrl) {
      fetch(imageUrl)
        .then((res) => res.blob())
        .then((blob) => {
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = "profile_picture.jpg";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        })
        .catch((err) => console.error("Download failed:", err));
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg relative">
      {/* Profile Image or Skeleton */}
      <div className="absolute top-4 right-4 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center overflow-hidden bg-gray-200">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="Uploaded"
            className="w-full h-full object-contain"
          />
        ) : (
          <svg
            className="w-12 h-12 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12 2a5 5 0 00-5 5v1a5 5 0 0010 0V7a5 5 0 00-5-5zm0 12c-5.523 0-10 4.477-10 10h20c0-5.523-4.477-10-10-10z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      <h2 className="text-2xl font-bold mb-4 text-center">Your Profile </h2>

      <div className="border border-gray-300 p-4 rounded-md">
        <p className="mb-2">
          <strong>Name:</strong> {formData.firstName} {formData.lastName}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {formData.email}
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> {formData.phone}
        </p>
        <p className="mb-2">
          <strong>Zip Code:</strong> {formData.zip}
        </p>
        <p className="mb-2">
          <strong>Country:</strong> {formData.country}
        </p>
        <p className="mb-2">
          <strong>Skills:</strong>{" "}
          {formData.skills?.map((skill) => skill.label).join(", ") || "None"}
        </p>
        <p className="mb-2">
          <strong>Gender:</strong> {formData.gender}
        </p>
        <p className="mb-2">
          <strong>Accepted Terms:</strong> {formData.terms ? "Yes ✅" : "No ❌"}
        </p>
      </div>

      {/* Download Button if Image Exists */}
      {imageUrl && (
        <div className="flex justify-center">
          <button
            onClick={handleDownload}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Download Image
          </button>
        </div>
      )}

      {/* Back Button */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => navigate("/forms")}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Go Back to Form
        </button>
      </div>
    </div>
  );
};

export default ProfilePage;
