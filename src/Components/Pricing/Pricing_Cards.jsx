import PricingCard from "./PricingCardTemplate";
import pricingPlans from "./pricingPlans.json";

const Pricing_Cards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
      {pricingPlans.map((plan, index) => (
        <PricingCard
          key={index}
          title={plan.title}
          description={plan.description}
          price={plan.price}
          features={plan.features}
        />
      ))}
    </div>
  );
};

export default Pricing_Cards;
