import SignIn from "./SignIn";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center  bg-[url('/library2.png')]">
      <h1 className="text-6xl font-bold mb-4 font-sans">Welcome to BookNest</h1>
      <h3 className="text-2xl mb-4 font-mono">Your Gateway to Knowledge</h3>
      <SignIn />
    </div>
  );
};
export default Home;
