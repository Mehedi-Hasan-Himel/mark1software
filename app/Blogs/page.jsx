import React from "react";
import Image from "next/image";
const Blogs = () => {
  return (
    <section className="my-20 px-3 sm:px-6 md:px-12 lg:px-28 xl:px-36 text-black">
      <h1 className="text-3xl font-bold">News from I/O 2023</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div>
          <h2 className="text-lg my-3">PIXEL</h2>
          <div className="overflow-hidden rounded-xl bg-zinc-300">
            <Image
              width={100}
              height={100}
              className="w-full"
              src="/Blogs/BLOG_HEADER.webp"
              alt=""
            />
            <div className="p-6">
              <div>
                <a className="hover:underline text-xl" href="#">
                  Introducing Pixel Fold: Googles first foldable phone
                </a>
                <p className="text-gray-600 my-4">
                  Pixel Fold, Googles first foldable phone, unlocks even more
                  ways to use your device.
                </p>
              </div>
              <div className="text-lg my-4 hover:underline">
                <a href="#">
                  Meet the new Google Pixel Tablet thats helpful in your hands
                  and at home
                </a>
              </div>
              <div className="text-lg my-4 hover:underline">
                <a href="#">Pixel 7a: Built to perform, packed with value</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 text-center rounded-xl py-10 my-10">
        <h1 className="text-xl">
          Get the latest <samp className="text-blue-600">news from Google</samp>{" "}
          in your inbox.
        </h1>
        <div className="flex justify-center items-center my-4">
          <input
            className="text-lg pl-4 py-1 rounded text-black"
            type="email"
            placeholder="Email Address"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 text-lg rounded mx-4"
            type="submit"
          >
            Subscribe
          </button>
        </div>
        <p className="text-sm text-gray-400">
          Your information will be used in accordance with{" "}
          <a className="underline hover:no-underline" href="#">
            Googles privacy policy.
          </a>
        </p>
      </div>

      <div className="flex my-10 rounded-xl p-8 shadow-md hover:shadow-lg hover:shadow-gray-700 transition-all shadow-gray-600 flex-col-reverse lg:flex-row">
        <div className="lg:w-[65%]">
          <h1 className="font-bold text-4xl">
            Google I/O 2023: Making AI more helpful for everyone
          </h1>
          <p className="text-gray-600 text-lg my-8">
            Weve been applying AI to make our products radically more helpful
            for a while. With generative AI, were taking the next step.
          </p>
          <div className="flex items-center gap-6 ">
            <Image
              width={100}
              height={100}
              className="rounded-full"
              src="/Blogs/profile.webp"
              alt=""
            />
            <div>
              <h2 className="text-blue-600 font-medium">Sondor Pachai</h2>
              <h3>CEO of Google and Alphabet</h3>
            </div>
          </div>
        </div>
        <Image
          width={400}
          height={400}
          className="lg:w-[35%] rounded-lg w-full"
          src="/Blogs/hero-1.webp"
          alt=""
        />
      </div>

      <div className="my-10">
        <h1 className="text-3xl font-bold">More news</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          <div className="border border-gray-400 rounded-xl overflow-hidden">
            <div className="p-5">
              <p className="text-gray-600 my-3">ARTS & CULTURE</p>
              <a className="hover:underline text-xl font-medium" href="#">
                Learn about the worlds largest museum prize and its history
              </a>
            </div>
            <Image
              width={100}
              height={100}
              className="border-t border-gray-400 h-52 w-full"
              src="/Blogs/Museum.webp"
              alt="somting"
            />
          </div>
        </div>
      </div>

      <div className="my-10">
        <h1 className="text-3xl font-bold">All stories</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          <div className="flex p-4 rounded-xl border border-slate-400 hover:shadow-lg">
            <div className="w-2/3 text-lg">
              <h5 className="uppercase flex-nowrap pb-4">
                jun 01 | <span className="text-blue-600">wear os</span>
              </h5>
              <a href="#">
                How we trained Fitbits Body Response feature to detect stress
              </a>
            </div>
            <Image
              width={100}
              height={100}
              className="w-1/3"
              src="/Blogs/Smartwatch.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
