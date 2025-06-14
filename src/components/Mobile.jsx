import React from "react";
import { FaEnvelope } from "react-icons/fa";
import { BiHomeSmile } from "react-icons/bi";
import { IoIosContact, IoMdClose } from "react-icons/io";
import { BsPersonWorkspace } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/LWLogo-removebg-preview.png";

const Mobile = ({ onClose }) => {
  const menuItems = [
    { text: "Home", icon: <BiHomeSmile className="h-6 w-6 text-[#8991A7]" />, link: "/home" },
    { text: "About", icon: <IoIosContact className="h-6 w-6 text-[#8991A7]" />, link: "/about" },
    { text: "Projects", icon: <BsPersonWorkspace className="h-6 w-6 text-[#8991A7]" />, link: "/projects" },
    { text: "Contact", icon: <FaEnvelope className="h-6 w-6 text-[#8991A7]" />, link: "/contact" },
  ];

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      className="fixed top-0 left-0 z-50 h-full w-full overflow-y-auto bg-white text-gray-900 shadow-md transition-transform duration-300 ease-out transform"
    >
      <div className="flex flex-col h-full justify-between gap-5 p-5 relative">

        <button
          className="absolute top-4 right-4 text-2xl text-gray-600"
          onClick={onClose}
        >
          <IoMdClose />
        </button>

        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-2xl font-semibold"
          >
            <img
              className="h-auto w-[150px] max-w-full"
              alt="Logo"
              src={Logo}
              onClick={onClose}
            />
          </Link>
        </div>

        <ul className="mt-4 flex flex-1 flex-col gap-2">
          {menuItems.map((item, index) => {
            const path = item.text === "Home" ? "/" : `/${item.text.toLowerCase()}`;
            const isActive = currentPath === path;

            return (
              <li key={index}>
                <Link
                  to={path}
                  onClick={onClose}
                  className={`group inline-flex w-full items-center gap-2 rounded-lg px-3 py-2 text-base font-medium transition-all ${isActive ? "bg-gray-200 text-black" : "hover:bg-gray-200"}`}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        <div>
          <a
            href="https://lokeshloki3.github.io/resume/Lokesh_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full justify-center rounded-lg bg-gray-900 px-6 py-4 text-lg font-semibold text-white transition"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile