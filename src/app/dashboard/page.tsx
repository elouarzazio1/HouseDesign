
import { auth, currentUser } from '@clerk/nextjs';

import DreamPage from '@/components/Dream';

export default async function DashboardPage() {
  const { userId } = auth();

  console.log(userId)
  const user = await currentUser();

  if (!userId || !user) {
    return <div>You are not logged in</div>;
  }
  return (
    <div className='mt-10 text-start p-5'>
      <DreamPage/>
    </div>
  );
}



