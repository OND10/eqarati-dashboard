import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextRequest } from 'next/server';
import { getToken } from 'next-auth/jwt';
import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import { redirect } from 'next/dist/server/api-utils';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default withAuth(
  async function middleware(request) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET
    });
    const isIndexpage = request.nextUrl.pathname === '/';
    const isAuthRoute = authRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route)
    );
    const isVerifyRoute = verifyRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route)
    );
    const isGuestRoute = guestRoutes.some((route) =>
      request.nextUrl.pathname.startsWith(route)
    );

    if (!token && (isAuthRoute || isVerifyRoute)) {
      const redirectUrl = new URL('/login', request.url);
      redirectUrl.searchParams.set('callbackUrl', request.nextUrl.href);
      return NextResponse.redirect('/dashboard/overview');
      // return NextResponse.redirect(redirectUrl);
    }

    if (token) {
      if (!token.email_verified_at && !isVerifyRoute) {
        // return NextResponse.redirect(new URL("/request-email-verification", request.url));
        return NextResponse.redirect('/dashboard/overview');
      }

      if (isIndexpage || isGuestRoute || isVerifyRoute) {
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      }
    }
  }
);

const authRoutes = ['/dashboard(.*)'];
const verifyRoutes = ['/request-email-verification', '/verify-email'];
const guestRoutes = [
  '/forgot-password',
  '/login',
  '/password-reset',
  '/register'
];

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)'
  ]
};
