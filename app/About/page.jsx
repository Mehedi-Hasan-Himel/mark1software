import React from "react";
import HomeAbout from "../../components/homeAbout/homeAbout";
import Image from "next/image";
const About = () => {
  return (
    <>
      <section className="">
        <HomeAbout
          title="About"
          header="About Us"
          desc="Our goal is to deliver high-quality software that meets the highest standards of performance, reliability, and security, and help our clients achieve success. At Mark One Soft, we are passionate about driving digital
                  transformation for businesses. As a trusted IT consultancy and
                  software engineering firm, we specialize in delivering
                  innovative solutions tailored to your specific needs. With our
                  expertise and cutting-edge technologies, we help businesses
                  optimize operations, enhance online presence, and ensure the
                  security of their systems. Partner with us to experience the
                  difference as we propel your business forward in the
                  ever-evolving digital landscape."
          button="Learn More"
        />
        {/* Who we are and mission start*/}
        <section>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto flex flex-wrap">
              <div class="flex flex-wrap -m-4">
                <div class="p-4 lg:w-1/2 md:w-full">
                  <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                    <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-8 h-8"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div class="flex-grow ">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        Who Are We
                      </h2>
                      <p class="leading-relaxed text-base">
                        mark1soft is an Software & IT firm specializing in web,
                        mobile, and desktop software development, IT
                        consultancy, networking, security, and access control
                        solutions, digital marketing, and software quality
                        assurance services. Our experienced team offers
                        customized solutions to meet our clients’ unique needs
                        and objectives. We are committed to using the latest
                        technologies and industry best practices to deliver
                        exceptional services and solutions.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="p-4 lg:w-1/2 md:w-full">
                  <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col h-full">
                    <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-10 h-10"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div class="flex-grow ">
                      <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                        Our Mission
                      </h2>
                      <p class="leading-relaxed text-base">
                        Our mission is to provide innovative and high-quality
                        software and IT solutions that empower our clients to
                        achieve their business objectives. We aim to deliver
                        customized and comprehensive solutions that help our
                        clients stay ahead of the competition in a rapidly
                        changing digital landscape. Our focus on excellence,
                        innovation, and customer satisfaction guides our every
                        action and decision.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* Who we are and mission end*/}

        {/* Who Choose Start */}
        <section>
          <h1 className="font-bold text-center text-xl md:ml-3 headingTag md:text-6xl">
            Why Choose MARK 1 Soft ?
          </h1>
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-12 mx-auto flex flex-wrap">
              <div class="flex flex-wrap w-full justify-evenly">
                <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                  <div class="flex relative pb-12">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                        STEP 1
                      </h2>
                      <p class="leading-relaxed">
                        MARK 1 Soft excels in creating Best Quality Designs that
                        seamlessly blend aesthetics and functionality, boosting
                        user engagement and search engine visibility.
                      </p>
                    </div>
                  </div>
                  <div class="flex relative pb-12">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                        STEP 2
                      </h2>
                      <p class="leading-relaxed">
                        Our 24 x 7 Live Support ensures uninterrupted
                        assistance, enabling swift issue resolution and
                        enhancing customer satisfaction, resulting in improved
                        SEO performance.
                      </p>
                    </div>
                  </div>
                  <div class="flex relative pb-12">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="5" r="3"></circle>
                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                      </svg>
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                        STEP 3
                      </h2>
                      <p class="leading-relaxed">
                        With Unlimited Revisions, we guarantee client delight by
                        providing flexibility to refine projects until they meet
                        the highest standards, leading to better search engine
                        rankings.
                      </p>
                    </div>
                  </div>
                  <div class="flex relative pb-12">
                    <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                      <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                    </div>
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                        STEP 4
                      </h2>
                      <p class="leading-relaxed">
                        {" "}
                        At MARK 1 Soft, we prioritize customer success even
                        after project completion, offering dedicated After-Sale
                        Support that contributes to positive online reputation
                        and improved SEO rankings.
                      </p>
                    </div>
                  </div>
                  <div class="flex relative">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                        <path d="M22 4L12 14.01l-3-3"></path>
                      </svg>
                    </div>
                    <div class="flex-grow pl-4">
                      <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                        FINISH
                      </h2>
                      <p class="leading-relaxed">
                        With a focus on Super Fast Delivery and unwavering
                        commitment to Client Satisfaction, MARK 1 Soft delivers
                        SEO-friendly solutions that propel businesses forward in
                        the digital landscape.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="lg:w-2/5 md:w-[50%] md:pr-10 md:py-6">
                  <Image
                    width={500}
                    height={500}
                    class="lg:w-full md:w-full object-cover object-center rounded-lg md:mt-0 mt-12"
                    src="/coFounder.jpeg"
                    alt="Co-Founder Image"
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
        {/* Who Choose End */}
      </section>
    </>
  );
};

export default About;
