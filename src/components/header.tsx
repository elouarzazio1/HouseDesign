import { UserButton, auth } from '@clerk/nextjs';
import Link from 'next/link';

export default function Header() {
  const { userId } = auth();
  
  return (
      <div className=' bg-white text-black shadow'>
        <div className='container mx-auto flex items-center justify-between py-4'>
        <h2 className='text-2xl  font-bold'>  <Link href='/'>Conception de Maison</Link></h2>
          <div>
            {userId ? (
              <div className='flex gap-4 items-center'>
                <Link href='/dashboard'>Tableau de Bord</Link>
                <UserButton afterSignOutUrl='/' />
              </div>
            ) : (
              <div className='flex gap-4 items-center'>
                <div className='hover:text-xl hover:border-collapse hover:bg-slate-900 hover:p-2 hover:text-white hover:rounded-md'> 
                    <Link href='/sign-up'>
                    </Link>
                    <Link href='/sign-up'>S'inscrire</Link> 
                </div>
                <div className=' active:bg-white text-xl border-collapse bg-slate-900 p-2 text-white rounded-md'>
                <Link href='/sign-in'>Se Connecter</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
  );
}
