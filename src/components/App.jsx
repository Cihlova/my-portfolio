import React from "react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import MyJourney from "./MyJourney";
import MySkills from "./MySkills";
import MyWork from "./MyWork";
import ContactMe from "./ContactMe";

function App() {
  return (
    <div className="layout-wrapper">
      <Navbar />
      <Intro />
      <MyJourney />
      <MySkills />
      <MyWork/>
      <ContactMe />
  
      <section className="contact">
        <div className="content">
          <h2>Let's talk!</h2>
          <button className="button">YES</button>
        </div>
      </section>
    </div>
  );
}

export default App;
