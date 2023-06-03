import React from 'react'

export default function Values() {
  const value = [
    {
        title: "Be helpful",
        more: "Help each other"
    },
    {
        title: "Be helpful",
        more: "Help each other"
    },
    {
        title: "Be helpful",
        more: "Help each other"
    },
    {
        title: "Be helpful",
        more: "Help each other"
    },
    {
        title: "Be helpful",
        more: "Help each other"
    },
    {
        title: "Be helpful",
        more: "Help each other"
    },
    {
        title: "Be helpful",
        more: "Help each other"
    },
    {
        title: "Be helpful",
        more: "Help each other"
    },
];

  return (
    <section
    className="my-20 text-center ">
    <h2 className="text-4xl font-bold">Our Values</h2>
    <p className="text-xl text-gray-400 font-medium my-6 lg:w-3/5 w-5/6 mx-auto">These are some of the principles that are core to
      how we operate,
      collaborate, and make decisions. We hope this gives you a better idea of what to expect at Showwcase.</p>
    <div className="my-4 px-3 sm:px-6 md:px-12 lg:px-28 xl:px-36">
      {value.map((data, index)=>{
        return(
            <div key={index} className="py-8 border-b-2 border-gray-800 text-start md:flex">
        <h6 className="text-2xl font-bold md:w-[30%]">{data.title}</h6>
        <p className="text-lg font-semibold text-gray-500 md:w-[70%]">{data.more}</p>
      </div>
        )
      })}
    </div>
  </section>
  )
}
