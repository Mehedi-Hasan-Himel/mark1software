import React from 'react';
import Link from 'next/link';

const Button = ({title,route}) => {

   return (
     <>
       {/* Button Start */}
       <section>
         <Link href={route} className="">
           <button className="btn hover:bg-neutral btn-outline border-2 rounded-2xl w-36 text-[11px] font-bold px-0 md:w-[150px] lg:w-[200px] text-center ">
             {title}
           </button>
         </Link>
       </section>
       {/* Button End */}
     </>
   );
};

export default Button;