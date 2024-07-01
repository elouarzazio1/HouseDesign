import React ,{useState} from 'react';
import Image from "next/image";
import Link from "next/link";


interface Section1Props {
  // Define any props here if needed
}

const Section1: React.FC<Section1Props> = () => {
  // const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const questions = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces."
    },
    {
      title: "What is Next.js?",
      content: "Next.js is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR."
    }
  ]
  return (
  <section className='border-t border-gray-900 p-10 bg-gray-950/50 mt-20'>
            
    <div className='grid sm:grid-cols-2 sm:gap-20 container mx-auto'>
      <h2 className='font-polysans text-5xl font-bold mb-5'>
      Vos questions,    <br />
        Nos réponses
      </h2>

      <div className='flex flex-col gap-0 [&:has([open])_details:not([open])_summary]:text-gray-400'>
        <details className='class="group py-4 border-b border-gray-800 [&:last-child]:border-b-0"'>
          <summary className='flex items-center list-none cursor-pointer transition-color duration-200 [&::-webkit-details-marker]:hidden'>
          Puis-je utiliser ces designs à des fins commerciales ?

          <div className='ml-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6 hidden group-open:block">
        <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6 block text-gray-500 group-open:hidden">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
        </svg>
          </div>
          </summary>
         <p className='text-lg mt-2'>
         Absolument ! Si vous disposez d'un abonnement payant incluant l'usage commercial, vous avez le droit d'utiliser les designs à des fins professionnelles. Nos designs AI vous offrent une flexibilité maximale pour vos projets commerciaux.
         </p>
         </details>
      
    
        <details className='class="group py-4 border-b border-gray-800 [&:last-child]:border-b-0"'>
          <summary className='flex items-center list-none cursor-pointer transition-color duration-200 [&::-webkit-details-marker]:hidden'>
          Quel type d'input dois-je fournir pour obtenir de bons résultats ?

          <div className='ml-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6 hidden group-open:block">
        <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6 block text-gray-500 group-open:hidden">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
        </svg>
          </div>
          </summary>
         <p className='text-lg mt-2'>
         Que vous souhaitez relooker un espace existant ou créer un design à partir de zéro, notre IA est à la hauteur. Téléchargez des images, sélectionnez des éléments de design ou partez d'une page blanche - plus vous fournissez de détails, mieux notre IA pourra répondre à vos attentes. Notre technologie s'adapte à votre créativité pour des résultats sur mesure.
         </p>
        </details>
        <details className='class="group py-4 border-b border-gray-800 [&:last-child]:border-b-0"'>
          <summary className='flex items-center list-none cursor-pointer transition-color duration-200 [&::-webkit-details-marker]:hidden'>
          En quoi Housedesign se distingue-t-il des autres outils de design d'intérieur ?

          <div className='ml-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6 hidden group-open:block">
        <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6 block text-gray-500 group-open:hidden">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
        </svg>
          </div>
          </summary>
         <p className='text-lg mt-2'>
         Nous offrons bien plus qu'une simple technologie IA puissante ; nous la proposons via une interface intuitive, riche en options de personnalisation et en suggestions. Notre approche garantit une réponse efficace à vos besoins spécifiques en matière de design d'intérieur, alliant innovation et facilité d'utilisation.
         
           </p>
        </details>
        <details className='class="group py-4 border-b border-gray-800 [&:last-child]:border-b-0"'>
          <summary className='flex items-center list-none cursor-pointer transition-color duration-200 [&::-webkit-details-marker]:hidden'>
          Qui a développé Housedesign ?
          <div className='ml-auto'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6 hidden group-open:block">
        <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-6 h-6 block text-gray-500 group-open:hidden">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
        </svg>
          </div>
          </summary>
         <p className='text-lg mt-2'>
         Housedesign a été créé par Housebooking, une conciergerie Airbnb à Marrakech, avec l'aide de professionnels du secteur. Notre objectif ? Rendre les services de design IA accessibles à tous, tout en assurant la pérennité de notre entreprise. Nous combinons expertise locale et technologie de pointe pour révolutionner le design d'intérieur.
                  </p>
        </details>

     
      
   
    </div>
    </div>

  </section>
  );
};

export default Section1;
