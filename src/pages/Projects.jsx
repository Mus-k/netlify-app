import { motion } from "framer-motion";
import data from "../components/DataProject";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-4/5  lg:h-[100vh]   mx-auto pb-8 md:pb-16 lg:pb-0 2xl:mt-14 md:h-[100%]"
    >
      {/* Headings */}
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 1, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-serif font-semibold md:mt-2 skills-text mt-10 mb-7">
            <span className="text-red">PRO</span>JECTS
          </p>
        </div>
      </motion.div>

      {/* Projects */}
      <div className="md:flex md:flex-wrap md:gap-7 justify-center items-center">
        {data.map((project) => (
          <div
            key={project.id}
            className="relative flex justify-center md:max-w-4/5 flex-wrap"
          >
            <div className="absolute overlap  md:h-[300px] md:w-[400px] opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center  text-purple-400">
              <h3 className="text-2xl font-serif">{project.title}</h3>
              <p className="m-1 p-3 w-full  font-sans">{project.desc}</p>
              <div className=" mt-3 text-center">
                <a
                  href={project.page}
                  className="bg-[#022c43]  p-2 font-sans rounded-md text-red hover:text-white hover:scale-110 transition-all duration-500"
                >
                  see project
                </a>
              </div>
            </div>
            <img
              src={project.img}
              alt="projects"
              className="w-[400px] md:h-[300px] sm:max-md-w-[300px] h-[300px] object-cover object-center p-1 "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
