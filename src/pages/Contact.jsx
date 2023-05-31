import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();

    if (!isValid) {
      e.preventDefault();
    }
    e.target.reset();
  };

  return (
    <section id="contact" className="relative  md:h-[100%] md:mb-28">
      {/* Headings */}
      <motion.div
        className="flex justify-center w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opcaity: 0, x: -50 },
          visible: { opcaity: 1, x: 0 },
        }}
      >
        <p className="font-serif font-semibold  skills-text lg:mb-10">
          <span className="text-yellow p-8">
            {" "}
            Contact <span className="text-blue">Me</span>
          </span>
        </p>
        {/* <div className="flex md:justify-end my-5">
     
        </div> */}
      </motion.div>
      {/* FORM & IMAGE */}
      <div className="md:flex md:justify-between gap-8 mt-5 px-10">
        <motion.div
          className="md:basis-1/2 basis-1/4 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opcaity: 0, y: 50 },
            visible: { opcaity: 1, y: 0 },
          }}
        >
          <div className="adress mr-5 md:mb-16  2xl:w-[350px] 4xl:h-[450px] 2xl:h-[390px]">
            <div className="flex flex-col flex-start md:text-2xl items-start p-8">
              <p>
                {" "}
                <i className="fa-solid fa-location-dot text-yellow lg:text-3xl lg:mt-5 "></i>{" "}
                address{" "}
              </p>
              <p>Istanbul/Turkiye</p>
              <p>
                {" "}
                <i className="fa-solid fa-envelope text-yellow lg:text-3xl lg:mt-5"></i>{" "}
                email
              </p>
              <p>kamaramusa56@gmail.com</p>
              <p>
                <i className="fa-solid fa-square-phone-flip text-yellow lg:text-3xl lg:mt-5 "></i>{" "}
                Telephone{" "}
              </p>
              <p>+905426769301</p>
              <div className="btn-bg mt-6 p-2 4xl:p-7 hover:text-purple-400 hover:bg-teal-900 cursor-pointer transition-all duration-500">
                <p className="hover:bg-teal-900 cursor-pointer">let's talk</p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="basis-1/2 mt-10 mb-24 md:mb-0 md:mt-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opcaity: 0, y: 50 },
            visible: { opcaity: 1, y: 0 },
          }}
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/kamaramusa56@gmail.com"
            method="POST"
          >
            <input
              className="w-full bg-[#115173] lg:text-xl 2xl:text-1xl 4xl:text-2xl lg:mt-10 font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="Name"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "max Length is 100 char"}
              </p>
            )}

            <input
              className="w-full bg-[#115173] 2xl:text-1xl 4xl:text-3xl font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9/-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className="w-full lg:h-[200px] 4xl:h-[250px] bg-[#115173] font-semibold placeholder-opaque-black p-3 mt-5 resize-none"
              type="text"
              placeholder="Message"
              rows="6"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}

            <button
              type="submit"
              className="p-3  bg-[#115173]   rounded-md font-semibold text-white mt-5 hover:text-yellow
            transition duration-50"
            >
              SEND ME A MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
