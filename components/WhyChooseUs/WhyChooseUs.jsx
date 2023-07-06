import React from 'react';
import Image from 'next/image';

const WhyChooseUs = () => {
   return (
     <>
       <section>
         <h1 className="font-bold text-center text-xl md:ml-3 headingTag md:text-6xl">
           Why Choose Mark 1 Soft ?
         </h1>
         <section className="text-gray-600 body-font">
           <div className="container px-5 py-12 mx-auto flex flex-wrap">
             <div className="flex flex-wrap w-full justify-evenly">
               <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                 <div className="flex relative pb-12">
                   <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                     <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                   </div>
                   <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                     <svg
                       fill="none"
                       stroke="currentColor"
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       stroke-width="2"
                       className="w-5 h-5"
                       viewBox="0 0 24 24"
                     >
                       <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                     </svg>
                   </div>
                   <div className="flex-grow pl-4">
                     <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                       STEP 1
                     </h2>
                     <p className="leading-relaxed">
                       MARK 1 Soft excels in creating Best Quality Designs that
                       seamlessly blend aesthetics and functionality, boosting
                       user engagement and search engine visibility.
                     </p>
                   </div>
                 </div>
                 <div className="flex relative pb-12">
                   <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                     <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                   </div>
                   <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                     <svg
                       fill="none"
                       stroke="currentColor"
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       stroke-width="2"
                       className="w-5 h-5"
                       viewBox="0 0 24 24"
                     >
                       <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                     </svg>
                   </div>
                   <div className="flex-grow pl-4">
                     <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                       STEP 2
                     </h2>
                     <p className="leading-relaxed">
                       Our 24 x 7 Live Support ensures uninterrupted assistance,
                       enabling swift issue resolution and enhancing customer
                       satisfaction, resulting in improved SEO performance.
                     </p>
                   </div>
                 </div>
                 <div className="flex relative pb-12">
                   <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                     <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                   </div>
                   <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                     <svg
                       fill="none"
                       stroke="currentColor"
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       stroke-width="2"
                       className="w-5 h-5"
                       viewBox="0 0 24 24"
                     >
                       <circle cx="12" cy="5" r="3"></circle>
                       <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                     </svg>
                   </div>
                   <div className="flex-grow pl-4">
                     <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                       STEP 3
                     </h2>
                     <p className="leading-relaxed">
                       With Unlimited Revisions, we guarantee client delight by
                       providing flexibility to refine projects until they meet
                       the highest standards, leading to better search engine
                       rankings.
                     </p>
                   </div>
                 </div>
                 <div className="flex relative pb-12">
                   <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                     <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                   </div>
                   <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                     <svg
                       fill="none"
                       stroke="currentColor"
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       stroke-width="2"
                       className="w-5 h-5"
                       viewBox="0 0 24 24"
                     >
                       <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                       <circle cx="12" cy="7" r="4"></circle>
                     </svg>
                   </div>
                   <div className="flex-grow pl-4">
                     <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                       STEP 4
                     </h2>
                     <p className="leading-relaxed">
                       {" "}
                       At MARK 1 Soft, we prioritize customer success even after
                       project completion, offering dedicated After-Sale Support
                       that contributes to positive online reputation and
                       improved SEO rankings.
                     </p>
                   </div>
                 </div>
                 <div className="flex relative">
                   <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                     <svg
                       fill="none"
                       stroke="currentColor"
                       stroke-linecap="round"
                       stroke-linejoin="round"
                       stroke-width="2"
                       className="w-5 h-5"
                       viewBox="0 0 24 24"
                     >
                       <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                       <path d="M22 4L12 14.01l-3-3"></path>
                     </svg>
                   </div>
                   <div className="flex-grow pl-4">
                     <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                       FINISH
                     </h2>
                     <p className="leading-relaxed">
                       With a focus on Super Fast Delivery and unwavering
                       commitment to Client Satisfaction, MARK 1 Soft delivers
                       SEO-friendly solutions that propel businesses forward in
                       the digital landscape.
                     </p>
                   </div>
                 </div>
               </div>
               <div className="lg:w-2/5 md:w-[50%] md:pr-10 md:py-6">
                 <Image
                   width={500}
                   height={500}
                   className="lg:w-full md:w-full object-cover object-center rounded-lg md:mt-0 mt-12"
                   src="/coFounder.jpeg"
                   alt="Co-Founder Image"
                 />
               </div>
             </div>
           </div>
         </section>
       </section>
     </>
   );
};

export default WhyChooseUs;