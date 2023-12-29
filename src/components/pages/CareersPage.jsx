import React from 'react';
import { Helmet } from 'react-helmet-async';

const CareersPage = () => {
  // Example job openings
  const jobOpenings = [
    {
      title: "Front-End Developer",
      description: "Craft stunning UI/UX designs into functional web applications using React.js and modern CSS.",
      requirements: "Experience with React, TypeScript, and responsive design."
    },
    {
      title: "Back-End Developer",
      description: "Develop robust server-side logic, define and maintain the central database, and ensure high performance and responsiveness.",
      requirements: "Proficiency in Node.js, Express, and database management systems."
    },
    {
      title: "DevOps Engineer",
      description: "Maintain and optimize infrastructure, implement continuous integration and delivery, and support cloud services.",
      requirements: "Knowledge of AWS/GCP, Docker/Kubernetes, and CI/CD pipelines."
    },
    {
      title: "Product Manager",
      description: "Lead the product lifecycle from ideation to launch, gather requirements, and collaborate across teams to create innovative products.",
      requirements: "Strong leadership skills and experience in product management methodologies."
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Careers - WebOpMatics</title>
      </Helmet>
      <main className="container mx-auto my-12 p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Join Our Team</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {jobOpenings.map((job, index) => (
            <div key={index} className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-3">{job.title}</h2>
              <p className="mb-3">{job.description}</p>
              <p className="italic">{job.requirements}</p>
              <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default CareersPage;
