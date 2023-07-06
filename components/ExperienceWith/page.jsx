import React from "react";
import Image from "next/image";
import {Images} from "./ExperienceImage.json"
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

            {
              Images.map((logo,index) => {
                return (
                  <>
                    <div key={index} className="p-2 flex items-center justify-center border ">
                      <Image
                        width="300"
                        height="300"
                        alt="team"
                        src={logo.ImageLink}
                      />
                    </div>
                  </>
                );
              })
            }

           

            {/* <div className="p-2  flex items-center justify-center border">
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
            </div> */}
          </div>
        </div>
      </section>
      {/* Logo End */}

     
    </section>
  );
};

export default ExperienceWith;
