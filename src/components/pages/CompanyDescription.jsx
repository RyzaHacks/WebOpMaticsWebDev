import React from 'react';

function CompanyDescription() {
  // Tailwind CSS classes for the background image
  const backgroundImageStyle = "bg-[url('/bg2.png')] bg-cover bg-no-repeat bg-center";

  return (
    <div className={`${backgroundImageStyle} min-h-screen flex items-center justify-center`}>
      <div className="w-full max-w-5xl mx-auto p-10 md:py-16 bg-black bg-opacity-75 rounded-xl shadow-xl">
        <div className="text-center space-y-6">
          <h2 className="text-5xl font-bold text-indigo-400">
            Who We Are
          </h2>
          <p className="text-xl font-medium text-gray-300">
            WebOpMatics is at the cutting-edge intersection of web development, hosting, and IT consulting. Our mastery in crafting dynamic web experiences and strategic IT solutions empowers businesses to thrive in the digital era.
          </p>
          <div className="border-b border-gray-700 my-6" />
          <p className="text-lg text-gray-400">
            With a visionary approach to technology, our team delivers bespoke solutions that resonate with your brand's voice and mission. We excel in building responsive, high-performance websites and providing robust hosting services to ensure your online presence is second to none.
          </p>
          <p className="text-lg text-gray-400">
            Embark on your digital transformation journey with WebOpMatics. Experience seamless integration of technology with unparalleled customer support, propelling your business towards unparalleled success.
          </p>
          <a href="/contact" className="mt-10 inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 transition duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default CompanyDescription;
