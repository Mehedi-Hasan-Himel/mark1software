"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import data from "./footerLinks.json";
const Footer = () => {
  return (
    <section className="text-primary bg-black">
      <footer className="text-primary body-font">
        <section className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          {/* Footer Introductio Section Start */}
          <section className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href="/" className="hover:bg-none">
              <Image
                src="/logo-name-white.svg"
                width={250}
                height={250}
                alt="Company Logo"
              />
            </Link>
            <p className="mt-2 text-sm text-primary">
              Transform Your Online Presence with Mark One Soft.
            </p>
          </section>
          {/* Footer Introductio Section End */}

          <section className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            {/* Footer Services Secition Start */}
            <section className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-primary tracking-widest mb-3 text-lg	">
                IT Services
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                {data.itservices.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={item.route}
                        className="text-primary hover:text-[#34751a]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </nav>
            </section>
            {/* Footer Services Secition End */}

            {/* Footer Software Development Section Start */}
            <section className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-primary tracking-widest  mb-3 text-lg">
                Software Development
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                {data.softwareDevelopment.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={item.route}
                        className="text-primary hover:text-[#34751a] "
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </nav>
            </section>
            {/* Footer Software Development Section End */}

            {/* Footer Informaiton section Start */}
            <section className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-primary tracking-widest text-lg mb-3">
                Others
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                {data.others.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={item.route}
                        className="text-primary hover:text-[#34751a]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </nav>
            </section>
            {/* Footer Informaiton section End */}

            {/* Footer Social Links Section Start */}
            <section className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-primary tracking-widest text-lg mb-3">
                Get In Touch
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-3">
                {data.getInTouch.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        target={item.route.length > 0 && "_blank"}
                        href={item.route}
                        className="text-primary hover:text-[#34751a]"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </nav>
            </section>
            {/* Footer Social Links Section End */}
          </section>
        </section>
        <hr />
        <section className="bg-black">
          <section className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-primary text-sm text-center sm:text-left">
              © Privacy policy 2023 Mark One Soft —
              <Link
                href="https://www.linkedin.com/in/mehedi-hasan-himel/"
                rel="noopener noreferrer"
                className="text-primary ml-1"
                target="_blank"
              >
                @Mehedi-Hasan-Himel
              </Link>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              {/* Facebook Start*/}
              <Link
                target="_blank"
                href="https://www.facebook.com/mark1soft"
                className="text-[#1877F2]"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </Link>
              {/* Facebook End */}

              {/*  Twiteer Start */}
              {/* <Link href="/" className="ml-3 text-[#1DA1F2]">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </Link> */}
              {/*  Twiteer End */}

              {/*  Instagram Start */}
              {/* <Link href="/" className="ml-3 text-[#E4405F]">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </Link> */}
              {/*  Instagram End */}

              {/*  LinkedIn Start */}
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/mark1software/"
                className="ml-3 text-[#0077B5]"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </Link>
              {/*  LinkedIn End */}
            </span>
          </section>
        </section>
      </footer>
    </section>
  );
};

export default Footer;
