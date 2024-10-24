import { motion } from 'framer-motion';

export default function Services() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          variants={fadeInUp}
        >
          Unsere SEO-Dienstleistungen
        </motion.h2>
        <motion.p
          className="text-lg mb-8 text-center max-w-2xl mx-auto"
          variants={fadeInUp}
        >
          {`Wir bieten umfassende SEO-Unterstützung und verwenden modernste Techniken, um die Sichtbarkeit und das Ranking Ihrer Website zu verbessern.`}
        </motion.p>
      </div>
    </motion.section>
  );
}
