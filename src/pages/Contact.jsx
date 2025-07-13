import React from "react";
import Sidecard from "../components/Sidecard";
import { C_ABOUT_TEXT, CONTACT, HERO_CONTENT } from "../constants";

const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] items-start m-6 gap-6">
      <Sidecard />
      <div className="flex flex-col gap-6 mb-6">
        <div className="rounded-2xl bg-white p-6 shadow lg:p-10">
          <div className="flex flex-col-reverse items-start gap-6 lg:flex-row lg:gap-10">
            <div>
              <h2 className="text-3xl font-semibold lg:text-[24px]">
                Hi, This is Lokesh Walia 👋
              </h2>

              <p className="mt-4 text-lg lg:mt-6 lg:text-lg text-gray-500">
                Passionate{" "}
                <span className="font-semibold text-gray-900">
                  Software Engineer
                </span>{" "}
                {" "}
                having{" "}
                <span className="font-semibold text-gray-900">
                  2 years
                </span>{" "}
                {HERO_CONTENT}
              </p>
              <p className="mt-4 text-lg lg:mt-6 lg:text-lg text-gray-500">
                {C_ABOUT_TEXT}
              </p>
              <p className="mt-4 text-lg lg:mt-6 lg:text-lg">
                📧 Email:{" "}
                <a href={`mailto:${CONTACT.email}`} className="text-blue-600 underline hover:text-blue-800">
                  {CONTACT.email}
                </a>
              </p>
              <p className="mt-4 text-lg lg:mt-6 lg:text-lg">
                📞 Phone:{" "}
                <a href={`tel:${CONTACT.phoneNo}`} className="text-blue-600 underline hover:text-blue-800">
                  {CONTACT.phoneNo}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact