const Contact = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center px-6">
      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you. Let's start a conversation.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left info section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Get in touch
            </h2>
            <p className="text-gray-600">
              Have a question, feedback, or just want to say hello? Reach out
              and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-3 text-gray-700">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                contact@company.com
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +1 (234) 567-890
              </p>
              <p>
                <span className="font-semibold">Location:</span> Remote /
                Worldwide
              </p>
            </div>
          </div>

          {/* Right call-to-action card */}
          <div className="bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl p-8 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Let's build something great
              </h3>
              <p className="text-indigo-100">
                Whether it's a new idea or a quick question, we're just one
                message away.
              </p>
            </div>

            <button className="mt-8 bg-white text-indigo-600 font-semibold py-3 px-6 rounded-lg shadow hover:bg-indigo-50 transition">
              Send a Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
