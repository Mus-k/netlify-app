import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-32 bg-image pt-3 relative">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center">
          <p className="font-playfair 4xl:text-4xl font-semibold text-2xl text-yellow">
            MUSA KAMARA
          </p>
          <p className="font-playfair text-md 4xl:text-4xl text-yellow">
            ©2023 Kamara All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
