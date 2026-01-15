import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-red-50 flex items-center justify-center px-6">
      <div className="max-w-4xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            About Us
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Learn more about our food ordering app and the people behind it.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left text */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Delicious food, delivered fast 🍔
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our food ordering app is designed to connect you with your
              favorite restaurants effortlessly. We focus on speed, simplicity,
              and a delightful user experience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From browsing menus to tracking orders in real-time, we make sure
              every step feels smooth and intuitive.
            </p>
          </div>

          {/* Right profile card */}
          <div className="bg-linear-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white shadow-lg">
            <h3 className="text-xl font-bold mb-4">Meet the Developer</h3>

            <div className="bg-white text-gray-800 rounded-lg p-4 shadow">
              {/* DO NOT change UserClass – just style its container */}
              <UserClass name={"Faisal"} twitterHandle={"@faisalkhalil"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
