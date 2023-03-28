import React from "react";

function MySkills() {
  return (
    <section id="my-skills" className="my-skills">
      <div class="mdc-layout-grid">
        <div className="content mdc-layout-grid__inner">
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-12">
            <h2>My skills and achievements</h2>
          </div>
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
            <p>
              I think about myself as a for-ever learner! I find enpowerement
              and excitement in learning about new technologies and improving my
              skill set.
            </p>
            <p>
              Thus, along with my skills, I also present here my certificates as
              the represenation of my hard work and deep passion for programming
              and design.
            </p>
          </div>
          <div className="mdc-layout-grid__cell mdc-layout-grid__cell--span-6">
            <h3>Here is a list of technologies I have been working with</h3>
            <h4>Frontend Development</h4>
            <table>
              <tbody>
                <tr>
                  <td>HTML</td>
                  <td>React</td>
                </tr>
                <tr>
                  <td>CSS/SASS/SCSS</td>
                  <td>Node.js</td>
                </tr>
                <tr>
                  <td>JavaScript (ES6+)</td>
                  <td>GitHub</td>
                </tr>
              </tbody>
            </table>
            <h4>Building in Webflow</h4>
            <h4>UX and UI Design</h4>
            <table>
              <tbody>
                <tr>
                  <td>Figma</td>
                  <td>Sketch</td>
                </tr>
              </tbody>
            </table>
            <h4>Responsive and Accessible Design</h4>
            <table>
              <tbody>
                <tr>
                  <td>Material Design</td>
                  <td>Bootstrap</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MySkills;
