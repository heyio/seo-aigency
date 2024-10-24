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
            <h3 className="text-lg font-bold mb-4">SEO AIGENCY</h3>
            <p>Boosting your online presence since 2010</p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p>Email: info@seo-aigency.com</p>
            <p>Phone: +43 699 456-7890</p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">Twitter</a>
              <a href="#" className="hover:text-blue-600">Facebook</a>
              <a href="#" className="hover:text-pink-600">Instagram</a>
            </div>
          </motion.div>
        </div>
        <motion.div className="mt-8 text-center" variants={fadeInUp}>
          <p>&copy; 2024 SEO AIGENCY. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  )
}