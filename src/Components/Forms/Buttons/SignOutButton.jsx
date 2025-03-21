import { useNavigate } from "react-router-dom";

const SignOutButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/signout")}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;
