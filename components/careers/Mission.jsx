import React from "react";
import Link from "next/link";

export default function Mission() {
  const position = [
    {
      jobName:"Ruby on rails Backend Engineer",
      title: "ELITE - Ruby on rails Backend Engineer",
      place: "Worldwide",
      time: "Full Time",
    },
    {
      jobName:"Ruby on rails Backend Engineer",
      title: "ELITE - Ruby on rails Backend Engineer",
      place: "Worldwide",
      time: "Full Time",
    },
    {
      jobName:"Ruby on rails Backend Engineer",
      title: "ELITE - Ruby on rails Backend Engineer",
      place: "Worldwide",
      time: "Full Time",
    },
    {
      jobName:"Ruby on rails Backend Engineer",
      title: "ELITE - Ruby on rails Backend Engineer",
      place: "Worldwide",
      time: "Full Time",
    },
    {
      jobName:"Ruby on rails Backend Engineer",
      title: "ELITE - Ruby on rails Backend Engineer",
      place: "Worldwide",
      time: "Full Time",
    },
    {
      jobName:"Ruby on rails Backend Engineer",
      title: "ELITE - Ruby on rails Backend Engineer",
      place: "Worldwide",
      time: "Full Time",
    },
  ];

  return (
    <section className="my-20 text-center px-3 sm:px-6 md:px-12 lg:px-28 xl:px-36">
      <small className="uppercase text-blue-500 lg:text-lg font-semibold">
        our mission
      </small>
      <h2 className="text-3xl font-bold my-6 lg:w-3/5 mx-auto">
        We're on a mission to expand the career opportunitie of people who code,
        and we'd like your help to get us there
      </h2>
      <div className="lg:p-20 md:p-16 sm:p-8 p-6 rounded-xl bg-[#10141e] mt-32">
        <h3 className="text-3xl font-bold mb-20">Open Positions (15)</h3>
        {position.map((data) => {
          return (
            <Link href={"./careers/"+data.jobName}>
              <div className="my-5">
              <div className="rounded-lg px-6 py-8 bg-[#171B26] hover:shadow-xl mx-4 hover:mx-0 duration-500 transition-all">
                <div>
                  <h5 className="text-start text-xl font-bold">{data.title}</h5>
                  <p className="flex my-2 text-gray-600">
                    <i className="mr-2"></i>
                    {data.place}
                    <i className="mx-2"></i>
                    {data.time}
                  </p>
                </div>
                <i className="items-center text-blue-600"></i>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
