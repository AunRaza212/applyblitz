// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  const response = NextResponse.next();

  // Set Content Security Policy with 'unsafe-inline'
  response.headers.set(
    'Content-Security-Policy',
    "script-src 'self' 'unsafe-inline' https://pay.google.com; frame-ancestors 'none';"
  );

  return response;
}
