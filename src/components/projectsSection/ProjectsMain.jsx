import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import Imagerealstate from "../../assets/project1.png";
import Imagevg from "../../assets/project2.png";
import Imagefood from "../../assets/project3.png";

const projects = [
  {
    name: "Real state",
    year: "Mar2023",
    align: "right",
    image: Imagerealstate,
    link: "#",
  },
  {
    name: "Vgreen website",
    year: "July2023",
    align: "left",
    image: Imagevg,
    link: "#",
  },
  {
    name: "Restaurant Order App",
    year: "Jan 2024",
    align: "right",
    image: Imagefood,
    link: "#",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
