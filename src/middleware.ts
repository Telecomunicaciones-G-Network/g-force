import type { NextRequest } from 'next/server';

import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get('token')?.value;

  const publicRoutes = ['/login', '/factory'];

  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route),
  );

  if (token && pathname === '/login') {
    return NextResponse.redirect(new URL('/chat', request.url));
  }

  if (!token) {
    if (pathname === '/') {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    if (!isPublicRoute) {
      const loginUrl = new URL('/login', request.url);

      loginUrl.searchParams.set('redirect', pathname);

      return NextResponse.redirect(loginUrl);
    }
  }

  if (token && pathname === '/') {
    return NextResponse.redirect(new URL('/chat', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|_next).*)'],
};
