import React from "react";
import images from "../../constants/image"; // make sure your linkedinIcon, githubIcon, emailIcon are in this file

const socials = [
  {
    logo: images.linkedinIcon,
    alt: "Linkedin Icon",
    link: "https://www.linkedin.com/in/anguraj2004/",
  },
  {
    logo: images.githubIcon,
    alt: "Github Icon",
    link: "https://github.com/anguraj2004",
  },
  {
    logo: images.emailIcon,
    alt: "Email Icon",
    link: "mailto:anguraj636927@gmail.com",
  },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-white py-16 dark:bg-primary">
      <div className="text-center flex flex-col items-center gap-4">
        <p className="text-primary font-normal text-base dark:text-white">
          ©  Anguraj {currentYear}
        </p>
        <p className="text-primary font-semibold text-base dark:text-white">
          All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex flex-row justify-center gap-6 mt-4">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <img
                src={social.logo}
                alt={social.alt}
                className="h-8 w-8 object-contain dark:invert"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
