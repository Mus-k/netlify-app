import { motion } from "framer-motion";
const Skills = () => {
  return (
    <section
      id="skills"
      className=" relative md:h-[100%] md:pt-5 xl:pb-11  pt-4 my-0 w-4/5 mx-auto"
    >
      {/* header and image image section */}
      <div className="md:flex md:justify-between md:gap-6">
        <motion.div
          className="md:w-3/4 lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 1, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h6 className=" font-semibold  mb-3 skills-text">
            My <span className="text-red font-serif">Skills</span>
          </h6>
          <div className=" mt-1 md:mt-2 md:mb-44 xl:pb-12 2xl:mb-52 ">
            <p className="md:h-3.5 skill-info pt-2 md:pt-4 md:bg-slate-400 md:text-[25px]  md:rounded-r-md md:w-full">
              I'm a passionate Web developer, who started programming in 2020 as
              a Self-Taught Programmer, later joined some coding bootcamps.
              currently I build responsive website, and I put special effort
              into optimizing my code and providing the best user experience.
            </p>
          </div>
        </motion.div>
      </div>
      {/* skills */}
      <div className="md:flex md:justify-center md:pl-10 lg:pl-14 md:items-center md:my-20 2xl:mt-12 gap-18">
        {/* Experience */}
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 1, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative md:h-36 lg:text-3xl lg:h-[190px] lg:w-[350px] md:w-[300px] md:hover:bg-black md:rounded-xl  transition-all duration-500 md:bg-slate-400">
            <div className="z-10 md:flex md:justify-center items-center flex-col">
              <p className="pt-6 font-semibold  text-2xl text-red ">
                some technologies
              </p>
              <p className=" font-semibold flex flex-col text-xl md:flex pb-6 md:flex-col mt-3">
                <span className="mx-2">
                  Tailwind <span className="mx-2">Sass</span>
                </span>
                <span className="mx-2">
                  Bootsrap <span className="mx-2">Css</span>
                  <span className="mx-2">Html</span>
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative md:h-36 lg:text-3xl lg:h-[190px] lg:w-[350px] md:w-[300px] md:rounded-xl md:bg-slate-400  md:hover:bg-black transition-all duration-500">
            <div className="z-10 md:flex md:flex-col justify-center items-center">
              <p className=" pt-6 font-semibold  text-2xl text-red ">
                familiar with
              </p>
              <p className=" font-semibold pb-4 flex flex-col  md:flex md:flex-col text-xl my-3">
                <span className="mx-2">Javascript</span>
                <span className="mx-2">React.js (Next.js)</span>
                <span className="mx-2">TypeScript</span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Imaginative */}
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 1, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative md:pt-4 lg:text-3xl lg:h-[190px] lg:w-[350px] md:h-36 md:w-[300px] md:bg-slate-400  md:rounded-xl md:hover:bg-black  transition-all duration-500 ">
            <div className="z-10">
              <p className=" font-semibold text-2xl md:text-center  text-red lg:p-2">
                Backend
              </p>
              <h5 className=" font-semibold mx-2 md:text-center md:text-xl md:mt-0 mt-3 pb-6  ">
                <span>Node.j (express)</span>
                <p>(PostgreSQL, mongoDb, mysql)</p>
              </h5>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
