import { motion } from "framer-motion";

const Navbar = () => {
  const navItemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        {["Home", "About", "Services", "Contact"].map((item, index) => (
          <motion.li
            key={index}
            initial="hidden"
            animate="visible"
            variants={navItemVariants}
            className="cursor-pointer"
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
