import Pricing_Cards from "./Pricing_Cards";

const Pricing = () => {
  return (
    <div className="container mx-auto my-12 px-5">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Choose Your Plan
      </h2>
      <p className="text-center text-gray-500 mb-12">
        Select a plan that fits your needs and scale up when necessary.
      </p>
      <Pricing_Cards />
    </div>
  );
};

export default Pricing;
