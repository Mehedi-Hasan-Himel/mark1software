import React from "react";
const Mission = ({ data }) => {
  return (
    <>
      <section>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-12 mx-auto flex justify-evenly flex-wrap gap-10 ">
            {/* < className="p-4 lg:w-1/2 md:w-full  "> */}
            {data.Mission.map((item, index) => {
              return (
                <div
                  key={index}
                  className=" lg:w-2/5 md:w-full flex  border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col"
                >
                  <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-8 h-8"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div className="flex-grow ">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                      {item.header}
                    </h2>
                    <p className="leading-relaxed text-base">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
};

export default Mission;
