import { Link } from "react-scroll";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex flex-col lg:flex-row gap-6 text-white font-body absolute lg:static top-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 lg:translate-x-0 text-center text-xl lg:text-md bg-cyan/30 backdrop-blur-lg lg:bg-black w-[min(92vw,22rem)] lg:w-auto py-4 px-4 rounded-2xl lg:rounded-none">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-100} 
              to={link.section} 
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
