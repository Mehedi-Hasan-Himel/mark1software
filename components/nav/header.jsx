import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      {/* NavBar Start */}
      <header className=" bg-primary text-black md:px-5 md:pt-8 drop-shadow">
        <section className="navbar ">
          <section className="navbar-start">
            <section className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              {/* Mobile Desgin Start */}
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p- shadow bg-base-100 rounded-box w-52"
              >
                {/* Home Start */}
                <li>
                  <Link
                    href="./"
                    className="tooltip px-1 py-2 bg-primary group w-min"
                  >
                    <section className="group-hover:text-primary">
                      <button className="btn">Home </button>
                    </section>{" "}
                  </Link>
                </li>
                {/* Home End */}

                {/* Service Start */}
                <li tabIndex={0}>
                  <Link
                    className="tooltip px-1 py-2 bg-primary group w-min group z-10 "
                    href="./Services"
                  >
                    <section className="group-hover:text-primary flex items-center gap-3">
                      <button className="btn">
                        Services
                        <svg
                          className="fill-current group-hover:rotate-180 transition-all"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                      </button>
                    </section>{" "}
                  </Link>
                  <ul className="p-2">
                    <li>
                      <Link
                        className="tooltip px-1 py-2 bg-primary group "
                        href="./Services/IT-Consultancy"
                      >
                        <section className="group-hover:text-primary md:hidden ">
                          <button className="btn">IT Consultancy</button>
                        </section>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="tooltip px-1 py-2 bg-primary group"
                        href="./Services/Software-Quality-Assurance"
                      >
                        <section className="group-hover:text-primary">
                          <button className="btn  ">
                            Software Quality Assurance (SQA)
                          </button>
                        </section>{" "}
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        className="tooltip px-1 py-2 bg-primary group"
                        href="./Services/Digital-Marketing"
                      >
                        <section className="group-hover:text-primary">
                          <button className="btn  ">Digital Marketing</button>
                        </section>{" "}
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        className="tooltip px-1 py-2 bg-primary group"
                        href="./Services/Network-Solutions"
                      >
                        <section className="group-hover:text-primary">
                          <button className="btn  ">Network Solutions</button>
                        </section>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="tooltip px-1 py-2 bg-primary group"
                        href="./Services/Security-Access-Control-Solution"
                      >
                        <section className="group-hover:text-primary">
                          <button className="btn  ">
                            Security & Access Control Solution
                          </button>
                        </section>{" "}
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        className="tooltip px-1 py-2 bg-primary group"
                        href="./Services/UI-UX"
                      >
                        <section className="group-hover:text-primary">
                          <button className="btn  ">UI / UX Design</button>
                        </section>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="tooltip px-1 py-2 bg-primary group"
                        href="./Services/Web-Design"
                      >
                        <section className="group-hover:text-primary">
                          <button className="btn">Web Design</button>
                        </section>{" "}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="tooltip px-1 py-2 bg-primary group "
                        href="./Services/Web-Application"
                      >
                        <section className="group-hover:text-primary">
                          <button className="btn">Web Application</button>
                        </section>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="tooltip px-1 py-2 bg-primary group"
                        href="./Services/WordPress-Development"
                      >
                        <section className="group-hover:text-primary">
                          <button className="btn">WordPress Development</button>
                        </section>{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* Service End */}

                {/* Blogs Start */}
                <li>
                  <Link
                    className="tooltip px-1 py-2 bg-primary group w-min"
                    href="./Blogs"
                  >
                    <section className="group-hover:text-primary">
                      <button className="btn">Blogs</button>
                    </section>
                  </Link>
                </li>
                {/* Blogs End */}

                {/* Others Start */}
                <li tabIndex={0}>
                  <section className="tooltip px-1 py-2 bg-primary group w-min group">
                    <button className="btn">
                      <span className="flex gap-3 items-center group-hover:text-primary">
                        Others
                        <svg
                          className="fill-current group-hover:rotate-180 transition-all"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                        </svg>
                      </span>
                    </button>
                  </section>

                  <ul className="p-2">
                    <li>
                      {" "}
                      <Link
                        className="tooltip px-1 py-2 bg-primary group"
                        href="./About"
                      >
                        <section className="group-hover:text-primary">
                          <button className="btn  ">About</button>
                        </section>{" "}
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        className="tooltip px-1 py-2 bg-primary group"
                        href="./Contact"
                      >
                        <section className="group-hover:text-primary">
                          <button className="btn">Contact</button>
                        </section>
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        className="tooltip px-1 py-2 bg-primary group"
                        href="./Client-Review"
                      >
                        <section className="group-hover:text-primary">
                          <button className="btn">Client&#39;s Review</button>
                        </section>{" "}
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link
                        className="tooltip px-1 py-2 bg-primary group"
                        href="./Career"
                      >
                        <section className="group-hover:text-primary">
                          <button className="btn">Career</button>
                        </section>{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
                {/* Others End */}
              </ul>
              {/* Mobile Desgin End */}
            </section>
            <Link href="/" className="hover:bg-none">
              <Image
                src="/Logo.svg"
                width={250}
                height={250}
                alt="Company Logo"
              />
            </Link>
          </section>
          {/* Desktop Desgin Start */}
          <section className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {/* Home Start */}
              <li>
                <Link href="./" className="tooltip px-1 py-2 bg-primary group">
                  <section className="group-hover:text-primary">
                    <button className="btn">Home</button>
                  </section>
                </Link>
              </li>
              {/* Home End */}

              {/* Services Start */}
              <li tabIndex={0}>
                <Link
                  href="./Services"
                  className="tooltip px-1 py-2 bg-primary group"
                >
                  <section className="group-hover:text-primary flex items-center gap-3">
                    <button className="btn ">
                      Services
                      <svg
                        className="fill-current group-hover:rotate-180 transition-all"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </button>
                  </section>{" "}
                </Link>
                <ul className="p-2">
                  <li>
                    <Link
                      href="./Services/IT-Consultancy"
                      className="tooltip px-1 py-2 bg-primary group"
                    >
                      <section className="group-hover:text-primary">
                        <button className="btn  ">IT Consultancy</button>
                      </section>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="./Services/Software-Quality-Assurance"
                      className="tooltip px-1 py-2 bg-primary group"
                    >
                      <section className="group-hover:text-primary">
                        <button className="btn  ">
                          Software Quality Assurance (SQA)
                        </button>
                      </section>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="./Services/Digital-Marketing"
                      className="tooltip px-1 py-2 bg-primary group"
                    >
                      <section className="group-hover:text-primary">
                        <button className="btn  ">Digital Marketing</button>
                      </section>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tooltip px-1 py-2 bg-primary group"
                      href="./Services/Network-Solutions"
                    >
                      <section className="group-hover:text-primary">
                        <button className="btn  ">Network Solutions</button>
                      </section>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tooltip px-1 py-2 bg-primary group"
                      href="./Services/Security-Access-Control-Solution"
                    >
                      <section className="group-hover:text-primary">
                        <button className="btn  ">
                          Security & Access Control Solution
                        </button>
                      </section>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tooltip px-1 py-2 bg-primary group"
                      href="./Services/UI-UX"
                    >
                      <section className="group-hover:text-primary">
                        <button className="btn  ">UI / UX Design</button>
                      </section>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tooltip px-1 py-2 bg-primary group"
                      href="./Services/Web-Design"
                    >
                      <section className="group-hover:text-primary">
                        <button className="btn">Web Design</button>
                      </section>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tooltip px-1 py-2 bg-primary group"
                      href="./Services/Web-Application"
                    >
                      <section className="group-hover:text-primary">
                        <button className="btn">Web Application</button>
                      </section>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tooltip px-1 py-2 bg-primary group"
                      href="./Services/WordPress-Development"
                    >
                      <section className="group-hover:text-primary">
                        <button className="btn">WordPress Development</button>
                      </section>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Services End */}

              {/* Free UI / UX Start */}

              <li>
                <Link
                  className="tooltip px-1 py-2 bg-primary group tooltip-open tooltip-top"
                  data-tip="NEW !"
                  href="./Services/UI-UX"
                >
                  <section className="group-hover:text-primary">
                    <button className="btn">Free UI / UX Design</button>
                  </section>
                </Link>
              </li>
              {/* Free UI / UX Start */}

              {/* Blogs Start */}
              <li>
                <Link
                  className="tooltip px-1 py-2 bg-primary group"
                  href="./Blogs"
                >
                  <section className="group-hover:text-primary">
                    <button className="btn">Blogs</button>
                  </section>
                </Link>
              </li>
              {/* Blogs End */}

              {/* Application Start */}
              <li tabIndex={0}>
                <Link
                  className="tooltip px-1 py-2 bg-primary group tooltip-open tooltip-top"
                  data-tip="NEW !"
                  href="./Services/Web-Application"
                >
                  <section className="group-hover:text-primary flex gap-3 items-center group">
                    <button className="btn">
                      Web Application
                      <svg
                        className="fill-current group-hover:rotate-180 transition-all"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </button>
                  </section>{" "}
                </Link>
                <ul className="p-2">
                  <li>
                    <Link
                      className="tooltip px-1 py-2 bg-primary group"
                      href="./Services/Web-Application"
                    >
                      <section className="group-hover:text-primary">
                        <button className="btn  ">MERN Stack</button>
                      </section>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      className="tooltip px-1 py-2 bg-primary group"
                      href="./Services/Web-Application"
                    >
                      <section className="group-hover:text-primary">
                        <button className="btn">Next.JS Full Stack</button>
                      </section>{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Application End */}

              {/* Others Start */}
              <li tabIndex={0}>
                <section className="tooltip px-1 py-2 bg-primary group">
                  <button className="btn">
                    <span className="group-hover:text-primary flex gap-3 items-center group">
                      Others
                      <svg
                        className="fill-current group-hover:rotate-180 transition-all"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                      </svg>
                    </span>
                  </button>
                </section>

                <ul className="p-2">
                  <li>
                    {" "}
                    <Link
                      className="tooltip px-1 py-2 bg-primary group"
                      href="./About"
                    >
                      <section className="group-hover:text-primary">
                        <button className="btn  ">About</button>
                      </section>
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link
                      className="tooltip px-1 py-2 bg-primary group"
                      href="./Contact"
                    >
                      <section className="group-hover:text-primary">
                        <button className="btn">Contact</button>
                      </section>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tooltip px-1 py-2 bg-primary group"
                      href="./Client-Review"
                    >
                      <section className="group-hover:text-primary">
                        <button className="btn">Client&#39;s Review</button>
                      </section>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="tooltip px-1 py-2 bg-primary group"
                      href="./Career"
                    >
                      <section className="group-hover:text-primary">
                        <button className="btn">Career</button>
                      </section>{" "}
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Others End */}
            </ul>
          </section>
          {/* Desktop Desgin End */}

          {/* Book Consultancy Start */}
          <section className="navbar-end">
            <Link href="./Contact" className="">
              <button className="btn hover:bg-neutral btn-outline border-2 rounded-2xl w-36 text-[11px] font-bold px-0 md:w-[150px] lg:w-[200px]  ">
                Book a Consultancy
              </button>{" "}
            </Link>
          </section>
          {/* Book Consultancy End */}
        </section>
      </header>
      {/* NavBar End */}
    </>
  );
};

export default Nav;
