import React from "react";
const CTA = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h3
              className="text-3xl font-semibold first-letter 
            text-success "
            >
              Mark One Soft
            </h3>
            <div className="flex items-center justify-center">
              <div className=" w-[200px] h-[4px] mt-1	bg-gradient-to-r from-success to-green-300"></div>
            </div>
            <h1 className="text-xl md:text-6xl	 font-bold title-font my-7 text-neutral">
              Your Ultimate IT Service and Software Development Solution Team
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify">
              Welcome to Mark One Soft, your trusted partner for IT consultancy
              and software development solutions. Our goal is simple: to
              transform businesses through innovative technologies. With our
              expertise and cutting-edge approach, we deliver tailored solutions
              that optimize your operations, enhance your online presence, and
              ensure the security of your systems. Experience the Mark One Soft
              difference and unlock your business true potential in the digital
              age.
            </p>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 -z-10 justify-center items-end">
            {/* <div className=" flex-grow w-full">
              <label for="full-name" className="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className=" w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div> */}
            <div className="flex-grow w-full">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-neutral border-0 py-2 px-8 focus:outline-none hover:bg-success rounded text-lg md:w-52 w-full">
              Book a Call
            </button>
          </div>
          <div className="flex justify-center py-5 text-neutral flex-col md:flex-row text-center">
            <div className="flex flex-row justify-center ">
              <div> 4.7/5 - </div>
              <div className="rating rating-sm items-center mr-2 ">
                <input type="radio" name="rating-9" className="rating-hidden" />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
              </div>
            </div>
            80+ Business 120+ happy clients
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTA;
