import React from 'react';
import { Helmet } from 'react-helmet-async'; // Make sure to install react-helmet-async
import { FaRocket } from 'react-icons/fa'; // Make sure to install react-icons
import Slides from '../Slides'; // Confirm this is the correct path

const HomePage = () => {
  // Content for each service card
  const services = [
    {
      icon: 'icon_0_0.png',
      title: "Web Design",
      description: "Our expert designers create stunning and user-friendly websites that leave a lasting impression on your audience."
    },
    {
      icon: 'icon_0_1.png',
      title: "Web Development",
      description: "We build powerful and scalable web applications tailored to your specific business needs."
    },
    {
      icon: 'icon_0_2.png',
      title: "Digital Marketing",
      description: "Maximize your online presence with our digital marketing strategies, including SEO, SEM, and social media marketing."
    },
    {
      icon: 'icon_0_3.png',
      title: "Web Hosting",
      description: "Reliable and secure hosting solutions to ensure high uptime and performance for your online presence."
    },
    {
      icon: 'icon_1_0.png',
      title: "IT Consulting",
      description: "Strategic IT guidance and expert advice to navigate the complex landscape of technology and digital transformation."
    },
    {
      icon: 'icon_1_1.png',
      title: "On-site Technical Support",
      description: "Our experts come directly to your location, ensuring your technology needs are met with precision and convenience."
    },
    // ... other services
  ];

  return (
    <div>
      <Helmet>
        <title>Home - WebOpMatics</title>
      </Helmet>
      <main>
        
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary-900 to-primary-800 text-white min-h-screen flex items-center justify-center px-8 pt-20 pb-10">
          <div className="absolute inset-0 bg-cover bg-no-repeat bg-fixed" style={{ backgroundImage: "url('/bg.png')" }}>
            <div className="absolute inset-0 bg-primary-900 opacity-50"></div>
          </div>
          <div className="z-10 max-w-3xl text-center">
            <h1 className="text-5xl font-extrabold mb-4">Unleash Your Digital Potential</h1>
            <h2 className="text-3xl mb-4">Join us in the digital revolution</h2>
            <p className="text-lg mb-8">Dive into the digital revolution with WebOpMatics as your ally. Elevate your online presence with our state-of-the-art web solutions that promise to put you ahead of the curve.</p>
            <div className="flex justify-center space-x-4">
              <button className="text-lg px-8 py-4 bg-green-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center">
                <FaRocket className="mr-2" /> Start Your Journey
              </button>
              <button className="text-lg px-8 py-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">Learn More</button>
            </div>
          </div>
        </section>

        {/* Service Cards Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
                  <img src={`/icons/${service.icon}`} alt={service.title} className="mx-auto mb-4 h-12 w-12" />
                  <h3 className="text-2xl font-semibold mb-4 text-primary-700">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Slider Section */}
        <section className="bg-primary-900 text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-8">Hear from the Innovators</h2>
            <Slides />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gradient-to-r from-primary-800 to-primary-900 text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-4">Embark On Your Success Story</h2>
            <p className="text-lg mb-8">Are you ready to transform your digital strategy? Connect with us and let's create something extraordinary together.</p>
            <button className="text-lg px-8 py-4 bg-secondary-500 text-white font-semibold rounded-md shadow-md hover:shadow-lg transition-all duration-300 ease-in-out">Get In Touch</button>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-gray-100 text-gray-600 text-center py-8">
          <div className="container mx-auto">
            <p>© 2023 WebOpMatics - All Rights Reserved</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default HomePage;
