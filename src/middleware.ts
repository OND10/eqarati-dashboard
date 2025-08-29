import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  async function middleware(req) {
    if (req.nextUrl.pathname === '/') {
      return NextResponse.redirect(new URL('/dashboard/overview', req.url));
    }
    return NextResponse.next();
  },
  {
    callbacks: {
      async authorized() {
        return true;
      }
    }
  }
);

export const config = {
  matcher: ['/((?!_next|api/auth).*)']
};
