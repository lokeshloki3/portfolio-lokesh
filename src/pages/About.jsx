import React from "react";
import Sidecard from "../components/Sidecard";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-6 m-6 items-start">
      <Sidecard />
      <div className="rounded-2xl bg-white p-6 lg:p-10 shadow mb-6">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-6 lg:gap-10">
          <div>
            <h2 className="text-2xl lg:text-3xl font-medium lg:font-semibold">
              Hi, I am Lokesh Walia 👋
            </h2>
            <p className="mt-4 lg:mt-6 text-lg text-gray-500">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>

        <div className="mt-10 lg:mt-14">
          <h3 className="text-2xl lg:text-3xl font-medium text-gray-900 leading-9 mb-5">
            Education History
          </h3>

          <div className="md:col-span-2 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-gray-500">
            <div>
              <h5 className="font-medium leading-tight lg:text-lg">
                Bachelor of Engineering (Computer Engineering)
              </h5>
              <p>2012 - 2016</p>
            </div>
          </div>
          <div className="flex justify-end md:justify-end text-gray-500">
            <div className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded bg-white">
              <span>NSIT, Delhi</span>
            </div>
          </div>

          <div className="md:col-span-2 flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-gray-500">
            <div>
              <h5 className="font-medium leading-tight lg:text-lg">
                CBSE X-XII
              </h5>
              <p>2008 - 2011</p>
            </div>
          </div>
          <div className="flex justify-end md:justify-end text-gray-500">
            <div className="inline-flex items-center gap-2 px-3 py-2 text-sm rounded bg-white">
              <span>JNV Mungeshpur, Delhi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About