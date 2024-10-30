/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['picsum.photos'], // Add the hostname here
    },
    headers: [
      {
        key: 'Content-Security-Policy',
        value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://pay.google.com 'unsafe-eval';",
      },
    ],
  };
  
  export default nextConfig;
  