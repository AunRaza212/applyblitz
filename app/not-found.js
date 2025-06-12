import Link from "next/link";
export const metadata = {
  title: "Page Not Found | ApplyBlitz",
  description: "Sorry, this page could not be found.",
  robots: "noindex",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl font-bold text-yellow-400 mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-gray-300 mb-8 max-w-xl">
        Sorry, the page you are looking for doesn't exist or may have been moved.
      </p>
      <Link
        href="/"
        className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  );
}
