import Head from "next/head";
import Layout from "../components/Layout";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Contact() {
  const contactDetailsRef = useRef(null);
  const contactFormRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      contactDetailsRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5 }
    );
    gsap.fromTo(
      contactFormRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5 }
    );
  }, []);

  return (
    <Layout>
      <Head>
        <title>Contact Us - Event Management Company</title>
        <meta
          name="description"
          content="Get in touch with our event management team."
        />
      </Head>
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl mb-6">We would love to hear from you.</p>
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-12 mx-auto w-full max-w-4xl">
          {/* Contact Details */}
          <div
            className="bg-gray-700 text-white p-6 rounded-lg shadow-lg md:w-1/2 flex flex-col justify-between"
            ref={contactDetailsRef}
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
              <p className="mb-2">
                <strong>Email:</strong> info@eventmanagement.com
              </p>
              <p className="mb-2">
                <strong>Phone:</strong> +1 (123) 456-7890
              </p>
              <p className="mb-2">
                <strong>Address:</strong> 123 Event Street, City, Country
              </p>
              <p className="mb-2">
                <strong>Follow Us:</strong> Facebook | Twitter | Instagram
              </p>
            </div>
            <hr />
            <p className="mt-4">
              We're here to help you with any questions or concerns you may
              have. Feel free to reach out to us anytime!
            </p>
          </div>
          <div className="hidden md:block bg-gray-300 h-100 w-0.5"></div>
          {/* Contact Form */}
          <div
            className="bg-gray-700 text-white p-6 rounded-lg shadow-lg md:w-1/2"
            ref={contactFormRef}
          >
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-200 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-600"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
