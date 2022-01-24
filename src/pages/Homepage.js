import React from "react";
import { VFXProvider, VFXSpan } from "react-vfx";

const Homepage = () => {
  return (
    <div className="flex min-h-screen p-14">
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
                <VFXProvider>
                  <VFXSpan shader="rgbShift">CANER AL</VFXSpan>
                </VFXProvider>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
