"use client";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function InvoiceForm() {
    const form = useRef();
    const [captchaToken, setCaptchaToken] = useState(null);

   const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaToken) {
        toast.error("Please verify that you're not a robot.");
        return;
    }

    emailjs
        .sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
            toast.success("Message sent successfully!", {
                onClose: () => {
                    if (form.current) {
                        form.current.reset();
                    }
                    setCaptchaToken(null);
                }
            });
        })
        .catch((err) => {
            console.error("Email error:", err);
            toast.error("Failed to send message. Please try again later.");
        });
};
const sitekey = process.env.NEXT_PUBLIC_INVOICEFORM_RECAPTCHA

    return (
        <div className="flex justify-center items-center p-4">
            <form
                ref={form}
                onSubmit={sendEmail}
                className="w-full max-w-md bg-gray-900 p-8 rounded-lg shadow-lg space-y-6"
            >
                <h2 className="text-2xl font-bold text-yellow-400 text-center mb-4">
                    Invoice Request Form
                </h2>

                <input
                    name="firstname"
                    type="text"
                    placeholder="First Name"
                    required
                    className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <input
                    name="lastname"
                    type="text"
                    placeholder="Last Name"
                    required
                    className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />

                <input
                    name="country"
                    type="text"
                    placeholder="Your Country"
                    required
                    className="w-full p-3 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <ReCAPTCHA
                    sitekey={sitekey}
                    onChange={(token) => setCaptchaToken(token)}
                    theme="light"
                />

                <button
                    type="submit"
                    className="w-full py-3 h-full px-6 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-semibold transition-all duration-300 ease-in"
                >
                    Submit
                </button>

                <ToastContainer position="top-center" />
            </form>
        </div>
    );
}
