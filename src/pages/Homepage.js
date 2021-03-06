import React from "react";
import Typical from "react-typical";
import { AwesomeButtonProgress } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import caneral from "../assets/IMG_7464.jpeg";
const Homepage = () => {
  const doSomethingThenCall = () => {
    const mailto =
      "mailto:caneral.js@gmail.com?subject=CV Request &body=I'm requesting a CV.";
    window.location.href = mailto;
  };

  return (
    <div className="flex min-h-screen p-14 z-30">
      <div className="bg-gray-600 w-full">
        <div className="grid grid-rows-4 sm:grid-rows-4 md:grid-rows-3 lg:grid-rows-1 xl:grid-rows-1 lg:grid-cols-2  h-full">
          <div className="bg-portfolio flex  justify-center">
            <div className="my-4 md:mt-16 sm:mt-12 lg:my-72 w-3/4 ">
              <div className="flex items-center space-x-4">
                <span className="h-0.5 my-1 w-20 bg-red-300" />
                <p className="text-white lg:text-xl md:text-lg sm:text-sm font-medium text-sm">
                  Hello, I'm
                </p>
              </div>
              <p className="text-white md:text-5xl sm:text-3xl lg:text-7xl font-bold text-3xl">
                CANER AL
              </p>
              <p className="text-white md:text-3xl sm:text-xl lg:text-5xl font-bold">
                <Typical
                  loop={Infinity}
                  wrapper="b"
                  steps={[
                    "Information Systems Engineer",
                    2000,
                    "Full Stack Developer",
                    2000,
                    "DevOps Engineer",
                    2000,
                  ]}
                />
              </p>
              <div className="mt-4">
                <AwesomeButtonProgress
                  type="secondary"
                  size="medium"
                  action={(element, next) => {
                    setTimeout(() => {
                      next();
                      doSomethingThenCall();
                    }, 1000);
                  }}
                >
                   CV Please ????
                </AwesomeButtonProgress>
              </div>
            </div>
          </div>
          <div className="bg-green-500 relative md:row-span-3 sm:row-span-4 lg:row-span-1 xl:row-span-1 row-span-4">
            <img
              className="absolute h-full w-full object-cover"
              src={caneral}
              alt="caneral"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
