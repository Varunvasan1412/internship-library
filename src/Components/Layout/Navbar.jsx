import { Link } from "react-router-dom";
import SignOutButton from "../Forms/Buttons/SignOutButton";

const Navbar = () => {
  return (
    <nav className="w-full text-black p-4 flex justify-between items-center h-16 z-10 shadow-lg">
      <div className="text-lg font-bold flex items-center">
        <img
          src="/logo.png"
          alt="BookNest Logo"
          className="w-12 h-12 mx-4 object-contain"
        />
        <Link to="/" className="hover:text-blue-300">
          BookNest
        </Link>
      </div>
      <div className="flex space-x-6 items-center">
        <Link to="/" className="hover:text-blue-300">
          Home
        </Link>
        <Link to="/profile" className="hover:text-blue-300">
          Profile
        </Link>
        <Link to="/pricing" className="hover:text-blue-300">
          Pricing
        </Link>
        <Link to="/FAQ" className="hover:text-blue-300">
          FAQ
        </Link>
        <SignOutButton />
      </div>
    </nav>
  );
};

export default Navbar;
