import React from "react";
import Image from "next/image";
import Link from "next/link";
const ExperienceWith = () => {
  return (
    <section>
      {/* Logo Start */}
      <section className="text-gray-600 body-font ">
        <div className="container px-3 py-6 mx-auto">
          <div className="flex flex-col text-center w-full mb-5">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900 ">
              <span className="md:ml-3 headingTag md:text-6xl">
                We Are Experienced With
              </span>
            </h1>
          </div>
          <div className="grid gap-2 p-5 md:grid-cols-7 grid-cols-2 bg-primary rounded-lg ">
            <div className="p-2 flex items-center justify-center border ">
              <Image
                width="300"
                height="300"
                alt="team"
                src="/experienceWith/acf.png"
              />
            </div>
            <div className="p-2  flex items-center justify-center border">
              <Image
                width="300"
                height="300"
                alt="team"
                src="/experienceWith/beaver-builder.jpg"
              />
            </div>
            <div className="p-2  flex items-center justify-center border">
              <Image
                width="300"
                height="300"
                alt="team"
                src="/experienceWith/breakdance-logo.svg"
              />
            </div>
            <div className="p-2  flex items-center justify-center border">
              <Image
                width="300"
                height="300"
                alt="team"
                src="/experienceWith/bricks.webp"
              />
            </div>
            <div className="p-2  flex items-center justify-center border">
              <Image
                width="300"
                height="300"
                alt="team"
                src="/experienceWith/divi-logo.jpg"
              />
            </div>
            <div className="p-2  flex items-center justify-center border">
              <Image
                width="300"
                height="300"
                alt="team"
                src="/experienceWith/elementor-logo.jpg"
              />
            </div>
            <div className="p-2  flex items-center justify-center border">
              <Image
                width="300"
                height="300"
                alt="team"
                src="/experienceWith/Google-Analytics.png"
              />
            </div>
            <div className="p-2  flex items-center justify-center border">
              <Image
                width="300"
                height="300"
                alt="team"
                src="/experienceWith/logo-woocommercejpg.webp"
              />
            </div>

            <div className="p-2  flex items-center justify-center border">
              <Image
                width="300"
                height="300"
                alt="team"
                src="/experienceWith/mailchimp.png"
              />
            </div>
            <div className="p-2  flex items-center justify-center border">
              <Image
                width="300"
                height="300"
                alt="team"
                src="/experienceWith/toolset.png"
              />
            </div>
            <div className="p-2  flex items-center justify-center border ">
              {/* flex items-center justify-center */}
              <Image
                className=""
                width="300"
                height="300"
                alt="team"
                src="/experienceWith/wordpress-logo.png"
              />
            </div>
            <div className="p-2  flex items-center justify-center border">
              <Image
                width="300"
                height="300"
                alt="team"
                src="/experienceWith/wp-rocket.png"
              />
            </div>
            <div className="p-2  flex items-center justify-center border">
              <Image
                width="300"
                height="300"
                alt="team"
                src="/experienceWith/yith.png"
              />
            </div>
            <div className="p-2  flex items-center justify-center border">
              <Image
                width="300"
                height="300"
                alt="team"
                src="/experienceWith/yoast.png"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Logo End */}

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
    </section>
  );
};

export default ExperienceWith;
