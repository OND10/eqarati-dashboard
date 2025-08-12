import { UserProfile, useUser } from '@clerk/nextjs';

export default function ProfileViewPage() {
  const { isSignedIn } = useUser();
  if (!isSignedIn) return null;
  return (
    <div className='flex w-full flex-col p-4'>
      <UserProfile />
    </div>
  );
}
