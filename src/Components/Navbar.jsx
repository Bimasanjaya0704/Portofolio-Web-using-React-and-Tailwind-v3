import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const NavBar = () => {
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!navbar) {
        const isTop = window.scrollY < 0;
        if (!isTop) {
          setNavbar(true);
        } else {
          setNavbar(false);
        }
      }
    };

    if (!window.matchMedia("(max-width: 768px)").matches) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbar]);

  return (
    <nav
      className={`w-full bg-cpdark shadow-md ${
        navbar
          ? "bg-opacity-80 fixed top-0 left-0 right-0 z-50"
          : "bg-opacity-80 fixed top-0 z-50"
      } `}
    >
      <div className="container">
        <div className="justify-between px-4 lg:max-w-7xl lg:items-center lg:flex lg:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 lg:block">
              <a href="https://bimasanjaya.me/" className="no-underline">
                <h2 className="text-xl font-bold text-cpyellow md:text-2xl lg:text-3xl ">
                  Bima Sanjaya
                </h2>
              </a>
              <div className="lg:hidden">
                <button
                  className={`p-2 text-slate-300 rounded-md outline-none focus:border-gray-400 focus:border md:hidden`}
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center p-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center md:justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 lg:text-base">
                <li className="text-slate-300 hover:text-cpdark  md:px-4 md:py-2 hover:px-4 hover:py-2 hover:bg-cpyellow hover:rounded-md cursor-pointer lg:text-md lg:font-semibold">
                  <Link to="home" smooth={true} duration={500}>
                    Home
                  </Link>
                </li>
                <li className="text-slate-300 hover:text-cpdark  md:px-4 md:py-2 hover:px-4 hover:py-2 hover:bg-cpyellow hover:rounded-md cursor-pointer lg:text-md lg:font-semibold">
                  <Link to="experience" smooth={true} duration={500}>
                    Experience
                  </Link>
                </li>
                <li className="text-slate-300 hover:text-cpdark  md:px-4 md:py-2 hover:px-4 hover:py-2 hover:bg-cpyellow hover:rounded-md cursor-pointer lg:text-md lg:font-semibold">
                  <Link to="skills" smooth={true} duration={500}>
                    Skills
                  </Link>
                </li>
                <li className="text-slate-300 hover:text-cpdark  md:px-4 md:py-2 hover:px-4 hover:py-2 hover:bg-cpyellow hover:rounded-md cursor-pointer lg:text-md lg:font-semibold">
                  <Link to="portofolio" smooth={true} duration={500}>
                    Project
                  </Link>
                </li>
                <li className="text-slate-300 hover:text-cpdark  md:px-4 md:py-2 hover:px-4 hover:py-2 hover:bg-cpyellow hover:rounded-md cursor-pointer lg:text-md lg:font-semibold">
                  <Link to="contact" smooth={true} duration={500}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
