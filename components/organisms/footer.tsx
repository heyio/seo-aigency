import { motion } from 'framer-motion'

export default function Footer() {
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
    <motion.footer
      className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-8"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold mb-4">SEO AIgency</h3>
            <p className="text-sm">We boost businesses since 2016.</p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold mb-4">Get in touch</h3>
            <div className="text-sm">
              <p>Email: <a href="mailto:hello@seo-aigency.com" className="hover:text-blue-400">hello@seo-aigency.com</a></p>
              <p>Mariahilfer Straße 101/1/21, 1060 Vienna</p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold mb-4">Get free demo</h3>
            <div className="text-sm flex space-x-4">
              <a href="https://cal.com/allanberger/15min?overlayCalendar=true" className="hover:text-blue-400">Book a free 15min call</a>
            </div>
          </motion.div>
        </div>
        <motion.div className="text-sm mt-8 text-center" variants={fadeInUp}>
          <p>&copy; 2025 SEO AIgency — Built for your business's growth. All rights reserved.</p>
        </motion.div>
      </div >
    </motion.footer >
  )
}