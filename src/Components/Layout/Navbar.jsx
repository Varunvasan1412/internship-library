import { Link } from "react-router-dom";
import SignOutButton from "../Forms/Buttons/SignOutButton";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">
        <Link to="/">Home</Link>
      </div>
      <div className="flex space-x-4 items-center ">
        <Link to="/forms" className="hover:underline">
          Forms
        </Link>
        <Link to="/result" className="hover:underline">
          Results
        </Link>
        <Link to="/FAQ" className="hover:underline">
          FAQ
        </Link>
        <SignOutButton /> {/* SignOut Button in Navbar */}
      </div>
    </nav>
  );
};

export default Navbar;
