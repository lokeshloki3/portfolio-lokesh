import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";
import ProfileImage from "../assets/lokeshProfile-removebg-preview.jpg"

const Sidecard = () => {
  return (
    <div className="right-0 top-[100px] lg:sticky rounded-2xl bg-white p-6 shadow">
      <div className="aspect-6/4 overflow-hidden rounded-lg text-center">
        <img
          className="inline-block h-full w-full scale-110 object-contain object-bottom"
          alt="profile_image"
          src={ProfileImage}
          title="image"
        />
      </div>
      <div className="mt-6">
        <h1 className="text-2xl font-semibold">
          Lokesh Walia 👋
        </h1>
        <p className="mt-2 text-gray-500">
          A Passionate{" "}
          <span className="font-semibold text-gray-900">
            Frontend Developer
          </span>{" "}
          {" "}
          having{" "}
          <span className="font-semibold text-gray-900">
            2 years
          </span>{" "}
          of hands-on experience in building web applications using technologies like React, JavaScript, HTML, CSS, and Tailwind. Over the years, I have honed my skills in creating responsive, user-friendly interfaces and optimizing performance. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.
        </p>

        <div className="mt-2">
          <div className="md:col-span-2 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-gray-500">
            <div>
              <h5 className="font-medium leading-tight lg:text-lg">
                Bachelor of Engineering (Computer Engineering)
              </h5>
              <div className="flex justify-between">
                <p>2012 - 2016</p>
                <p>NSIT, Delhi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <a
            href="tel:+919311354886"
            className="shadow cursor-pointer inline-flex items-center gap-x-2 rounded-lg border border-transparent px-6 py-4 font-medium text-white bg-[#9D95FF] focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50"
          >
            <IoIosCall className="text-lg" />
            <span className="border-0 border-solid border-gray-200 box-border text-lg">
              Call
            </span>
          </a>
          <a
            id="wa-btn"
            className="shadow cursor-pointer inline-flex items-center gap-x-2 rounded-lg border px-6 py-4 font-medium transition focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50"
            href="https://api.whatsapp.com/send?phone=919311354886&text=Hello,%20I%20want%20to%20send%20you%20a%20message."
            target="_blank"
          >
            <FaWhatsapp className="text-lg" />
          </a>

          <a
            href="mailto:lokesh1992p@gmail.com"
            className="shadow inline-flex items-center gap-x-2 rounded-lg border bg-transparent px-6 py-4 font-medium transition [--trigger:focus] focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50"
          >
            <MdOutlineEmail />
            <span>Email</span>
          </a>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <a
            className="shadow flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50"
            href="https://github.com/lokeshloki3"
            target="_blank"
            title="github"
          >
            <FaGithub className="text-xl" />
          </a>

          <a
            className="shadow flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50"
            href="https://www.linkedin.com/in/lokesh021loki/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            className="shadow flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-transparent text-center text-slate-600 transition focus:outline-none focus:ring disabled:pointer-events-none disabled:opacity-50"
            href="https://leetcode.com/u/lokesh11/"
            target="_blank"
            rel="noopener noreferrer"
            title="Leetcode"
          >
            <SiLeetcode className="text-xl" />
          </a>

          <div className="block lg:hidden m-auto">
            <a
              href="https://lokeshloki3.github.io/resume/Lokesh_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full justify-center rounded-lg bg-gray-900 px-5 py-3 text-lg font-semibold text-white transition"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidecard