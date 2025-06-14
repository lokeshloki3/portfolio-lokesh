import React, { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { PROJECTS } from "../constants";
import Sidecard from "../components/Sidecard";

const PROJECTS_PER_PAGE = 4;

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(PROJECTS.length / PROJECTS_PER_PAGE);

  const paginatedProjects = PROJECTS.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-start m-6 gap-6">
      <Sidecard />
      <div className="rounded-2xl bg-white p-6 shadow lg:p-10 mb-6">
        <div>
          <h2 className="text-2xl font-semibold leading-tight lg:text-[24px] lg:leading-tight">
            Projects
          </h2>
        </div>

        <div className="mt-8 lg:mt-8 space-y-6">
          {paginatedProjects.map((project, idx) => (
            <div key={idx} className="pb-4 border-b-2 border-gray-300">
              <div className="group relative overflow-hidden rounded-lg p-4 md:p-6 lg:p-6">
                <div className="relative overflow-hidden rounded-2xl">
                  <a
                    href={project.githubPage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="w-full rounded object-cover object-top transition hover:opacity-90"
                      alt={project.title}
                      src={project.image}
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap items-start justify-between py-4 md:p-6">
                <div>
                  <h3 className="text-lg font-medium md:text-xl lg:text-2xl pb-4">
                    <div className="flex justify-between">
                      <a
                        className="border-b border-transparent transition"
                        href={project.githubPage}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                      <a
                        className="inline-flex items-center justify-center gap-1 rounded bg-white px-3 py-2 text-center text-sm leading-none transition hover:text-purple-400"
                        href={project.githubPage}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>Visit Site</span>
                        <FiExternalLink className="h-4 w-4 shrink-0" />
                      </a>
                    </div>
                  </h3>
                  <p className="text-sm lg:text-base mb-4">{project.description}</p>
                  <p className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        className="rounded bg-stone-600 p-2 text-center text-sm font-medium text-stone-300"
                        key={index}
                      >
                        {tech}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center mt-8">
            <div>
              <ul className="flex justify-center items-center gap-1 lg:gap-2 list-none m-0 p-0">
                <li>
                  <button
                    className={`lg:py-2 lg:px-3 rounded-md text-3xl ${currentPage === 1
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                      }`}
                    onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    ◀️
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => (
                  <li key={i}>
                    <button
                      className={`border px-3 py-2 rounded-md cursor-pointer ${currentPage === i + 1
                        ? "bg-[#877EFF] text-white"
                        : ""
                        }`}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    className={`lg:py-2 lg:px-3 rounded-md text-3xl ${currentPage === totalPages
                      ? "text-gray-400 cursor-not-allowed"
                      : "cursor-pointer"
                      }`}
                    onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    ▶️
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects