import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I’m Mohammad Rafay, Experienced Frontend Developer specializing in
        React.js, Next.js, with expertise in building scalable, responsive, and
        user-centric web applications. Proficient in modern JavaScript (ES6+),
        state management (Redux, Context API, Hooks), and integrating RESTful
        APIs. Skilled in UI/UX design, Agile methodologies (Scrum), and version
        control (Git). Passionate about leveraging cutting-edge technologies
        like Docker and UI libraries to deliver high-performance solutions. A
        creative problem-solver and innovative programmer with a proven track
        record of developing dynamic web applications and optimizing user
        experiences. Adept at collaborating in cross-functional teams, adapting
        to new challenges, and delivering projects on time. Committed to driving
        innovation and creating seamless, connected digital experiences that
        make a meaningful impact
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
