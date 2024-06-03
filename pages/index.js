import Head from "next/head";
import { motion } from "framer-motion";
import Layout from "../components/Layout";
// import LocomotiveScroll from "../components/locomotivescroll";

export default function Home() {
  const corporateEvents = [
    {
      title: "Product Launch",
      details:
        "Launch your product in style with our meticulously planned event.",
    },
    {
      title: "Conference",
      details:
        "Host productive conferences that engage your audience and foster collaboration.",
    },
    {
      title: "Team Building",
      details:
        "Boost team morale and cohesion with our innovative team-building activities.",
    },
    {
      title: "Seminars",
      details:
        "Informative seminars delivered with professionalism and expertise.",
    },
    {
      title: "Workshops",
      details:
        "Interactive workshops tailored to your organization's specific goals.",
    },
    {
      title: "Trade Shows",
      details:
        "Showcase your brand and products at trade shows that attract attention.",
    },
  ];

  const weddingEvents = [
    {
      title: "Destination Weddings",
      details: "Say 'I do' in breathtaking locations around the world.",
    },
    {
      title: "Traditional Ceremonies",
      details: "Experience timeless traditions in elegant settings.",
    },
    {
      title: "Themed Weddings",
      details:
        "Create a wedding that reflects your unique style and personality.",
    },
    {
      title: "Intimate Celebrations",
      details:
        "Celebrate your love with close friends and family in cozy settings.",
    },
    {
      title: "Luxury Weddings",
      details:
        "Indulge in luxurious amenities and services for an opulent wedding experience.",
    },
    {
      title: "Outdoor Ceremonies",
      details:
        "Exchange vows surrounded by the beauty of nature in stunning outdoor venues.",
    },
  ];

  const privateParties = [
    {
      title: "Birthday Parties",
      details:
        "Celebrate another trip around the sun with memorable birthday parties.",
    },
    {
      title: "Anniversary Celebrations",
      details:
        "Honor your love and commitment with unforgettable anniversary celebrations.",
    },
    {
      title: "Graduation Parties",
      details:
        "Mark academic achievements with fun and festive graduation parties.",
    },
    {
      title: "Family Reunions",
      details:
        "Reconnect with loved ones and create lasting memories with family reunion events.",
    },
    {
      title: "Holiday Parties",
      details:
        "Spread holiday cheer with festive and joyous holiday party celebrations.",
    },
    {
      title: "Themed Parties",
      details:
        "Transform ordinary gatherings into extraordinary themed parties that leave a lasting impression.",
    },
  ];

  const cardVariants = {
    offscreen: {
      y: 300,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <Layout>
      <Head>
        <title>Event Management Company</title>
        <meta name="description" content="Best event management services." />
      </Head>
      {/* <LocomotiveScroll> */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-gradient-to-br from-blue-600 via-red-300 to-cyan-500 min-h-screen flex flex-col justify-center"
      >
        <div className="text-center py-10">
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6"
          >
            Welcome to Our Event Management Company
          </motion.h1>
          <motion.p
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl mb-6"
          >
            We organize the best events in town.
          </motion.p>
        </div>
      </motion.div>

      {/* Corporate Events Section */}
      <section className="bg-gray-200 py-12 h-screen flex flex-col justify-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Corporate Events
          </h2>
          <p className="mb-6 text-center">
            Our professional team specializes in managing corporate events that
            leave a lasting impact on your audience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corporateEvents.map((event, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={cardVariants}
                className="bg-gradient-to-br from-blue-600 via-red-300 to-cyan-500 text-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p>{event.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weddings Section */}
      <section className="bg-gray-300 py-12 h-screen flex flex-col justify-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">Weddings</h2>
          <p className="mb-6 text-center">
            Let us turn your special day into an unforgettable celebration with
            our expert wedding planning services.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {weddingEvents.map((event, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={cardVariants}
                className="bg-gradient-to-br from-green-600 via-yellow-300 to-orange-500 text-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p>{event.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Parties Section */}
      <section className="bg-gray-400 py-12 h-screen flex flex-col justify-center">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Private Parties
          </h2>
          <p className="mb-6 text-center">
            Elevate your private party experience with our exclusive planning
            services tailored to your preferences.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {privateParties.map((event, index) => (
              <motion.div
                key={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={cardVariants}
                className="bg-gradient-to-br from-red-600 via-purple-300 to-pink-500 text-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p>{event.details}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* </LocomotiveScroll> */}
    </Layout>
  );
}
