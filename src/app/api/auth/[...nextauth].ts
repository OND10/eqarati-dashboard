import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // 🚀 Always return a fake user for now
        return { id: '1', name: 'Test User', email: 'test@example.com' };
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' }
});

export { handler as GET, handler as POST }; // ✅ for Next.js App Router
export default handler; // ✅ for Next.js Pages Router
