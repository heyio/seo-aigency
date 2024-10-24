import { motion } from 'framer-motion'

export default function GoogleRanking() {
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
          Höhere Platzierung bei Google
        </motion.h2>
        <motion.p className="text-lg mb-8 text-center max-w-2xl mx-auto" variants={fadeInUp}>
          Unsere Strategien und Techniken helfen Ihrer Website, in den Ranglisten der Suchmaschinen aufzusteigen, so dass potenzielle Kunden Sie online leichter finden können.
        </motion.p>
      </div>
    </motion.section>
  )
}