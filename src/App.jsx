import { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);

  useEffect(() => {
    fetch('/portfolio-data.json')
      .then(response => response.json())
      .then(data => setPortfolioData(data));
  }, []);

  if (!portfolioData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App container">
      <header className="my-5">
        <h1>{portfolioData.title}</h1>
        <p className="lead">{portfolioData.description}</p>
        <a href={portfolioData.resume} className="btn btn-primary me-2">Resume</a>
        <a href={portfolioData.linkedin} className="btn btn-secondary me-2">LinkedIn</a>
        <a href={portfolioData.github} className="btn btn-secondary">GitHub</a>
      </header>

      <section id="projects" className="my-5">
        <h2>Projects</h2>
        <div className="row">
          {portfolioData.projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="architectures" className="my-5">
        <h2>System Architectures</h2>
        <ul className="list-group">
          {portfolioData.architectures.map((arch, index) => (
            <li className="list-group-item" key={index}>{arch}</li>
          ))}
        </ul>
      </section>

      <section id="certificates" className="my-5">
        <h2>Certifications</h2>
        <ul className="list-group">
          {portfolioData.certificates.map((cert, index) => (
            <li className="list-group-item" key={index}>{cert}</li>
          ))}
        </ul>
      </section>

      <section id="contact" className="my-5">
        <h2>Contact</h2>
        <p>Email: <a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a></p>
        {/* A simple contact form can be added here */}
      </section>
    </div>
  );
}

export default App;