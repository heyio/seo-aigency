import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function FAQ() {

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

  const faqs = [
    { question: "What is SEO?", answer: "SEO stands for Search Engine Optimization. It's the practice of optimizing your website to increase its visibility in search engine results pages." },
    { question: "What is GEO?", answer: "GEO stands for Generative Engine Optimization. It's the practice of making a brand or business visible to AI search engines like ChatGPT, Google Gemini or Perplexity, in order to get recommended by AI's upon the user's interactions." },
    { question: "What is AI Search Visibility?", answer: "AI Search Visibility: Businesses get recommended by AI engines as users interact with them. Engines can be such as ChatGPT, Google Gemini or Perplexity." },
    { question: "How long does it take to see improvement results?", answer: "SEO is a long-term strategy. While some improvements can be seen within a few weeks, significant results typically take 3-6 months. When it comes to GEO the timeframes are similar to SEO updates, but we've also seen updates earlier as in a few days — simply put, it depends when an AI model is being updated." },
    { question: "Do you guarantee first page rankings?", answer: "We don't guarantee specific rankings as search engines frequently update their algorithms. However, we do guarantee to significantly improve your website's visibility and organic traffic." },
    { question: "What's included in your SEO services?", answer: "Our services include keyword research, on-page optimization, content creation, link building, and regular performance reporting." },
    { question: "How do you measure SEO success?", answer: "We track various metrics including organic traffic, keyword rankings, conversion rates, and ROI to measure the success of our SEO campaigns." },
    { question: "Do you offer local SEO services?", answer: "Yes, we offer local SEO services to help businesses improve their visibility in local search results." },
    { question: "Can you help with e-commerce SEO?", answer: "We have extensive experience in optimizing e-commerce websites to improve product visibility and increase sales." },
    { question: "How often will I receive progress reports?", answer: "We provide detailed monthly reports, but you'll have access to real-time dashboards to track your progress at any time." },
    { question: "Do you offer content creation services?", answer: "Yes, we offer content creation services as part of our SEO packages. This includes blog posts, articles, and other types of content." },
    { question: "What makes your SEO agency different from others?", answer: "We combine cutting-edge SEO techniques with personalized strategies and exceptional customer service to deliver outstanding results for our clients." }
  ]

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
          Frequently Asked Questions
        </motion.h2>
        <motion.div variants={fadeInUp}>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            {faqs.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="font-bold text-xl">{item.question}</AccordionTrigger>
                <AccordionContent className="text-lg">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </motion.section>
  )
}