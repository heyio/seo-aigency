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
          Drive the Right Customers to Your Website
        </motion.h2>
        <motion.p className="text-lg mb-8 text-center max-w-2xl mx-auto" variants={fadeInUp}>
          Our SEO strategies are designed to attract high-quality, targeted traffic to your website. We focus on bringing in visitors who are more likely to convert into customers, maximizing your ROI.
        </motion.p>
      </div>
    </motion.section>
  )
}