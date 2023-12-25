import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa'; // Import React Icons

function CompanyDescription() {
  return (
    <div className="container">
      <Helmet>
        <title>Company Description - WebOpMatics</title>
      </Helmet>
      <header className="section text-center">
        <h1 className="text-4xl font-extrabold leading-tight mb-4">
          Your Partner in Digital Innovation
        </h1>
        <p className="text-xl font-medium">
          WebOpMatics
        </p>
      </header>

      <main className="section">
        <section className="card mb-8">
          <div className="card-header">
            Our Mission
          </div>
          <div className="card-body">
            <p className="company-description">
              Empower businesses with cutting-edge web solutions, IT consulting, and hosting services. We create dynamic web experiences that align with your brand's mission.
            </p>
          </div>
        </section>

        <section className="card mb-8">
          <div className="card-header">
            Our Values
          </div>
          <div className="card-body">
            <ul className="company-description list-disc list-inside">
              <li>
                Innovation: Leading technological advancements, setting industry trends.
              </li>
              <li>
                Client-Centric: Prioritizing your success, tailoring solutions to your unique needs.
              </li>
              <li>
                Excellence: Committing to delivering the highest quality of work.
              </li>
              <li>
                Transparency: Maintaining trust through open communication.
              </li>
              <li>
                Teamwork: Collaborating to achieve outstanding results.
              </li>
            </ul>
          </div>
        </section>

        <section className="card">
          <div className="card-header">
            About Us
          </div>
          <div className="card-body">
            <p className="company-description">
              With a visionary approach to technology, we excel in building responsive, high-performance websites and providing robust hosting services. Embark on your digital transformation journey with WebOpMatics.
            </p>
            <p className="company-description">
              Experience seamless technology integration with unparalleled customer support, propelling your business to unparalleled success.
            </p>
          </div>
        </section>
      </main>

      <footer className="section text-center">
        <p>&copy; {new Date().getFullYear()} WebOpMatics. All rights reserved.</p>
        <div className="mt-4">
          <a href="/contact" className="mr-4">Contact Us</a>
          <a href="#" className="mr-4">
            <FaFacebookSquare className="text-2xl inline" />
          </a>
          <a href="#">
            <FaInstagram className="text-2xl inline" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default CompanyDescription;