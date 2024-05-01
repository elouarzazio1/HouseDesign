import Link from 'next/link';
import React from 'react';

interface HeroProps {
//   onButtonClick: () => void;
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col sm:flex-row  items-center justify-between">
        
        <div className="flex flex-col w-full 2xl:w-1/2 sm:w-1/2  justify-center items-start text-left px-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mt-0 mb-6">Redessinez des <span className=' text-purple-700 text-ellipsis font-bold '>Motifs</span> avec l'IA, en moins de 30 secondes</h1>
          <p className="text-sm sm:text-md lg:text-lg mb-6 text-gray-700 " >Téléchargez votre photo, choisissez un mode et sélectionnez parmi plus de 75 styles de design. Réinventez n'importe quel intérieur, extérieur ou jardin de maison à l'aide de l'IA.</p>
         <Link href={'/sign-in'}>
         <button 
            className="bg-purple-600 text-white font-bold py-2 sm:py-3 lg:py-4 px-4 sm:px-6 lg:px-8 mt-6 sm:mt-8 lg:mt-10 rounded-md hover:bg-purple-700 transition duration-300 ease-in-out"
          >
            Commencer
          </button>
         
         </Link>
        </div>
        <div className="w-full sm:w-1/2  py-4 sm:py-6 lg:py-8 text-center">
          <img className="w-full rounded-lg" 
          src="/original-pic.jpg" 
          alt="Avant et après la refonte"
          width={500}
          height={400}
         
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
