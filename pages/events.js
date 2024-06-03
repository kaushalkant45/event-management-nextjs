import Head from "next/head";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { gsap } from "gsap";

export default function Events() {
  useEffect(() => {
    gsap.from(".event-card", {
      opacity: 1,
      y: 50,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(".event-card", {
      scale: 0.5,
      rotation: 360,
      delay: 0.8,
      stagger: {
        each: 1,
        from: "random",
      },
      duration: 1.2,
      ease: "elastic.out(1, 0.3)",
      overwrite: "auto",
    });
  }, []);

  return (
    <Layout>
      <Head>
        <title>Our Events - Event Management Company</title>
        <meta
          name="description"
          content="Check out our past and upcoming events."
        />
      </Head>
      <div className="text-center py-10">
        <h1 className="text-4xl font-bold mb-6">Our Events</h1>
        <p className="text-xl mb-6">
          See the events we have organized and what's coming up next.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="event-card bg-red-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Music Festival</h2>
            <p>An amazing music festival with top artists and bands.</p>
          </div>
          <div className="event-card bg-blue-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Art Exhibition</h2>
            <p>A spectacular display of art from renowned artists.</p>
          </div>
          <div className="event-card bg-green-500 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Charity Gala</h2>
            <p>An elegant evening event to raise funds for a good cause.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
