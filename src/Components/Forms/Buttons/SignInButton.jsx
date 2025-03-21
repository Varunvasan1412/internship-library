import { useNavigate } from "react-router-dom";

const SignInButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/forms")}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
    >
      Sign In
    </button>
  );
};
export default SignInButton;
