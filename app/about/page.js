import React from "react"; // No "use client"
import "../../styles/global.css";

export const metadata = {
  title: "About Us | Dream Big Achieve Bigger",
  description: "Learn about our mission to help professionals land their dream jobs.",
  keywords: "about job services, mission, career help",
  robots: "index, follow",
  openGraph: {
    title: "About Us | Dream Big Achieve Bigger",
    description: "Learn about our mission to help professionals land their dream jobs.",
    type: "website",
    url: "https://www.applyblitz.com/about",
    siteName: "ApplyBlitz",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Dream Big Achieve Bigger",
    description: "Learn about our mission to help professionals land their dream jobs.",
  },
};

export default function AboutPage() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center py-16 px-4">
      {/* About Us Section */}
      <section className="w-full max-w-4xl mb-16 text-center">
        <h1 className="text-5xl font-bold text-yellow-400 py-4 border-b-4 border-yellow-400 inline-block">
          ABOUT US
        </h1>
      </section>

      {/* Who Are We Section */}
      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold text-white px-4 py-2 mb-6 bg-yellow-400 inline-block rounded-sm">
          WHO ARE WE?
        </h2>
        <p className="text-gray-300 leading-relaxed mb-6">
          ApplyBlitz was founded with a mission to simplify the job application process and empower individuals to achieve their career goals. We specialize in reviewing CVs and resumes and applying to jobs on behalf of our clients, ensuring they stand out in competitive job markets.
        </p>
        <p className="text-gray-400 leading-relaxed">
          Our services are designed for fresh graduates starting their professional journeys and experienced professionals seeking a career transition. By understanding our clients' unique strengths and aspirations, we help them navigate the complexities of the job market with confidence.
        </p>
      </section>

      {/* Vision Section */}
      <section className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-semibold text-white px-4 py-2 mb-6 bg-yellow-400 inline-block rounded-sm">
          VISION
        </h2>
        <p className="text-gray-300 italic">
          To bridge the gap between talent and opportunity by providing seamless, personalized job application support that helps individuals thrive in their chosen careers.
        </p>
      </section>

      {/* Core Values Section */}
      <section className="w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">CORE VALUES</h2>
        <p className="text-gray-400 mb-6">
          At ApplyBlitz, our core values guide everything we do to ensure exceptional service and results:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            <strong>Empathy:</strong> We understand the challenges of job seekers and offer tailored solutions to meet their needs.
          </li>
          <li>
            <strong>Excellence:</strong> We aim to deliver high-quality services that maximize our clients' chances of success.
          </li>
          <li>
            <strong>Integrity:</strong> We operate with honesty and transparency in every step of the process.
          </li>
          <li>
            <strong>Innovation:</strong> We leverage modern tools and industry insights to craft standout applications.
          </li>
          <li>
            <strong>Inclusivity:</strong> We support job seekers from all walks of life, regardless of background or experience level.
          </li>
          <li>
            <strong>Commitment:</strong> Your success is our success. We're with you every step of the way.
          </li>
        </ul>
      </section>
    </div>
  );
}
