import Head from "next/head";
import Layout from "../components/Layout";

export default function Contact() {
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
        <div className="mx-auto w-full max-w-lg">
          <div className="bg-gray-700 text-white p-6 rounded-lg shadow-lg">
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
        </div>
      </div>
    </Layout>
  );
}
