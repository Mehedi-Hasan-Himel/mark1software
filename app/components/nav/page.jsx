import React from "react";
import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className=" bg-primary text-black md:px-5 md:pt-8 drop-shadow">
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
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
                  <div className="tooltip px-1 py-2 bg-primary group w-min">
                    <button className="btn">
                      <Link href="/" className="group-hover:text-primary">
                        Home{" "}
                      </Link>
                    </button>
                  </div>
                </li>
                {/* Home End */}

                {/* Service Start */}
                <li tabIndex={0}>
                  <div className="tooltip px-1 py-2 bg-primary group w-min group z-10 ">
                    <button className="btn">
                      <Link
                        href="/"
                        className="group-hover:text-primary flex items-center gap-3"
                      >
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
                      </Link>
                    </button>
                  </div>

                  <ul className="p-2">
                    <li>
                      <div className="tooltip px-1 py-2 bg-primary group">
                        <button className="btn  ">
                          <Link href="/" className="group-hover:text-primary">
                            IT Consultancy
                          </Link>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="tooltip px-1 py-2 bg-primary group">
                        <button className="btn  ">
                          <Link href="/" className="group-hover:text-primary">
                            Software Quality Assurance (SQA)
                          </Link>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="tooltip px-1 py-2 bg-primary group">
                        <button className="btn  ">
                          <Link href="/" className="group-hover:text-primary">
                            Digital Marketing
                          </Link>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="tooltip px-1 py-2 bg-primary group">
                        <button className="btn  ">
                          <Link href="/" className="group-hover:text-primary">
                            Network Solutions
                          </Link>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="tooltip px-1 py-2 bg-primary group">
                        <button className="btn  ">
                          <Link href="/" className="group-hover:text-primary">
                            Security & Access Control Solution
                          </Link>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="tooltip px-1 py-2 bg-primary group">
                        <button className="btn  ">
                          <Link href="/" className="group-hover:text-primary">
                            UI / UX Design
                          </Link>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="tooltip px-1 py-2 bg-primary group">
                        <button className="btn">
                          <Link href="/" className="group-hover:text-primary">
                            Web Design
                          </Link>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="tooltip px-1 py-2 bg-primary group ">
                        <button className="btn">
                          <Link href="/" className="group-hover:text-primary">
                            Web Application
                          </Link>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="tooltip px-1 py-2 bg-primary group">
                        <button className="btn">
                          <Link href="/" className="group-hover:text-primary">
                            WordPress Development
                          </Link>
                        </button>
                      </div>
                    </li>
                  </ul>
                </li>
                {/* Service End */}

                {/* Blogs Start */}
                <li>
                  <div className="tooltip px-1 py-2 bg-primary group w-min">
                    <button className="btn">
                      <Link href="/" className="group-hover:text-primary">
                        Blogs
                      </Link>
                    </button>
                  </div>
                </li>
                {/* Blogs End */}

                {/* Others Start */}
                <li tabIndex={0}>
                  <div className="tooltip px-1 py-2 bg-primary group w-min group">
                    <button className="btn">
                      <Link
                        href="/"
                        className="flex gap-3 items-center group-hover:text-primary"
                      >
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
                      </Link>
                    </button>
                  </div>

                  <ul className="p-2">
                    <li>
                      <div className="tooltip px-1 py-2 bg-primary group">
                        <button className="btn  ">
                          <Link href="/" className="group-hover:text-primary">
                            About
                          </Link>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="tooltip px-1 py-2 bg-primary group">
                        <button className="btn">
                          <Link href="/" className="group-hover:text-primary">
                            Contact
                          </Link>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="tooltip px-1 py-2 bg-primary group">
                        <button className="btn">
                          <Link href="/" className="group-hover:text-primary">
                            Client&#39;s Review
                          </Link>
                        </button>
                      </div>
                    </li>
                    <li>
                      <div className="tooltip px-1 py-2 bg-primary group">
                        <button className="btn">
                          <Link href="/" className="group-hover:text-primary">
                            Career
                          </Link>
                        </button>
                      </div>
                    </li>
                  </ul>
                </li>
                {/* Others End */}
              </ul>
              {/* Mobile Desgin End */}
            </div>
            <Link href="/" className="hover:bg-none">
              <Image
                src="Logo.svg"
                width={250}
                height={250}
                alt="Company Logo"
              />
            </Link>
          </div>
          {/* Desktop Desgin Start */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {/* Home Start */}
              <li>
                <div className="tooltip px-1 py-2 bg-primary group">
                  <button className="btn">
                    <Link href="/" className="group-hover:text-primary">
                      Home{" "}
                    </Link>
                  </button>
                </div>
              </li>
              {/* Home End */}

              {/* Services Start */}
              <li tabIndex={0}>
                <div className="tooltip px-1 py-2 bg-primary group">
                  <button className="btn ">
                    <Link
                      href="/"
                      className="group-hover:text-primary flex items-center gap-3"
                    >
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
                    </Link>
                  </button>
                </div>

                <ul className="p-2">
                  <li>
                    <div className="tooltip px-1 py-2 bg-primary group">
                      <button className="btn  ">
                        <Link href="/" className="group-hover:text-primary">
                          IT Consultancy
                        </Link>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="tooltip px-1 py-2 bg-primary group">
                      <button className="btn  ">
                        <Link href="/" className="group-hover:text-primary">
                          Software Quality Assurance (SQA)
                        </Link>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="tooltip px-1 py-2 bg-primary group">
                      <button className="btn  ">
                        <Link href="/" className="group-hover:text-primary">
                          Digital Marketing
                        </Link>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="tooltip px-1 py-2 bg-primary group">
                      <button className="btn  ">
                        <Link href="/" className="group-hover:text-primary">
                          Network Solutions
                        </Link>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="tooltip px-1 py-2 bg-primary group">
                      <button className="btn  ">
                        <Link href="/" className="group-hover:text-primary">
                          Security & Access Control Solution
                        </Link>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="tooltip px-1 py-2 bg-primary group">
                      <button className="btn  ">
                        <Link href="/" className="group-hover:text-primary">
                          UI / UX Design
                        </Link>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="tooltip px-1 py-2 bg-primary group">
                      <button className="btn">
                        <Link href="/" className="group-hover:text-primary">
                          Web Design
                        </Link>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="tooltip px-1 py-2 bg-primary group">
                      <button className="btn">
                        <Link href="/" className="group-hover:text-primary">
                          Web Application
                        </Link>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="tooltip px-1 py-2 bg-primary group">
                      <button className="btn">
                        <Link href="/" className="group-hover:text-primary">
                          WordPress Development
                        </Link>
                      </button>
                    </div>
                  </li>
                </ul>
              </li>
              {/* Services End */}

              {/* Free UI / UX Start */}

              <li>
                <div
                  className="tooltip px-1 py-2 bg-primary group tooltip-open tooltip-top"
                  data-tip="NEW !"
                >
                  <button className="btn">
                    <Link href="/" className="group-hover:text-primary">
                      Free UI / UX Design
                    </Link>
                  </button>
                </div>
              </li>
              {/* Free UI / UX Start */}

              {/* Blogs Start */}
              <li>
                <div className="tooltip px-1 py-2 bg-primary group">
                  <button className="btn">
                    <Link href="/" className="group-hover:text-primary">
                      Blogs
                    </Link>
                  </button>
                </div>
              </li>
              {/* Blogs End */}

              {/* Application Start */}
              <li tabIndex={0}>
                <div
                  className="tooltip px-1 py-2 bg-primary group tooltip-open tooltip-top"
                  data-tip="NEW !"
                >
                  <button className="btn">
                    <Link
                      href="/"
                      className="group-hover:text-primary flex gap-3 items-center group"
                    >
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
                    </Link>
                  </button>
                </div>

                <ul className="p-2">
                  <li>
                    <div className="tooltip px-1 py-2 bg-primary group">
                      <button className="btn  ">
                        <Link href="/" className="group-hover:text-primary">
                          MERN Stack
                        </Link>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="tooltip px-1 py-2 bg-primary group">
                      <button className="btn">
                        <Link href="/" className="group-hover:text-primary">
                          Next.JS Full Stack
                        </Link>
                      </button>
                    </div>
                  </li>
                </ul>
              </li>
              {/* Application End */}

              {/* Others Start */}
              <li tabIndex={0}>
                <div className="tooltip px-1 py-2 bg-primary group">
                  <button className="btn">
                    <Link
                      href="/"
                      className="group-hover:text-primary flex gap-3 items-center group"
                    >
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
                    </Link>
                  </button>
                </div>

                <ul className="p-2">
                  <li>
                    <div className="tooltip px-1 py-2 bg-primary group">
                      <button className="btn  ">
                        <Link href="/" className="group-hover:text-primary">
                          About
                        </Link>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="tooltip px-1 py-2 bg-primary group">
                      <button className="btn">
                        <Link href="/" className="group-hover:text-primary">
                          Contact
                        </Link>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="tooltip px-1 py-2 bg-primary group">
                      <button className="btn">
                        <Link href="/" className="group-hover:text-primary">
                          Client&#39;s Review
                        </Link>
                      </button>
                    </div>
                  </li>
                  <li>
                    <div className="tooltip px-1 py-2 bg-primary group">
                      <button className="btn">
                        <Link href="/" className="group-hover:text-primary">
                          Career
                        </Link>
                      </button>
                    </div>
                  </li>
                </ul>
              </li>
              {/* Others End */}
            </ul>
          </div>
          {/* Desktop Desgin End */}

          {/* Book Consultancy Start */}
          <div className="navbar-end  ">
            <button className="btn hover:bg-neutral btn-outline border-2 rounded-2xl w-36 text-[10px] font-bold px-0 md:w-[240px] md:text-[15px] ">
              Book a Consultancy
            </button>
          </div>
          {/* Book Consultancy End */}
        </div>
      </div>
    </>
  );
};

export default Nav;
