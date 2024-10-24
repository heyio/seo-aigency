import { motion } from 'framer-motion'

export default function DriveCustomers() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <motion.section
      className="py-16"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className="container mx-auto px-4">
        <motion.h2 className="text-3xl font-bold mb-8 text-center" variants={fadeInUp}>
          Bringen Sie die richtigen Kunden auf Ihre Website
        </motion.h2>
        <motion.p className="text-lg mb-8 text-center max-w-2xl mx-auto" variants={fadeInUp}>
          Unsere SEO-Strategien zielen darauf ab, qualitativ hochwertigen und gezielten Traffic auf Ihre Website zu bringen. Wir konzentrieren uns darauf die Kunden die sie suchen zu ihrer Website zu leiten, um Ihre Umsätze zu maximieren.
        </motion.p>
      </div>
    </motion.section>
  )
}