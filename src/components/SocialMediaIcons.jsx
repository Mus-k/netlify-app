const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-4 gap-7">
      <a
        className="hover:opacity-50 transition duration-500 md:text-2xl text-blue"
        href="https://www.linkedin.com/in/musa-kamara-4a73061a3/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin"></i>
      </a>
      <a
        className="hover:opacity-50 transition duration-500
        md:text-2xl text-black"
        href="https://github.com/Mus-k"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        className="hover:opacity-50 transition duration-500
        md:text-2xl text-red"
        href="https://www.youtube.com/channel/UCCIbCJls83uVUxpXNTRtWUw"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-youtube"></i>
      </a>
      <a
        className="hover:opacity-50 transition duration-500
        md:text-2xl text-red"
        href="https://www.instagram.com/iam_musah/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
