import useMediaQuery from "../mediaSize/useMedia";
import { motion } from "framer-motion";
import SocialMediaIcons from "../components/SocialMediaIcons";
import AnchorLink from "react-anchor-link-smooth-scroll";
import profile from "../assets/images/profile-image.png";
import { useEffect, useState } from "react";
const Landing = () => {
  const [show, setShow] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 769px)");

  const whiteBorder = show ? "aroundInitial" : "around";
  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 2000);
  }, [show]);

  return (
    <section
      id="home"
      className="md:w-4/5 pb-11 md:pb-1 relative md:mx-auto xl:h-[100vh] md:h-[100%]  md:flex md:justify-between md:items-center  gap-16"
    >
      {/* images section */}
      <div className="md:order-2 md:pl-16  flex justify-center itimes-center basis-3/5 z-10">
        {isAboveMediumScreens ? (
          <div className="md:flex justify-between md:pt-28 center items-center relative ">
            {/* <div className=" landing-bg"></div> */}
            <img
              alt="profile"
              className={` ${whiteBorder} hover:filter hover:saturate-200  transition   md:mb-32 duration-500 z-10 w-full
max-w-[300px] md:max-w-[600px] xl:w-[400px]`}
              src={profile}
            />
          </div>
        ) : (
          <div className="flex justify-center flex-row  items-center relative ">
            {/* <div className=" landing-y max-w-[500px]"></div> */}
            <img
              alt="profile"
              className={` ${whiteBorder} hover:filter around hover:saturate-200 transition mb-1 duration-500 z-10 w-full
max-w-[300px] md:max-w-[400px] h-[300px]`}
              src={profile}
            />
          </div>
        )}
      </div>

      {/* Main section */}
      <div className="z-30 basis-2/5 mt-12  md:mt-0">
        {/* heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 1, x: 0 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h1 className="md:text-4xl text-2xl font-serif z-10 text-center md:text-start xl:text-4xl">
            <p className="text-[#ffd700] text-2xl md:mb-5 md:text-7xl xl:text-8xl">Hi,</p>
            I'm Musa {""}
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20
           "
            >
              Kamara
            </span>
          </h1>
          <h2 className="mt-3 md:mb-7 mb:4 md:text-5xl text-center md:text-start">
            <span className="text-pink-600">FullStack</span> developer
          </h2>
        </motion.div>
        {/* call to actions */}
        <motion.div
          className="flex md:mt-5 mt-3 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 1, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="btn-bg text-[#ffff] rounded-sm py-2 px-7 font-semibold
      md:hover:bg-black md:hover:text-[#ffd700] transition duration-500"
            href="#contact"
          >
            Contact me
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-2 md:mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 1, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
