import {
  FaBoxOpen,
  FaHandshake,
  FaMoneyCheckAlt,
  FaShippingFast,
  FaTags,
} from "react-icons/fa";

export default function Subscribe() {
  return (
    <div className="mt-20 mx-1 mb-4">
      <div className="bg-white rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-800">
              Stay home & get your daily needs from our shop
            </h1>
            <p className="text-gray-600 mt-2">
              Start your daily shopping with_
              <span className="text-green-600 font-semibold">GrooFi</span>
            </p>
            <div className="mt-6 flex items-center border border-green-300 justify-center md:justify-start bg-white rounded-lg p-2 shadow-md w-fit">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 outline-none w-64"
              />
              <button className="bg-green-600 text-md text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative w-80 h-80">
            <img
              src="https://st3.depositphotos.com/1000975/37037/i/450/depositphotos_370378754-stock-photo-young-man-with-his-grocery.jpg"
              alt="Delivery Guy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
        <FeatureCard
          icon={<FaTags />}
          title="Best prices & offers"
          text="Orders $50 or more"
        />
        <FeatureCard
          icon={<FaShippingFast />}
          title="Free delivery"
          text="24/7 amazing services"
        />
        <FeatureCard
          icon={<FaHandshake />}
          title="Great daily deal"
          text="When you sign up"
        />
        <FeatureCard
          icon={<FaBoxOpen />}
          title="Wide assortment"
          text="Mega Discounts"
        />
        <FeatureCard
          icon={<FaMoneyCheckAlt />}
          title="Easy returns"
          text="Within 30 days"
        />
      </div>
    </div>
  );
}
const FeatureCard = ({ icon, title, text }) => {
  return (
    <div className="bg-white p-1 lg:p-3 rounded-lg shadow-md hover:shadow-xl flex flex-col items-center text-center">
      <div className="text-green-500 text-3xl">{icon}</div>
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-sm text-gray-500">{text}</p>
    </div>
  );
};
