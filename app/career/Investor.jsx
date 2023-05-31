import React from 'react'

export default function Investor() {
  return (
    <section className="my-20 text-center px-3 sm:px-6 md:px-12 lg:px-28 xl:px-36">
      <h2 className="text-4xl font-bold">Our Investors</h2>
      <p className="text-xl text-gray-400 font-medium my-6 lg:w-3/5 mx-auto">We are funded by all-star investors including Init-6 by Achmad Zaky and Nugroho Herucahyono and Vynn Capital by Victor Chua.</p>
      <div className="flex flex-col sm:flex-row justify-center items-center my-10 gap-10">
        <img className="h-14" src="https://www.about.showwcase.com/_next/image?url=https%3A%2F%2Fassets.showwcase.com%2F420x420%2Flanding-page%2Fimages%2Fcareers%2Finvestors%2Fvynn-capital.jpg&w=1920&q=75" alt="" />
        <img className="h-14" src="https://www.about.showwcase.com/_next/image?url=https%3A%2F%2Fassets.showwcase.com%2F420x420%2Flanding-page%2Fimages%2Fcareers%2Finvestors%2Finit-6.jpg&w=1920&q=75" alt="" />
      </div>
    </section>
  )
}
