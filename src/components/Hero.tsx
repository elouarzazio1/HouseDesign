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
      
        <h3 className='font-polysans text-4xl sm:text-6xl font-extrabold sm:max-w-2xl'>
        Créez votre intérieur de rêve avec l'IA
      </h3>
      <h3 className='mt-4 text-2xl sm:text-3xl leading-snug text-gray-200 break-keep max-w-2xl'>
      Transformez vos idées en designs d'intérieur professionnels grâce à notre logiciel IA
    {/* <span 
        style={{backgroundSize: '200%'}} 
        className='font-bold bg-clip-text animate-gradient px-2 -mx-2 text-transparent bg-gradient-to-r from-orange-500 via-red-400 to-yellow-500'
    > */}
        
    {/* </span>  */}
    
</h3>
<div className="flex gap-4 mt-4 text-lg justify-center">
        <Link href="/dashboard">
          <div className='transition-colors duration-200 block font-medium bg-teal-600 hover:bg-teal-500 border border-teal-500 hover:border-teal-300 rounded px-5 py-2 '>
            Essayer Gratuitement
            </div>
        </Link>
        

        </div>



        <div className='text-base mt-4 text-gray-400'>
        1602 personnes ont déjà essayé house design!
        </div>
        </div>
        
  
  );
};

