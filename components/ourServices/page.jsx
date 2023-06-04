import React from "react";
import data from "./ourServicesData.json";
import Image from "next/image";
import Link from "next/link";

const ourServices = () => {
  return (
    <section className="">
      <section className=" text-gray-600 body-font">
        <div className="container px-3 py-12 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-3xl md:text-6xl font-bold title-font my-3 text-neutral flex justify-center items-center">
              <span className="md:ml-3 headingTag md:text-6xl">
                Our Services
              </span>
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh
              mi pug.
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 gap-9 justify-around">
            {data.ourServicesData.map((item, index) => {
              return (
                <>
                  <Link
                    className="p-4 md:w-[30%] flex flex-col text-center items-center bg-primary rounded-lg"
                    key={index}
                    href={item.route}
                  >
                    <div className="w-20 h-20 inline-flex items-center justify-center  text-indigo-500 mb-5 flex-shrink-0">
                      <Image
                        src={item.logo}
                        width={100}
                        height={100}
                        alt="Service Logo"
                      />
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                        {item.title}
                      </h2>
                      <p className="leading-relaxed text-base text-justify">
                        {item.desc}
                      </p>
                      <div className="mt-3 text-indigo-500 inline-flex items-center">
                        Learn More
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
          <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            See More
          </button>
        </div>
      </section>
    </section>
  );
};

export default ourServices;
