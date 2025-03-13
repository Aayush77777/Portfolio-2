import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl font-bold">Sajan Neupane</h1>
            <p className="text-gray-400">
              Full-Stack Developer based in Nepal, specializing in web and
              software development.
            </p>
          </div>

          {/* Right Section */}
          <div className="flex-1 text-center md:text-right">
            <form className="flex flex-col md:flex-row items-center justify-center md:justify-end">
              <input
                type="email"
                placeholder="Enter Email"
                className="px-4 py-2 rounded-l-lg text-black w-64 focus:outline-none"
              />
              <button className="bg-green-500 text-white px-4 py-2 rounded-r-lg hover:bg-green-600 transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
