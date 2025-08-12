import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const { userId } = await auth();

  // if (!userId) {
    // retur/n r  edirect('/auth/sign-in');
  // } else {
    return redirect('/dashboard/overview');
  // }
}
