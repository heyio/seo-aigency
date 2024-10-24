'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';

const columnData = [
  {
    title: "On-Page SEO",
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    description: "Optimieren Sie den Inhalt und die Struktur Ihrer Website, um das Ranking in Suchmaschinen und die Benutzererfahrung zu verbessern.",
    listItems: [
      "Keyword-Optimierung",
      "Verbesserung der Meta-Tags",
      "Verbesserung der Inhaltsqualität",
      "Optimierung der URL-Struktur",
      "Interne Verlinkungsstrategie"
    ]
  },
  {
    title: "Off-Page SEO",
    images: ["/placeholder.svg?height=300&width=400", "/placeholder.svg?height=300&width=400"],
    description: "Bauen Sie die Autorität und Reputation Ihrer Website durch Optimierungstechniken abseits von SEO auf.",
    listItems: [
      "Linkaufbau",
      "Social Media Marketing",
      "Influencer-Outreach",
      "Markenerwähnungen",
      "Lokale SEO-Strategien"
    ]
  }
]

export default function TwoColumnSection() {
  //const [activeImageIndex, setActiveImageIndex] = useState([0, 0])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  //const imageVariants = {
  //  enter: { opacity: 0 },
  //  center: { opacity: 1 },
  //  exit: { opacity: 0 }
  //}

  //const handleImageTransition = (columnIndex: number) => {
  //  setActiveImageIndex(prev => {
  //    const newState = [...prev]
  //    newState[columnIndex] = (newState[columnIndex] + 1) % 2
  //    return newState
  //  })
  //}

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          Unsere Strategie
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {columnData.map((column, columnIndex) => (
            <motion.div
              key={columnIndex}
              initial="initial"
              animate="animate"
              variants={fadeInUp}
            >
              <Card className="h-full border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">
                    {column.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                    <Image
                      src="/unsplash.jpg?height=600&width=1200"
                      alt="Featured Project"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <p className="text-gray-600 mb-4">{column.description}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {column.listItems.map((item, index) => (
                      <li key={index} className="text-gray-600">
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
