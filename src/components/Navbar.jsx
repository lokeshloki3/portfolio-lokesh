import React, { useState } from "react";
import { FaEnvelope, FaSuitcase } from "react-icons/fa";
import { BiHomeSmile } from "react-icons/bi";
import { IoIosContact } from "react-icons/io";
import { BsPersonWorkspace } from "react-icons/bs";
import { IoMdMenu } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/LWLogo-removebg-preview.png";
import Mobile from "./Mobile";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = ["Home", "About", "Projects", "Contact"];
  const icons = [
    <BiHomeSmile className="h-5 w-5 text-[#8991A7]" />,
    <IoIosContact className="h-5 w-5 text-[#8991A7]" />,
    <BsPersonWorkspace className="h-5 w-5 text-[#8991A7]" />,
    // <FaSuitcase className="h-5 w-5 text-[#8991A7]" />,
    <FaEnvelope className="h-5 w-5 text-[#8991A7]" />,
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-0 border-solid border-gray-200 m-6">
        <div className="flex items-center justify-between rounded-2xl bg-white p-3 shadow">
          <Link to="/portfolio-lokesh" className="inline-flex items-center gap-3 text-2xl font-semibold">
            <img
              className="w-[100px] sm:w-[120px] md:w-[150px]"
              alt="Logo"
              src={Logo}
            />
          </Link>

          <nav>
            <ul className="hidden gap-6 flex-1 flex-wrap items-center justify-center lg:flex">
              {items.map(
                (text, index) => {
                  const path = text === "Home" ? "/portfolio-lokesh" : `/${text.toLowerCase()}`;
                  {/* const isActive = currentPath === path; */ }
                  const normalizePath = (path) => path.endsWith('/') ? path.slice(0, -1) : path;
                  const isActive = normalizePath(currentPath) === normalizePath(path);

                  return (
                    <li key={index} className="group/menu-item border-0 border-solid border-gray-200">
                      <Link
                        to={path}
                        className={`group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-center text-base font-medium transition cursor-pointer 
                ${isActive ? "bg-gray-200 text-black" : "hover:bg-gray-200"}`}
                      >
                        {icons[index]}
                        <span className="text-xl text-gray-700">{text}</span>
                      </Link>
                    </li>
                  );
                }
              )}
            </ul>
          </nav>

          <div className="flex justify-center items-center gap-6">
            <a
              className="hidden items-center gap-2 rounded-lg bg-gray-900 px-6 py-4 text-center text-base font-semibold leading-tight text-white transition duration-150 ease-out cursor-pointer lg:block"
              href="https://lokeshloki3.github.io/resume/Lokesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>

            <IoMdMenu
              className="text-3xl text-gray-700 cursor-pointer lg:hidden block"
              onClick={() => setIsMenuOpen(true)}
            />
          </div>
        </div>
      </header>

      {isMenuOpen && <Mobile onClose={() => setIsMenuOpen(false)} />}
    </>
  );
}

export default Navbar