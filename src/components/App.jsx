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
            when I&nbsp;typed my very first line of code. That was in high
            school. I&nbsp;fell in love. I&nbsp;spent months on the Internet
            just reading and watching content about HTML and CSS languages. And
            while building my first website from scratch, I&nbsp;knew that my
            journey as a coder has&nbsp;began.
          </p>
          <p>
            I&nbsp;earned the basics, followed my passions, and got hired at a
            tech company in Prague called{" "}
            <a href="https://www.topmonks.com/">TopMonks</a>. I&nbsp;began as a
            part-time frontend developer and evolved into a freelancer. At
            TopMonks, I&nbsp;worked, both within a team and individually, on a
            variety of <a href="#work">projects</a> using HTML, CSS/SCSS/SASS,
            and JavaScript. I&nbsp;worked on E-commerce but also small business
            websites. Apart from that, I&nbsp;also coded TopMonks' project
            websites and optimized their already existing&nbsp;work.
          </p>
          <p>
            Currently, I&nbsp;am expanding my experience in Node.js and
            React.js. Along with that, in the last year I&nbsp;have been
            creating beautiful and dynamic websites in Webflow.
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
          <ul>{studies.map(newStudy)}</ul>
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
