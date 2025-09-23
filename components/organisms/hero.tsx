import { motion } from "framer-motion";
import BlurIn from "../ui/blur-in";
import Image from "next/image";


export default function Hero() {
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
      className="text-center mx-auto max-w-5xl px-4 pt-32 pb-0"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
    >
      <motion.div className="" variants={fadeInUp}>
        <BlurIn
          word="Boost your business on Google & ChatGPT"
          className="text-6xl font-bold mb-10 bg-gradient-to-b from-indigo-400 to-purple-500 text-transparent inline-block bg-clip-text"
        />
      </motion.div>
      <motion.p className="text-2xl mb-10 px-4 max-w-4xl mx-auto" variants={fadeInUp}>
        Your automated SEO cockpit powered by AI, built for your business’s growth.
      </motion.p>
      <motion.p className="rounded md:px-8 px-0 pb-8 mb-4 max-w-full mx-auto" variants={fadeInUp}>
        <a className="text-xl bg-violet-700 hover:bg-violet-500 text-white font-bold py-4 px-10 rounded-full w-full focus:outline-none focus:shadow-outline disabled:bg-slate-400" href="https://seo-aigency.vercel.app/">
          Try SEO AIgency for Free
        </a>
      </motion.p>
      <motion.p variants={fadeInUp}>
        <Image
          src="/hero.png"
          alt="SEO AIgency dashboard preview"
          width={1200}
          height={800}
          className="w-full h-full object-cover border rounded-xl"
        />
      </motion.p>
    </motion.section >
  );
}
