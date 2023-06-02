"use client";

import React from "react";
import AboutMember from "./aboutMember";
import { useState } from "react";
import Image from "next/image";

export default function Team() {
  const [about, setAbout] = useState(null);
  const team = [
    {
      image:
        "https://www.about.showwcase.com/_next/image?url=https%3A%2F%2Fassets.showwcase.com%2F200x%2Flanding-page%2Fimages%2Fcareers%2FourTeam%2Frong.png&w=1920&q=75",
      name: "Rong Liew",
      position: "CEO",
    },
    {
      image:
        "https://www.about.showwcase.com/_next/image?url=https%3A%2F%2Fassets.showwcase.com%2F200x%2Flanding-page%2Fimages%2Fcareers%2FourTeam%2Frong.png&w=1920&q=75",
      name: "Rong Liew",
      position: "CEO",
    },
    {
      image:
        "https://www.about.showwcase.com/_next/image?url=https%3A%2F%2Fassets.showwcase.com%2F200x%2Flanding-page%2Fimages%2Fcareers%2FourTeam%2Frong.png&w=1920&q=75",
      name: "Rong Liew",
      position: "CEO",
    },
    {
      image:
        "https://www.about.showwcase.com/_next/image?url=https%3A%2F%2Fassets.showwcase.com%2F200x%2Flanding-page%2Fimages%2Fcareers%2FourTeam%2Frong.png&w=1920&q=75",
      name: "Rong Liew",
      position: "CEO",
    },
    {
      image:
        "https://www.about.showwcase.com/_next/image?url=https%3A%2F%2Fassets.showwcase.com%2F200x%2Flanding-page%2Fimages%2Fcareers%2FourTeam%2Frong.png&w=1920&q=75",
      name: "Rong Liew",
      position: "CEO",
    },
    {
      image:
        "https://www.about.showwcase.com/_next/image?url=https%3A%2F%2Fassets.showwcase.com%2F200x%2Flanding-page%2Fimages%2Fcareers%2FourTeam%2Frong.png&w=1920&q=75",
      name: "Rong Liew",
      position: "CEO",
    },
    {
      image:
        "https://www.about.showwcase.com/_next/image?url=https%3A%2F%2Fassets.showwcase.com%2F200x%2Flanding-page%2Fimages%2Fcareers%2FourTeam%2Frong.png&w=1920&q=75",
      name: "Rong Liew",
      position: "CEO",
    },
    {
      image:
        "https://www.about.showwcase.com/_next/image?url=https%3A%2F%2Fassets.showwcase.com%2F200x%2Flanding-page%2Fimages%2Fcareers%2FourTeam%2Frong.png&w=1920&q=75",
      name: "Rong Liew",
      position: "CEO",
    },
  ];

  return (
    <section className="my-20 text-center px-3 sm:px-6 md:px-12 lg:px-28 xl:px-36">
      {about}
      <div className="lg:flex justify-between">
        <div className="lg:w-2/5 lg:pr-20">
          <h2 className="text-4xl font-bold lg:text-start">Our Team</h2>
          <p className="text-xl text-gray-400 font-medium my-6 mx-auto lg:text-start">
            Showwcase is headquartered in San Francisco but work with a
            distributed team around the world - San Francisco, Singapore,
            Indonesia, Malaysia, India, Estonia, Australia.
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-8 my-10 lg:w-3/5 ">
          {team.map((data, index) => {
            return (
              <div key={index}
                onClick={() => {
                  setAbout(<AboutMember setAbout={setAbout} />);
                }}
                className="cursor-pointer"
              >
                <div className="rounded-full border-4 border-purple-600 overflow-hidden w-36 h-36 mx-auto">
                  <img src={data.image} alt="" />
                </div>
                <div className="my-4">
                  <h6 className="text-xl font-semibold">{data.name}</h6>
                  <p className="text-gray-600">{data.position}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mx-auto flex justify-center">
        <div className="mt-20 text-start grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center">
          <div className="w-72">
            <div className="rounded-2xl overflow-hidden bg-[#10141e] m-4 hover:m-0 transition-all duration-500 hover:shadow-xl">
              <img
                src="https://www.about.showwcase.com/_next/image?url=https%3A%2F%2Fproject-assets.showwcase.com%2F4187%2F1648811640189-Greenroots-cover.png&w=1920&q=75"
                alt=""
              />
              <div className="p-6">
                <h4 className="md:text-xl text-lg mb-20 font-bold">
                  Why we are building showwcase
                </h4>
                <p>Rong</p>
              </div>
            </div>
          </div>
          <div className="w-72">
            <div className="rounded-2xl overflow-hidden bg-[#10141e] m-4 hover:m-0 transition-all duration-500 hover:shadow-xl">
              <img
                src="https://www.about.showwcase.com/_next/image?url=https%3A%2F%2Fproject-assets.showwcase.com%2F4187%2F1648811640189-Greenroots-cover.png&w=1920&q=75"
                alt=""
              />
              <div className="p-6">
                <h4 className="md:text-xl text-lg mb-20 font-bold">
                  Why we are building showwcase
                </h4>
                <p>Rong</p>
              </div>
            </div>
          </div>
          <div className="w-72">
            <div className="rounded-2xl overflow-hidden bg-[#10141e] m-4 hover:m-0 transition-all duration-500 hover:shadow-xl">
              <img
                src="https://www.about.showwcase.com/_next/image?url=https%3A%2F%2Fproject-assets.showwcase.com%2F4187%2F1648811640189-Greenroots-cover.png&w=1920&q=75"
                alt=""
              />
              <div className="p-6">
                <h4 className="md:text-xl text-lg mb-20 font-bold">
                  Why we are building showwcase
                </h4>
                <p>Rong</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
