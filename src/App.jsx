import Navbar from "./Components/Layout/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import SignIn from "./Pages/SignIn";
import SignOut from "./Pages/SignOut";

const App = () => {
  return (
    <div>
      <Home />
      <Navbar />
      <SignIn />
      <SignOut />
    </div>
  );
};
export default App;
