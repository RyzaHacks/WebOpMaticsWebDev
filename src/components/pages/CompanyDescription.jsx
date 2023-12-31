import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa';

const CompanyDescription = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'We stay ahead of technological advancements, setting trends rather than following them.',
    },
    {
      title: 'Client-Centric',
      description: 'Our clients\' success is our top priority. We tailor solutions to meet their unique needs and goals.',
    },
    {
      title: 'Excellence',
      description: 'We are committed to delivering excellence in every project, ensuring the highest quality of work.',
    },
    {
      title: 'Transparency',
      description: 'We maintain transparency in our processes and build trust through open communication.',
    },
    {
      title: 'Teamwork',
      description: 'Our dedicated team collaborates to achieve outstanding results for our clients.',
    },
    {
      title: 'Diversity',
      description: 'We celebrate diversity and foster an inclusive environment that values unique perspectives and backgrounds.',
    },
  ];

  const pageStyles = {
    backgroundColor: '#0f172a',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    position: 'relative',
  };

  const contentStyles = {
    zIndex: '1', // Ensure content is above the gradient shapes
  };

  return (
    <div style={pageStyles}>
      {/* Gradient Shape Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-400 via-green-300 to-blue-500 rounded-lg transform -rotate-12 scale-105 opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-300 via-yellow-200 to-red-500 rounded-lg transform rotate-12 scale-105 opacity-50 z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-pink-400 via-pink-300 to-purple-600 rounded-lg transform -rotate-12 scale-105 opacity-50 z-0"></div>

      <Helmet>
        <title>Company Description - WebOpMatics</title>
      </Helmet>
      <div style={contentStyles}> {/* Wrap your content with this div */}
        <Mission />
        <Values values={values} />
        <Footer />
      </div>
    </div>
  );
};

const Values = ({ values }) => {
  const sectionStyles = {
    padding: '4rem 0',
    backgroundColor: '#1e293b',
  };

  return (
    <section style={sectionStyles}>
      <div className="container mx-auto px-4">
        <h2 className="text-white text-4xl font-bold mb-12 text-center">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <ValueCard key={index} title={value.title} description={value.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ValueCard = ({ title, description }) => {
  const cardStyles = {
    backgroundColor: 'white',
    color: '#334155',
    borderRadius: '0.5rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '2rem',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
    textAlign: 'center',
  };

  return (
    <div style={cardStyles}>
      <div className="p-3">
        <div className="flex justify-center">
          <div className="h-16 w-16 mb-4 rounded-full bg-primary-600 flex items-center justify-center">
            <span className="text-white text-2xl">{title[0]}</span>
          </div>
        </div>
        <h3 className="text-2xl font-semibold mb-3">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Mission = () => {
  const missionStyles = {
    backgroundColor: '#1e293b',
    padding: '4rem 0',
    color: 'white',
    textAlign: 'center',
  };

  return (
    <main style={missionStyles}>
      <div className="text-white container mx-auto py-16">
        <h2 className="text-white text-3xl font-bold">Our Mission</h2>
        <p className="text-white text-lg">
          Our mission is to unleash the digital potential of businesses by delivering cutting-edge web solutions, strategic IT consulting, and top-tier hosting services. We are dedicated to crafting dynamic web experiences that resonate with our clients' brand voice and mission.
        </p>
        <CallToAction />
      </div>
    </main>
  );
};

const CallToAction = () => {
  const buttonStyle = {
    backgroundColor: '#2563eb',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem',
    display: 'inline-block',
    marginTop: '2rem',
    textDecoration: 'none',
    transition: 'all 0.3s ease-in-out',
  };

  return (
    <div>
      <p className="text-white text-lg">
        Embark on your digital transformation journey with WebOpMatics. Experience seamless integration of technology with unparalleled customer support, propelling your business towards unparalleled success.
      </p>
      <a href="/contact" style={buttonStyle}>
        Contact Us
      </a>
    </div>
  );
};

const Footer = () => {
  const footerStyles = {
    backgroundColor: '#162447',
    color: '#64748b',
    padding: '1.5rem 0',
    textAlign: 'center',
  };

  return (
    <footer style={footerStyles}>
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="mb-4 lg:mb-0">
          <p>&copy; {new Date().getFullYear()} WebOpMatics. All rights reserved.</p>
          <p>Address: 123 Main St, City, Country</p>
          <p>Phone: +1 (123) 456-7890</p>
        </div>
        <div className="flex space-x-6">
          <a href="https://www.facebook.com/webopmatics" className="text-blue-500 hover:text-blue-700">
            <FaFacebookSquare size="1.5em" />
          </a>
          <a href="https://www.instagram.com/webopmatics" className="text-blue-500 hover:text-blue-700">
            <FaInstagram size="1.5em" />
          </a>
          <a href="https://www.linkedin.com/company/webopmatics" className="text-blue-500 hover:text-blue-700">
            <FaLinkedin size="1.5em" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default CompanyDescription;
