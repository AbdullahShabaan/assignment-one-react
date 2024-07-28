import LineIcon from "../../Icons/LineIcon";
import Title from "../../Title/Title";
import "./About.css";
const About = () => {
  return (
    <>
      <Title title="About" />
      <div className="about text-center text-white d-flex flex-wrap align-items-center justify-content-center align-content-center">
        <LineIcon title="about component" />
        <div className="text d-flex container text-start px-5">
          <p className="px-4">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="px-4">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
