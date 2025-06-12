"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
// import WhatsAppChat from "../../components/WhatsappButton"; // Import the WhatsAppChat component
// import EmailButton from "@/components/EmailButton";
import InvoiceForm from "@/components/InvoiceForm";

const packages = {
  "kickstart-your-career": {
    title: "Kickstart Your Career",
    price: "$199.99",
    applications: "500 applications/month",
    description:
      "Perfect for recent graduates or those just starting in the industry. Get tailored job applications and guidance to launch your career.",
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
      "The premium package is tailored for experienced professionals seeking to make a significant career shift. Benefit from customized job applications and personalized consultations.",
    features: [
      "Receive highly customized job applications.",
      "Get one-on-one career coaching sessions.",
      "Revamp your executive resume and LinkedIn profile.",
      "Access premium executive-level job boards.",
      "Prepare for interviews with personalized support.",
    ],
  },
};


export default function PackageDetail() {
    const params = useParams();
    const packageData = packages[params?.id];

    if (!packageData) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
                <h1 className="text-2xl font-bold">Package not found</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-900 text-white">
            {/* Hero Section */}
            <div className="bg-gray-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold text-yellow-400 mb-4">
                        {packageData.title}
                    </h1>
                    <p className="text-xl text-gray-300 mb-8">{packageData.description}</p>
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
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <h2 className="text-3xl font-bold text-yellow-400 mb-8 text-center">
                    What&apos;s Included
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packageData.features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-8 rounded-lg shadow-lg text-center"
                        >
                            <span className="text-2xl text-yellow-400 mb-4">✨</span>
                            <h3 className="text-xl font-semibold mb-4">{feature}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-800 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-yellow-400 mb-8">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Please provide your details so we can prepare your invoice and begin the process promptly.
                    </p>
                    {/* Use the WhatsAppChat component with the new class */}
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                       <InvoiceForm/>
                    </div>
                </div>
            </div>
        </div>
    );
}