import React from 'react';
import Image from "next/image";
import Link from "next/link";

interface Section1Props {
  // Define any props here if needed
}

const Section1: React.FC<Section1Props> = () => {
  return (
    <div className='mt-20 flex flex-col'>


        <div>
            <h2><span className=' sm:text-2xl lg:text-4xl text-purple-500 font-bold'>Beautiful Redesign and Stunning Transformations</span></h2>
            <h3 className='text-neutral-700 mt-4 sm:text-sm md:text-base lg:text-lg xl:text-xl'>
Want to make your home look stunning inside and out? Our Beautiful Redesign interior ai feature can do just that. It helps you change up your place in different styles, making it look amazing. Redesign any type of interior, exteriors or gardens.</h3>
        </div>
         <Link href={'/sign-in'}>
         <button 
            className="bg-purple-600 text-white font-bold py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-10 rounded-md hover:bg-purple-700 transition duration-300 ease-in-out"
          >
            Commencer
          </button>


         
         </Link>
     <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg">Chambre Originale</h3>
                <Image
                  alt="Photo originale d'une chambre avec roomGPT.io"
                  src="/original-pic.jpg"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg">Chambre Générée</h3>
                <Image
                  alt="Photo générée d'une chambre avec roomGPT.io"
                  width={400}
                  height={400}
                  src="/generated-pic-2.jpg"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Section1;
