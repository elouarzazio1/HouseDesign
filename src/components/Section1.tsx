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
        Your questions ,
        <br />
        answered
      </h2>

      <div className='flex flex-col gap-0 [&:has([open])_details:not([open])_summary]:text-gray-400'>
        <details className='class="group py-4 border-b border-gray-800 [&:last-child]:border-b-0"'>
          <summary className='flex items-center list-none cursor-pointer transition-color duration-200 [&::-webkit-details-marker]:hidden'>Can I use these designs commercially?

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
          "Certainly! If you're a user with a paid subscription that supports commercial usage, you have the rights to use the designs for commercial purposes. But remember, rights for personal and commercial use depend on the type of subscription you hold. Always ensure your usage aligns with your subscription terms."
         </p>
         </details>
      
    
        <details className='class="group py-4 border-b border-gray-800 [&:last-child]:border-b-0"'>
          <summary className='flex items-center list-none cursor-pointer transition-color duration-200 [&::-webkit-details-marker]:hidden'>What type of input should I provide to get good results?

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
         Whether you want to restyle an existing space or create a design from scratch, our AI can handle it. You can upload images, select design elements or even create from scratch - the more detail you provide, the better our AI can meet your expectations.
         </p>
        </details>
        <details className='class="group py-4 border-b border-gray-800 [&:last-child]:border-b-0"'>
          <summary className='flex items-center list-none cursor-pointer transition-color duration-200 [&::-webkit-details-marker]:hidden'>How does Room AI differ from other interior design tools??

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
         Since our launch in September 2022, several competitors have emerged, applying similar AI technology in predictable ways. Room AI goes a step further by collaborating with users and industry experts. As a result, we offer more than just powerful AI technology; we deliver it through an easy-to-use interface, packed with a variety of customization options and suggestions such as color palettes and materials, ensuring that we effectively cater to your needs.         </p>
        </details>
        <details className='class="group py-4 border-b border-gray-800 [&:last-child]:border-b-0"'>
          <summary className='flex items-center list-none cursor-pointer transition-color duration-200 [&::-webkit-details-marker]:hidden'>Is payment secure?

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
         Absolutely. We use Stripe, a leading global payment processor, to ensure your transactions are secure. Stripe securely stores your credit card details in compliance with data protection regulations.
                  </p>
        </details>

        <details className='class="group py-4 border-b border-gray-800 [&:last-child]:border-b-0"'>
          <summary className='flex items-center list-none cursor-pointer transition-color duration-200 [&::-webkit-details-marker]:hidden'>How do you handle my data and respect my privacy?

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
         We take your privacy seriously and are committed to keeping your uploads confidential. We assure you that we will not publish any outputs of your account on our homepage or anywhere else without your explicit permission. We follow stringent data management practices to protect your data. For more detailed information on how we handle and protect your data, please check out our                   </p>
        </details>

        <details className='class="group py-4 border-b border-gray-800 [&:last-child]:border-b-0"'>
          <summary className='flex items-center list-none cursor-pointer transition-color duration-200 [&::-webkit-details-marker]:hidden'>Do I still need an interior designer??

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
         Since our launch in May 2024, several competitors have emerged, applying similar AI technology in predictable ways. House Design AI goes a step further by collaborating with users and industry experts. As a result, we offer more than just powerful AI technology; we deliver it through an easy-to-use interface, packed with a variety of customization options and suggestions such as color palettes and materials, ensuring that we effectively cater to your needs.                 </p>
        </details>
      
   

        <details className='class="group py-4 border-b border-gray-800 [&:last-child]:border-b-0"'>
          <summary className='flex items-center list-none cursor-pointer transition-color duration-200 [&::-webkit-details-marker]:hidden'>Who created House Design AI?

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
         I, Othmane, I developed House Design AI with the help of input from industry professionals. Through extensive use of AI technology while developing Room AI, I'm able to offer House Design AI's services at an affordable price while ensuring a sustainable business.                  </p>
        </details>
      
   
    </div>
    </div>

  </section>
  );
};

export default Section1;
