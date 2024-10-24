import { motion } from 'framer-motion'

export default function TargetAudience() {
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
      className="py-16 bg-gray-50"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      
      variants={staggerChildren}
    >
      <div className="container mx-auto px-4">
        <motion.h2 className="text-3xl font-bold mb-8 text-center" variants={fadeInUp}>
          Who Can Benefit from Our Services?
        </motion.h2>
        <motion.ul className="list-disc list-inside text-lg max-w-2xl mx-auto" variants={fadeInUp}>
          <li>Small business owners looking to increase their online visibility</li>
          <li>E-commerce stores wanting to drive more organic traffic</li>
          <li>Local businesses aiming to dominate local search results</li>
          <li>Startups seeking to establish a strong online presence</li>
          <li>Established companies looking to stay ahead of the competition</li>
        </motion.ul>
      </div>
    </motion.section>
  )
}