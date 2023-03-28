import React from "react";
import CaseStudy from "./CaseStudy";
import studies from "../case-studies/case-studies";

function newStudy(study) {
    return (
      <CaseStudy
        key={study.id}
        name={study.name}
        website={study.website}
        websitename={study.websiteName}
        logo={study.logo}
        width={study.width}
      />
    );
  }


function MyWork() {
    return(
        <section id="my-work" className="my-work">
        <div className="content">
          <h2>My work</h2>
          <p>
            My goal, as a frontend developer, is to code responsive, fast, and
            user friendly websites and web applications. I&nbsp;work hard to
            deliver thoughtful and to a tee projects. Beyond that, I&nbsp;am
            excited to offer creative and elegant solutions to any challenge.
          </p>
          <h3>Selected frontend projects I&nbsp;have worked on in the past.</h3>
          <div>
          </div>
          <ul>{studies.map(newStudy)}</ul>
        </div>
      </section>
    )
};

export default MyWork;
