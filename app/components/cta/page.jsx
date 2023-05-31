import React from "react";
import Image from "next/image";
const CTA = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        {/* CTA Hero Section Start */}
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h3
              className="text-3xl font-semibold first-letter 
            text-neutral "
            >
              Mark One Soft
            </h3>
            <div className="flex items-center justify-center">
              <div className=" w-[150px] h-[4px] mt-1	headingTagBottom "></div>
            </div>
            <h1 className="headingTag text-xl md:text-6xl	 font-bold title-font my-7 text-neutral">
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
            <button className="text-white bg-neutral border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg md:w-52 w-full">
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
        {/* CTA Hero Section End */}

        {/* CTA About Section Start */}
        <div className="container px-5 py-14 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h3
              className="text-3xl font-semibold first-letter 
            text-neutral"
            >
              About
            </h3>

            <h1 className=" headingTag text-xl md:text-6xl	 font-bold title-font my-7 text-neutral">
              Your Ultimate IT Service and Software Development Solution Team
            </h1>
            <section class="text-gray-600 body-font">
              <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                  <Image
                    width={500}
                    height={620}
                    class="object-cover object-center rounded-lg "
                    alt="hero"
                    src="/founder.jpeg"
                  />
                </div>
                <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                  <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                    About Us
                  </h1>
                  <p class="mb-8 leading-relaxed text-justify">
                    At Mark One Soft, we are passionate about driving digital
                    transformation for businesses. As a trusted IT consultancy
                    and software engineering firm, we specialize in delivering
                    innovative solutions tailored to your specific needs. With
                    our expertise and cutting-edge technologies, we help
                    businesses optimize operations, enhance online presence, and
                    ensure the security of their systems. Partner with us to
                    experience the difference as we propel your business forward
                    in the ever-evolving digital landscape.
                  </p>
                  <div class="flex justify-center">
                    <button class="inline-flex text-white bg-neutral border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Button
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        {/* CTA About Section End */}
      </section>
    </div>
  );
};

export default CTA;
