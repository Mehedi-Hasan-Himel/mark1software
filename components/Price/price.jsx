"use client";
import React from "react";
import { oneTimePrice, monthlyPrice, annuallyPrice } from "./Price.json";
import { useState } from "react";

const Price = () => {
  const [price, setPrice] = useState(oneTimePrice);
  const [color, setColor] = useState("One Time");
  const clickHandler = (pera) => {
    if (pera.target.innerText == "One Time") {
      setPrice(oneTimePrice);
      setColor(pera.target.innerText);
    } else if (pera.target.innerText == "Monthly") {
      setPrice(monthlyPrice);
      setColor(pera.target.innerText);
    } else {
      setPrice(annuallyPrice);
      setColor(pera.target.innerText);
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
              Pricing
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.
            </p>
            <div className="flex mx-auto border-2 border-indigo-500 rounded overflow-hidden mt-6">
              <button
                className={`py-1 px-4 text-black focus:outline-none border-2 border-indigo-500 ${
                  color == "One Time" ? "bg-indigo-500" : ""
                } `}
                onClick={clickHandler}
              >
                One Time
              </button>
              <button
                className={`py-1 px-4 text-black focus:outline-none border-2 border-indigo-500 ${
                  color == "Monthly" ? "bg-indigo-500" : ""
                } `}
                onClick={clickHandler}
              >
                Monthly
              </button>
              <button
                className={`py-1 px-4 text-black focus:outline-none border-2 border-indigo-500 ${
                  color == "Annually" ? "bg-indigo-500" : ""
                } `}
                onClick={clickHandler}
              >
                Annually
              </button>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Price Component Start */}
            {price.map(({ title, fee, popular, fasility }, index) => {
              return (
                <div key={index} className="p-4 xl:w-1/4 md:w-1/2 w-full">
                  <div className="h-full p-6 rounded-lg border-2  flex flex-col relative overflow-hidden border-indigo-500">
                    {popular ? (
                      <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">
                        Popular
                      </span>
                    ) : (
                      ""
                    )}

                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium">
                      {title}
                    </h2>

                    <h1 className="text-5xl text-gray-900 pb-4 mb-4 border-b border-gray-200 leading-none">
                      {fee}
                    </h1>

                    {fasility.map((item, index) => {
                      return (
                        <p
                          key={index}
                          className="flex items-center mb-2 text-indigo-500"
                        >
                          <span className="w-4 h-4 mr-2 inline-flex items-center justify-center  text-white rounded-full flex-shrink-0 bg-indigo-500">
                            <svg
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.5"
                              className="w-3 h-3"
                              viewBox="0 0 24 24"
                            >
                              <path d="M20 6L9 17l-5-5"></path>
                            </svg>
                          </span>
                          {item}
                        </p>
                      );
                    })}
                    <button
                      className="flex items-center mt-auto text-white 
                 hover:bg-indigo-600 border-0 py-2 px-4 w-full focus:outline-none  rounded bg-indigo-500"
                    >
                      Button
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 ml-auto"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
            {/* Price Component End */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Price;
