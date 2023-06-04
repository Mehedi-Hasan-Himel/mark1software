import React from 'react';
import Image
   from 'next/image';
const Banner = () => {
   return (
     <>
       {/* Banner Start */}
       <section className="text-gray-600 body-font overflow-hidden">
         <div className="container px-5 py-12 mx-auto">
           <div className="lg:w-4/5 mx-auto flex flex-wrap gap-5">
             <div className="lg:w-[30%] w-full lg:mb-0">
               <div className=" flex justify-end">
                 <Image
                   width={1000}
                   height={1000}
                   alt="star"
                   className=" w-20 "
                   src="/experienceWith/star-1.png"
                 />
               </div>
               <h1 className="text-gray-900 text-4xl title-font font-bold mb-4">
                 Elevate your website with our dynamic page building solutions.
               </h1>
               <div className=" flex lg:-ml-20">
                 <Image
                   width={1000}
                   height={1000}
                   alt="star"
                   className=" w-20 "
                   src="/experienceWith/star-1.png"
                 />
               </div>
             </div>
             <Image
               width={500}
               height={500}
               alt="form-image"
               className="lg:w-[65%] w-full "
               src="/experienceWith/form-img.webp"
             />
           </div>
         </div>
       </section>
       {/* Banner End */}
     </>
   );
};

export default Banner;