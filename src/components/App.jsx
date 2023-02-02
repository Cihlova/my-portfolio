import React from "react";
import Navbar from "./Navbar";
import studies from "../case-studies/case-studies";
import CaseStudy from "./CaseStudy";

function newStudy(study) {
  return <CaseStudy key={study.id} name={study.name} website={study.website} websitename={study.websiteName}/>;
}

function App() {
  return (
    <div className="layout-wrapper">
      <section id="intro" className="intro">
        <div className="content">
          <Navbar />
          <h1>Frontend Developer.</h1>
          <p>I am a passionate web sites and applications creator.</p>
        </div>
      </section>
      <section id="about" className="about">
        <div className="content">
          <h2>My journey</h2>
          <p>
            Hello, my name is Anna!
            <br />
          </p>
        </div>
      </section>
      <section id="work" className="work">
        <div className="content">
          <h2>My work</h2>
          {studies.map(newStudy)}
        </div>
      </section>
    </div>
  );
}

export default App;
