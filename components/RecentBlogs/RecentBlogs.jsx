import React from "react";
import Image from "next/image";
const RecentBlogs = () => {
  return (
    <>
      {/* Recent Blogs Start */}
      <section className="text-center lg:py-6 py-3 bg-primary rounded-lg">
        <section className="md:text-6xl font-bold pb-3">
          <h1 className="headingTag">Recent Blogs</h1>
        </section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-6 mx-auto ">
            <div className="flex flex-wrap -mx-4 -mb-10 text-center justify-around">
              <div className="sm:w-[45%] mb-5 p-4 shadow-lg">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image
                    width={1000}
                    height={1000}
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="/Blogs/Recent-Blogs-1.webp"
                  />
                </div>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 text-left">
                  How to Turn your Button Element into Add to Cart Button in
                  WordPress using Breakdance Page Builder
                </h2>
                <p className="leading-relaxed text-base text-left">
                  Mehedi Hasan Himel
                </p>
              </div>
              <div className="sm:w-[45%] mb-5 p-4 m-4 shadow-lg">
                <div className="rounded-lg h-64 overflow-hidden">
                  <Image
                    width={1000}
                    height={1000}
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="/Blogs/Recent-Blogs-2.webp"
                  />
                </div>
                <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 text-left">
                  Build an Impressive Form with Breakdance Page Builder!
                </h2>
                <p className="leading-relaxed text-base text-left">
                  Mehedi Hasan Himel
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      {/* Recent Blogs End */}
    </>
  );
};

export default RecentBlogs;
