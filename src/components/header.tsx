import { UserButton, auth } from '@clerk/nextjs';
import Link from 'next/link';

export default function Header() {
  const { userId } = auth();
  
  return (
      <div className="flex flex-row xsm:flex-row items-center gap-2 space-between py-2 sm:py-4 px-3 sm:px-6 text-lg border-b border-gray-800 sticky top-0 z-10 backdrop-blur-lg bg-black">
        
          <div className='text-white'>
           
              <h2 className='sm:mr-12 shrink-0 font-bold text-clip '>  
                <Link href='/'>House Design</Link>
              </h2>
            </div>
            <div className='flex items-center gap-2 ml-auto'>
              {userId ? (
                <div className='relative ml-3'>
                  <UserButton afterSignOutUrl='/' />
                </div>
              ) : (
                <div className='flex space-x-4'>
                  <div className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'> 
                    <Link href='/sign-up'>S'inscrire</Link> 
                  </div>
                  <div className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'>
                    <Link href='/sign-in'>Se Connecter</Link>
                  </div>
                </div>
              )}
          
         
      </div>
      </div>  
  );
}
