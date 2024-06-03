import Head from "next/head";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function About() {
  const cardVariants = {
    hidden: {
      x: -1000,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 3,
        ease: "easeOut",
      },
    },
  };

  return (
    <Layout>
      <Head>
        <title>About Us - Event Management Company</title>
        <meta
          name="description"
          content="Learn more about our event management company."
        />
      </Head>
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-6">About Us</h1>
        <p className="text-xl mb-6">
          We are passionate about organizing amazing events.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <motion.div
            className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg about-item"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p>
              To deliver unforgettable events with a focus on excellence and
              innovation.
            </p>
          </motion.div>
          <motion.div
            className="bg-purple-500 text-white p-6 rounded-lg shadow-lg about-item"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p>
              To be the leading event management company known for our
              creativity and service.
            </p>
          </motion.div>
          <motion.div
            className="bg-indigo-500 text-white p-6 rounded-lg shadow-lg about-item"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p>
              A dedicated team of professionals with a passion for event
              planning.
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
