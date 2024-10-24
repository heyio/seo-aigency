import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import BlurIn from '../ui/blur-in'

export default function Hero() {
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
      className="py-20 text-center pt-32"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      <motion.div className="" variants={fadeInUp}>
        <BlurIn
          word="Boost Your Online Presence"
          className="text-7xl font-bold mb-4 bg-gradient-to-b from-indigo-400 to-purple-500 inline-block text-transparent bg-clip-text"
        />
      </motion.div>
      <motion.p className="text-2xl mb-8" variants={fadeInUp}>
        Drive more traffic, increase conversions, and grow your business
      </motion.p>
      <motion.a
            href="mailto:hello@seo-aigency.com"
            className="inline-flex items-center text-primary-foreground rounded-full text-lg font-semibold shadow-lg hover:bg-primary/90 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={fadeInUp}
            >
        <Button className="text-xl font-bold rounded-full p-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white">
          Get Started
        </Button>
      </motion.a>
    </motion.section>
  )
}