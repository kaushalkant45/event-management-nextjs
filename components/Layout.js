import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      <header className="bg-gray-800 text-white flex justify-between items-center py-5 px-6 fixed w-full z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center"
        >
          <Link href="/">
            <Image
              src="/images/images.jpg"
              alt="Company Logo"
              width={50}
              height={20}
              className="cursor-pointer"
            />
          </Link>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-3xl font-bold ml-4"
          >
            Events.
          </motion.h1>
        </motion.div>
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <Link href="/" className="mx-2 hover:underline">
            Home
          </Link>
          <Link href="/about" className="mx-2 hover:underline">
            About
          </Link>
          <Link href="/services" className="mx-2 hover:underline">
            Services
          </Link>
          <Link href="/events" className="mx-2 hover:underline">
            Events
          </Link>
          <Link href="/contact" className="mx-2 hover:underline">
            Contact
          </Link>
        </motion.nav>
      </header>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex-grow mt-20"
      >
        {children}
      </motion.main>{" "}
      {/* Add mt-20 to push content below fixed header */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="bg-gray-800 text-white text-center py-4"
      >
        © 2024 Event Management Company
      </motion.footer>
    </motion.div>
  );
}
