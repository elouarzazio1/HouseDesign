import Link from 'next/link';
import React from 'react';

import { auth, currentUser } from '@clerk/nextjs';



export default function Hero(){

const { userId } = auth();
const user =  currentUser();

// if (!userId || !user) {
//   return <div>You are not logged in</div>;

// }

  return (
    <div className=" container mx-auto mb-10 items-center justify-center text-center flex flex-col p-8 sm:p-16 ">
      
        <h3 className='font-polysans text-5xl sm:text-8xl font-extrabold sm:max-w-2xl'>
      Design your   dream home
      </h3>
      <h3 className='mt-4 text-2xl sm:text-3xl leading-snug text-gray-200 break-keep max-w-2xl'>
    Turn your ideas into professional interior designs with our easy-to-use AI
    {/* <span 
        style={{backgroundSize: '200%'}} 
        className='font-bold bg-clip-text animate-gradient px-2 -mx-2 text-transparent bg-gradient-to-r from-orange-500 via-red-400 to-yellow-500'
    > */}
        
    {/* </span>  */}
    software
</h3>
<div className="flex gap-4 mt-4 text-lg justify-center">
        <a href="" className='transition-colors duration-200 block font-medium bg-teal-600 hover:bg-teal-500 border border-teal-500 hover:border-teal-300 rounded px-5 py-2'>Try free demo</a>
        <a href="" className='transition-colors duration-200 block bg-gray-800 hover:bg-gray-700 rounded text-gray-400 hover:text-gray-300 border border-gray-700 hover:border-gray-500 px-4 py-2'>Start Now</a>

        </div>



        <div className='text-base mt-4 text-gray-400'>
        1602 other people already tried it today!
        </div>
        </div>
        
  
  );
};

