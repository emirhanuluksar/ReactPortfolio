import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>C++</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>C#</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>.NET Core</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MicroServices</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__devops">
          <h3>DevOps</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Docker</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__other">
          <h3>Other</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
