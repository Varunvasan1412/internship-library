const PricingCardTemplate = ({ title, description, price, features }) => {
  const handlePayment = async () => {
    const options = {
      key: "rzp_test_jFJzTxa5xwJRm0", // Replace with your Razorpay Key ID
      amount: price * 100, // Convert price to paise
      currency: "INR",
      name: "Library Subscription",
      description: title,
      image: "https://your-logo-url.com/logo.png",
      handler: function (response) {
        alert(
          "Payment Successful! Payment ID: " + response.razorpay_payment_id
        );
      },
      prefill: {
        name: "John Doe",
        email: "john@example.com",
        contact: "9999999999",
      },
      notes: {
        plan: title,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-lg p-6 bg-white hover:scale-105 transition-transform duration-300 ease-in-out">
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="font-medium text-gray-600 mb-4">{description}</p>
      <p className="text-3xl font-bold text-gray-800">₹{price}/month</p>
      <div className="mt-4 shadow-xl bg-blue-100 rounded-lg p-4">
        <h3 className="text-md font-bold my-2 text-gray-800">Key Features</h3>
        <ul className="text-sm text-gray-600 mb-4 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-green-500 font-semibold">✔</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={handlePayment}
        className="mt-4 w-full bg-gray-600 text-white py-2 rounded-lg hover:bg-blue-500 transition-colors"
      >
        Subscribe Now
      </button>
    </div>
  );
};

export default PricingCardTemplate;
