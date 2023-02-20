import React from "react";
import Navbar from "./Navbar";
import studies from "../case-studies/case-studies";
import CaseStudy from "./CaseStudy";

function newStudy(study) {
  return (
    <CaseStudy
      key={study.id}
      name={study.name}
      website={study.website}
      websitename={study.websiteName}
      logo={study.logo}
    />
  );
}

function App() {
  return (
    <div className="layout-wrapper">
       <Navbar />
      <section id="intro" className="intro">
        <div className="content">
          <div className="intro_content">
            <h1>Hello!</h1>
            <h2>I'm Anna, a passionate frontend developer.</h2>
          </div>
        </div>
      </section>
      <section id="about" className="about">
        <div className="content">
          <h2>
            My journey began<br></br>7 years ago,
          </h2>
          <p>
            when I typed my very first line of code. That was in high school. I
            fell in love. I spent months on the Internet just reading and
            watching content about HTML and CSS. Once I build my first website
            from scratch, I knew that my journey as a coder has began.
          </p>
          <p>
            I earned the basics, followed my passions, and got hired at a tech
            company in Prague called{" "}
            <a href="https://www.topmonks.com/">TopMonks</a>. I began as a
            part-time frontend developer and evolved into a freelancer. At
            TopMonks, I worked, both within a team or individually, on a variety
            of <a href="#work">projects</a> using HTML, CSS/SCSS/SASS, and
            JavaScript. I worked on E-commerce but also a small bussiness
            websites. Apart from that, I also coded the company's website and
            optimized their already existing work.
          </p>
          <p>
            Currently, I am expanding my experience with React.js. I am also
            enrolled in a Web Development Bootcamp to improve my skills as a
            programmer.
          </p>
        </div>
      </section>
      <section id="work" className="work">
        <div className="content">
          <h2>My work</h2>
          <p>
            My goal, as a frontend developer, is to code responsive, fast, and
            user friendly websites and web applications. I work hard to deliver
            thoughtful and to a tee projects. Beyond that, I am excited to offer
            creative and elegant solutions to any challenge.
          </p>
          <h3>Selected projects I have worked on in the past.</h3>
          <ul>
            {studies.map(newStudy)}
          </ul>
        </div>
      </section>
      <section className="contact">
        <div className="content">
          <h2>Let's talk!</h2>
        </div>
      </section>
    </div>
  );
}

export default App;
