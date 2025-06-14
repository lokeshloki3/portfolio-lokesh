import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Sidecard from "../components/Sidecard";
import { techStack, EXPERIENCES, PROJECTS } from "../constants";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <main className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6 m-6 border-0 border-solid border-gray-200 box-border text-gray-900 items-start">
        <Sidecard />
        <div className="grid grid-cols-1 gap-4 lg:gap-6">
          {/* Work Experience Section */}
          <div className="group rounded-2xl bg-white px-6 pt-0 shadow">
            <h2 className="relative bg-white pb-2 pt-6 text-2xl font-semibold">
              Work Experience
            </h2>
            <div className="space-y-4 overflow-hidden pb-6 pt-4">
              <div className="space-y-4 group-hover:[animation-play-state:paused]">
                {EXPERIENCES.map((experience, index) => (
                  <div key={index} className={`flex flex-col gap-2 ${index !== EXPERIENCES.length - 1 ? "border-b-2 border-gray-300 dark:border-gray-700 pb-4 mb-4" : ""
                    }`}>
                    <div className="flex items-center gap-4 mb-3">
                      <p className="flex items-center mt-1 w-[25%] text-sm font-medium">
                        {experience.year}
                      </p>
                      <div className="w-[75%] flex items-center gap-3">
                        <div className="grid h-12 w-12 shrink-0 place-content-center rounded-lg">
                          <img
                            className="w-10 text-lg mix-blend-multiply rounded object-cover"
                            alt="logo_image"
                            src={experience.companyLogo}
                            title="image"
                          />
                        </div>
                        <div>
                          <h6 className="text-sm lg:text-base font-semibold">
                            {experience.companyName}
                          </h6>
                          <p className="text-sm">{experience.role}</p>
                        </div>
                      </div>
                    </div>
                    <ul className="ml-[5%] list-disc text-sm space-y-1">
                      {experience.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-2xl font-semibold">
              Technologies
            </h2>
            <div className="mt-6 grid grid-cols-4 gap-4 md:grid-cols-3">
              {techStack.map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="grid place-content-center rounded-lg p-3">
                    <img
                      className="h-8 object-cover"
                      alt={tech.name}
                      src={tech.imgSrc}
                      title={tech.name}
                    />
                  </div>
                  <p className="mt-1 text-xs md:text-sm font-medium">
                    {tech.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow mb-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="text-2xl font-semibold">
              Recent Projects
            </h2>
            <Link
              className="inline-flex text-purple-400 items-center justify-center gap-2 border-b text-center text-base transition"
              to="/projects"
            >
              <span>All Projects</span>
              <IoIosArrowRoundForward />
            </Link>
          </div>

          <div className="mt-6 space-y-6">
            {PROJECTS.slice(0, 4).map((project, index) => (
              <div
                key={index}
                className="pb-10 border-b-2 border-gray-300"
              >
                <a
                  href={project.githubPage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden rounded-lg p-4 md:p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="relative aspect-[6/4] overflow-hidden rounded-t-lg">
                    <img
                      className="h-full w-full rounded-t-lg object-cover object-top transition"
                      alt="image"
                      src={project.image}
                      title="image"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex flex-wrap gap-2 bg-gradient-to-t from-black/20 p-4">
                    <span className="rounded bg-white px-2 py-1 text-xs font-medium shadow-sm">
                      {project.title}
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>

        </div>
      </main>
    </>
  );
}

export default Home