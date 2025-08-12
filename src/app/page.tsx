import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

export default async function Page() {
  const { userId } = await auth();


  console.log("===========");
  console.log("===========");
  console.log("===========");
  console.log("===========");
  console.log(userId);
  // if (userId) {
  return redirect('/dashboard/overview');
  // } else {
  // redirect('/dashboard/overview');
  // }
}
