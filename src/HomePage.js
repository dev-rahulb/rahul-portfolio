import React from "react";
import profileImg from "./profile.jpg"; // optional local image

export default function HomePage() {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <div className="row align-items-center justify-content-center text-center mb-5">
        <div className="col-md-4 mb-4">
          <img
            src={profileImg}
            alt="Rahul Bendre"
            className="img-fluid rounded-circle border border-3 border-primary shadow"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-8">
          <h1 className="display-4 fw-bold">Hey there! I'm Rahul 👋</h1>
          <p className="lead">
            I'm that guy who loves to build useful stuff on the web. Whether it's
            designing user interfaces or wiring up backend logic, I’m always up for a coding
            challenge. Full Stack Developer with 3+ years of hands-on experience with Laravel,
            React, Node.js, and making tech work for real people.
          </p>
          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <a
              href="mailto:rahul.balu.bendre@gmail.com"
              className="btn btn-primary btn-lg"
            >
              📬 Let's Talk
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-bendre-83a73129a"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-lg"
            >
              🔗 LinkedIn
            </a>
            <a
              href="/Rahul_Bendre_Resume.pdf"
              className="btn btn-outline-secondary btn-lg"
              target="_blank"
            >
              📄 My Resume
            </a>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="text-center mb-5">
        <h2 className="mb-3">🛠️ What I Know (and Love)</h2>
        <p className="mb-4">Here's the stuff I enjoy working with regularly:</p>
        <div className="row">
          <div className="col-md-4">
            <h5>Frontend</h5>
            <p>React.js, HTML5, CSS3, Bootstrap, JavaScript (ES6+), jQuery</p>
          </div>
          <div className="col-md-4">
            <h5>Backend</h5>
            <p>Laravel,codeigniter 4, Node.js, PHP, Express, REST APIs</p>
          </div>
          <div className="col-md-4">
            <h5>Tools & DB</h5>
            <p>MySQL, MongoDB, Firebase, Git, AWS, Razorpay, Google Maps API</p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="text-center mb-5">
        <h2 className="mb-3">🚀 Projects I've Worked On</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">💰 Finance Transaction Record</h5>
                <p className="card-text">
                  A secure finance tracking system for businesses. Added JWT auth and role-based access. Super fast reports thanks to optimized queries.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">📦 Product Delivery System</h5>
                <p className="card-text">
                  Laravel + Firebase + Razorpay + Google Maps = a smooth delivery system. Real-time tracking, secure payments, and solid backend work.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">📱 Parent-Teacher App</h5>
                <p className="card-text">
                  Real-time chat and notices for schools. Firebase + Java + Google Drive API. Parents loved how easy it was to use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-4 border-top">
        <p className="mb-1">Made with 💻 by Rahul Bendre</p>
        <small>&copy; {new Date().getFullYear()} Rahul Bendre | Pune, India</small>
      </footer>
    </div>
  );
}
