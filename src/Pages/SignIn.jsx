import SignInButton from "../Components/Forms/Buttons/SignInButton";
import SignOutButton from "../Components/Forms/Buttons/SignOutButton";

const SignIn = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome to Sign In Page</h1>
      <div className="flex space-x-2">
        <SignInButton />
        <SignOutButton />
      </div>
    </div>
  );
};

export default SignIn;
  