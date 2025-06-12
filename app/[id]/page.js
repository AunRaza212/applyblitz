import Link from "next/link";
import InvoiceForm from "@/components/InvoiceForm";
import { notFound } from "next/navigation";

// Define packages (you can move this to `lib/packageData.js`)
const packages = {
  "kickstart-your-career": {
    title: "Kickstart Your Career",
    price: "$199.99",
    applications: "500 applications/month",
    description:
      "Perfect for recent graduates or those just starting in the industry. Get tailored job applications and career guidance to launch your career.",
    features: [
      "Receive tailored job applications every month.",
      "Get career guidance from industry professionals.",
      "Improve your resume and LinkedIn profile.",
      "Access exclusive job boards curated for you.",
      "Track progress through monthly review sessions.",
    ],
  },
  "executive-career-transition": {
    title: "Executive Career Transition",
    price: "$349.99",
    applications: "1000 applications/month",
    description:
      "Tailored for experienced professionals seeking major career transitions. Includes customized job applications and personalized coaching.",
    features: [
      "Receive highly customized job applications.",
      "Get one-on-one career coaching sessions.",
      "Revamp your executive resume and LinkedIn profile.",
      "Access premium executive-level job boards.",
      "Prepare for interviews with personalized support.",
    ],
  },
};

// ✅ SEO Metadata Generator
export async function generateMetadata({ params }) {
  const pkg = packages[params.id];

  if (!pkg) {
    return {
      title: "Package Not Found | ApplyBlitz",
      description: "This job application support package does not exist.",
      robots: "noindex",
    };
  }

  return {
    title: `${pkg.title} | ApplyBlitz`,
    description: pkg.description,
    keywords: `${pkg.title.toLowerCase()}, job application service, resume help, career coaching, ApplyBlitz`,
    openGraph: {
      title: `${pkg.title} | ApplyBlitz`,
      description: pkg.description,
      url: `https://www.applyblitz.com/${params.id}`,
      siteName: "ApplyBlitz",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pkg.title} | ApplyBlitz`,
      description: pkg.description,
    },
  };
}

// ✅ Page Component
export default function PackageDetail({ params }) {
  const packageData = packages[params?.id];

  // ⛔ Trigger 404 if invalid ID
  if (!packageData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="bg-gray-800 py-20 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            {packageData.title}
          </h1>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            {packageData.description}
          </p>
          <p className="text-3xl font-bold text-yellow-400 mb-8">
            {packageData.price}
          </p>
          <Link
            href="/"
            className="bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-all duration-300"
          >
            Go Back
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-yellow-400 mb-12">
            What’s Included in {packageData.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packageData.features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transition-transform"
              >
                <span className="text-3xl text-yellow-400 mb-2 block">✨</span>
                <h3 className="text-lg font-semibold text-white">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Invoice Section */}
      <section className="bg-gray-800 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-6">
            Ready to Get Started with {packageData.title}?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            Fill out your details below so we can generate your invoice and begin your job application journey.
          </p>
          <div className="max-w-2xl mx-auto">
            <InvoiceForm />
          </div>
        </div>
      </section>
    </div>
  );
}
  