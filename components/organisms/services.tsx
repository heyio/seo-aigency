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
      <div className="container mx-auto p-8">
        <motion.h2
          className="text-4xl font-bold mb-14 text-center"
          variants={fadeInUp}
        >
          How it works
        </motion.h2>
        <ul className="space-y-14 text-left text-gray-500 dark:text-gray-400">
          <li className="text-center text-2xl font-semibold">
            <strong>Website Audit</strong>
            <ul className="ps-5 mt-2 space-y-1 list-inside font-normal">
              <li>Enter your website URL and receive a first SEO analysis with Page Speed
                Insights.</li>
            </ul>
          </li>
          <li className="text-center text-2xl font-semibold">
            <strong>Conveniently manage &amp; improve multiple websites</strong>
            <ul className="ps-5 mt-2 space-y-1 list-inside font-normal">
              <li>Easily manage and improve SEO and AI Search Visibility of multiple brands or websites.</li>
            </ul>
          </li>
          <li className="text-center text-2xl font-semibold">
            <strong>Technical Analysis with action steps</strong>
            <ul className="ps-5 mt-2 space-y-1 list-inside font-normal">
              <li>Receive technical optimizations that you can easily carry out.</li>
            </ul>
          </li>
          <li className="text-center text-2xl font-semibold">
            <strong>In-depth Technical Check</strong>
            <ul className="ps-5 mt-2 space-y-1 list-inside font-normal">
              <li>Conduct a technical deep check and receive suggestions for optimizing
                elements and website structure.</li>
            </ul>
          </li>
          <li className="text-center text-2xl font-semibold">
            <strong>SEO Aigency supports you in defining your strategy</strong>
            <ul className="ps-5 mt-2 space-y-1 list-inside font-normal">
              <li>Create a customized strategy that aligns
                with your business objectives.</li>
            </ul>
          </li>
          <li className="text-center text-2xl font-semibold">
            <strong>Content Optimization</strong>
            <ul className="ps-5 mt-2 space-y-1 list-inside font-normal">
              <li>Examine your existing content and
                provide practical recommendations to improve your search ranking and visibilty for AI Search Engines.</li>
            </ul>
          </li>
          <li className="text-center text-2xl font-semibold">
            <strong>Keyword Check</strong>
            <ul className="ps-5 mt-2 space-y-1 list-inside font-normal">
              <li>Enhance existing content on your website with recommendations from SEO
                Agency aligned to your marketing strategy.</li>
            </ul>
          </li>
          <li className="text-center text-2xl font-semibold">
            <strong>Become recommended by AI chatbots like ChatGPT</strong>
            <ul className="ps-5 mt-2 spae-y-1 list-inside font-normal">
              <li>Optimize your business so that AI chatbots like
                ChatGPT, Gemini or Perplexity recommend it.</li>
            </ul>
          </li>
          <li className="text-center text-2xl font-semibold">
            <strong>On-demand Human Check</strong>
            <ul className="ps-5 mt-2 space-y-1 list-inside font-normal">
              <li>Our team is available to help - Book live human support via video call for
                individualized assistance.</li>
            </ul>
          </li>
        </ul>
      </div>
    </motion.section>
  );
}
