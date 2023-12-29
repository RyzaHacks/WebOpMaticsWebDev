import React from 'react';
import { Helmet } from 'react-helmet-async';

const ServicesPage = () => {
  const services = [
    { icon: 'icon_0_0.png', title: 'Web Development', description: 'Building responsive and scalable websites.' },
    { icon: 'icon_0_1.png', title: 'Mobile App Development', description: 'Creating intuitive and powerful mobile applications.' },
    { icon: 'icon_0_2.png', title: 'UI/UX Design', description: 'Designing user-friendly and attractive interfaces.' },
    { icon: 'icon_0_3.png', title: 'Digital Marketing', description: 'Promoting your business online to reach a wider audience.' },
    { icon: 'icon_1_0.png', title: 'SEO Services', description: 'Optimizing your website to rank higher on search engine results.' },
    { icon: 'icon_1_0.png', title: 'SEO Services', description: 'Optimizing your website to rank higher on search engine results.' },

  ];

  return (
    <div className="font-sans bg-primary-50 text-primary-900">
      <Helmet>
        <title>Services - WebOpMatics</title>
      </Helmet>
      <main>
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-extrabold leading-tight mb-4">Our Services</h1>
            <p className="text-xl font-medium mb-8">
              At WebOpMatics, we offer a wide range of services to help your business grow. Here are some of the services we offer:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
                  <img src={`/icons/${service.icon}`} alt={service.title} className="mx-auto mb-4 h-12 w-12" />
                  <h2 className="text-2xl font-semibold mb-4 text-primary-700">{service.title}</h2>
                  <p className="text-gray-600 text-left">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-extrabold leading-tight mb-4">Why Choose Us</h2>
            <ul className="text-left text-gray-600 mx-auto max-w-prose">
              <li>Pioneering the Future: At WebOpMatics, we don't follow trends; we set them...</li>
              <li>Comprehensive Services: Our suite of services is designed to cater to all aspects of your online presence...</li>
              <li>Tailored Solutions: We understand that every business is unique...</li>
              <li>Proven Track Record: Our portfolio is a testament to our expertise...</li>
            </ul>
          </div>
        </section>
        <footer className="bg-gray-800 text-white text-center py-6">
          <div className="container mx-auto">
            <p>&copy; {new Date().getFullYear()} WebOpMatics. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ServicesPage;