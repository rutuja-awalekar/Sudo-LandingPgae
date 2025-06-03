import React from "react";

import documentIcon from "../assets/document.jpg";
import projectIcon from "../assets/project.jpg";
import ticketIcon from "../assets/ticket.jpg";
import websiteIcon from "../assets/website.jpg";
import newsIcon from "../assets/news.jpg";
import salesIcon from "../assets/sales.jpg";
import appointmentIcon from "../assets/appointment.jpg";
import articlesIcon from "../assets/articles.jpg";

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <div className="features-container">
        <div className="feature-box">
          <img src={documentIcon} alt="Documentation" />
          <h3>Check out our documentation</h3>
          <p>Check out our documentation to explore how we help businesses scale with AWS and other leading cloud services. </p>
        </div>
        <div className="feature-box">
          <img src={projectIcon} alt="Manage Project" />
          <h3>Need to manage your project</h3>
          <p>Access the Customer Portal to track progress, share updates, and stay connected every step of the way!</p>
        </div>
        <div className="feature-box">
          <img src={ticketIcon} alt="Submit Ticket" />
          <h3>Need to submit a ticket?</h3>
          <p>Click here to contact our support team, report issues, or request assistance — we're here to help!</p>
        </div>
        <div className="feature-box">
          <img src={websiteIcon} alt="Website" />
          <h3>Checkout our website!</h3>
          <p>If you need more information about our solutions and services, please check our website.</p>
        </div>
        <div className="feature-box">
          <img src={newsIcon} alt="Stay Updated" />
          <h3>Stay up to date!</h3>
          <p>Follow our LinkedIn to stay up to date with what's happening in industry and what SUDO is up to.</p>
        </div>
        <div className="feature-box">
          <img src={salesIcon} alt="Sales Agent" />
          <h3>Speak to a sales agent!</h3>
          <p> We’ve got you covered! Click here to connect with our dedicated Sales team and get personalized assistance.</p>
        </div>
      </div>
      <div className="feature-container2">
        <div className="feature-box2">
          <img src={appointmentIcon} alt="Book Appointment" />
          <h3>Book an appointment!</h3>
          <p> Schedule your session easily and get expert support tailored to your needs. Stay on track and achieve your goals with us!</p>
        </div>
        <div className="feature-box2">
          <img src={articlesIcon} alt="Knowledge Articles" />
          <h3>Knowledge Articles</h3>
          <p>Explore our Knowledge Articles for helpful guides, tips, and solutions to get the most out of our cloud and development services.</p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;