"use client";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getNames } from "country-list";

export default function InvoiceForm() {
    const form = useRef();
    const [captchaToken, setCaptchaToken] = useState(null);
    const countries = getNames();

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
                    },
                });
            })
            .catch((err) => {
                console.error("Email error:", err);
                toast.error("Failed to send message. Please try again later.");
            });
    };

    const sitekey = process.env.NEXT_PUBLIC_INVOICEFORM_RECAPTCHA;

    return (
        <div className="flex justify-center items-center p-4">
            <form
                ref={form}
                onSubmit={sendEmail}
                className="w-full max-w-2xl bg-gray-900 p-8 rounded-lg shadow-lg space-y-6"
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

                <div className="relative">
                    <select
                        name="country"
                        required
                        defaultValue=""
                        className="w-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 rounded-md px-3 py-3 pr-10 appearance-none"
                    >
                        <option value="" disabled>Select your country</option>
                        {countries.map((country) => (
                            <option key={country} value={country}>{country}</option>
                        ))}
                    </select>

                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 011.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0l-4.25-4.65a.75.75 0 01.02-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>


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
