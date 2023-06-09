import React from "react";
import Image from "next/image";
import Link from "next/link";
const homeAbout = ({title,header,desc,button}) => {
  return (
    <div>
      {/* Home About Section Start */}
      <section className=" px-5 py-7 mx-auto">
        <section className="flex flex-col text-center w-full mb-0">
          <h3
            className="text-3xl font-semibold first-letter 
            text-neutral"
          >
            {title}
          </h3>

          <h1 className="text-3xl md:text-6xl font-bold title-font my-3 text-neutral flex justify-center items-center">
            <Image
              width={100}
              height={120}
              className=""
              alt="hero"
              src="/logo-gradient.svg"
            />
            <span className="md:ml-3 headingTag md:text-6xl">
              Mark One Soft
            </span>
          </h1>
          <section className="text-gray-600 body-font">
            <section className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">
              <section className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-5 md:mb-0">
                <Image
                  width={500}
                  height={620}
                  className="object-cover object-center rounded-lg "
                  alt="founder image"
                  src="/founder.jpeg"
                />
              </section>
              <section className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                  {header}
                </h1>
                <p className="mb-8 leading-relaxed text-justify">
                 {desc}
                </p>
                <section className="flex justify-center">
                  <Link href="/About">
                    <button className="inline-flex text-white bg-neutral border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      {button}
                    </button>
                  </Link>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
      {/* Home About Section End */}
    </div>
  );
};

export default homeAbout;
