import Head from "next/head";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

export default function Services() {
  const cardVariants = {
    hidden: {
      x: 1000,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 3.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <Layout>
      <Head>
        <title>Services - Event Management Company</title>
        <meta
          name="description"
          content="Discover our wide range of event management services."
        />
      </Head>
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-xl mb-6">
          We offer a variety of services to make your event a success.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <motion.div
            className="bg-teal-500 text-white p-6 rounded-lg shadow-lg about-item"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
          >
            <h2 className="text-2xl font-bold mb-4">Event Planning</h2>
            <p>Comprehensive event planning services tailored to your needs.</p>
          </motion.div>
          <motion.div
            className="bg-orange-500 text-white p-6 rounded-lg shadow-lg about-item"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-4">Venue Selection</h2>
            <p>
              Find the perfect venue to host your event with our expert
              guidance.
            </p>
          </motion.div>
          <motion.div
            className="bg-pink-500 text-white p-6 rounded-lg shadow-lg about-item"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-4">Catering Services</h2>
            <p>Delicious catering options to delight your guests.</p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}
