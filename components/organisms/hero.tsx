import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import BlurIn from "../ui/blur-in";
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, ArrowRight, Loader2 } from "lucide-react";
import Newsletter from "./newsletter";

type ResultsType = {
  score: number;
  improvements: string[];
} | null;

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

  const [step, setStep] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState<ResultsType>(null);

  const testimonials = [
    {
      name: "Sigmund Dornbirn",
      company: "Tech Co",
      text: "Diese SEO-Analyse hat unsere Online-Präsenz verändert!",
    },
    {
      name: "Janette Schmidt",
      company: "E-commerce Ltd",
      text: "Unser Traffic ist nach der Umsetzung der Empfehlungen um 200 % gestiegen.",
    },
    {
      name: "Michael Johann",
      company: "Lokales Unternehmen",
      text: "Die gewonnenen Erkenntnisse waren von unschätzbarem Wert für unsere lokale SEO-Strategie.",
    },
  ];

  const analyzeWebsite = async () => {
    setAnalyzing(true);
    // Simulate analysis process
    await new Promise((resolve) => setTimeout(resolve, 5000));
    setResults({
      score: 75,
      improvements: [
        "Optimierung der Meta-Beschreibungen",
        "Ladegeschwindigkeit der Seite verbessern",
        "Backlinks aus seriösen Quellen erhöhen",
      ],
    });
    setAnalyzing(false);
    setStep(2);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <div className="w-full">
            <motion.div
              variants={fadeInUp}
              className="max-w-full mx-auto mb-8 px-4 py-4"
            >
              <Newsletter />
            </motion.div>
          </div>
        );
      case 1:
        return (
          <div className="w-full">
            <p className="text-xl">
              Bitte warten Sie, während wir eine umfassende SEO-Analyse
              durchführen
            </p>
            <Progress value={analyzing ? 66 : 100} className="w-full mb-4" />
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-muted p-4 rounded-lg">
                  <p className="text-sm italic mb-2">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <p className="text-xs font-semibold">
                    {testimonial.name}, {testimonial.company}
                  </p>
                </div>
              ))}
            </div>
            <Button
              onClick={analyzeWebsite}
              disabled={analyzing}
              className="text-xl font-bold rounded-full p-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white mt-6"
            >
              {analyzing ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <ArrowRight className="mr-2 h-4 w-4" />
              )}
              {analyzing ? "Analysiere..." : "Analyse abschliessen"}
            </Button>
          </div>
        );
      case 2:
        return (
          <div className="w-full">
            <h2 className="text-2xl pb-4">Ihre SEO-Ergebnisse</h2>
            <p className="text-xl">So schneidet Ihre Website ab</p>
            <div className="text-center my-4">
              <span className="text-4xl font-bold">{results?.score}</span>
              <span className="text-2xl">/100</span>
            </div>
            <h3 className="font-semibold mb-2">
              Vorgeschlagene Verbesserungen:
            </h3>
            <div>
              {results?.improvements.map((improvement, index) => (
                <p key={index} className="text-md py-1">
                  {improvement}
                </p>
              ))}
            </div>

            <Button
              onClick={() => setStep(3)}
              className="text-xl font-bold rounded-full p-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white mt-6"
            >
              Vollständigen Bericht ansehen
            </Button>
          </div>
        );
      case 3:
        return (
          <div className="w-full">
            <h2 className="text-2xl pb-4">
              Erschließen Sie Ihr volles SEO-Potenzial
            </h2>
            <p className="text-xl mb-6">
              Erhalten Sie Zugang zu Ihrem umfassenden SEO-Bericht und Ihrer
              persönlichen Strategie
            </p>
            <div className="space-y-3 inline-block">
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                <span className="text-md">Detaillierte SEO-Analyse</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                <span className="text-md">
                  Personalisierter Plan zur Verbesserung
                </span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                <span className="text-md">30-Tage-Aktionsplan</span>
              </div>
            </div>
            <Button className="text-xl font-bold rounded-full p-8 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white mt-6">
              Ihren Bericht und Leitfaden kaufen um EUR 99,-
            </Button>
          </div>
        );
    }
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
      <motion.p className="rounded px-8 pb-8 mb-4 max-w-m mx-auto" variants={fadeInUp}>
        <a className="text-xl bg-violet-700 hover:bg-violet-500 text-white font-bold py-4 px-20 rounded-full w-full focus:outline-none focus:shadow-outline disabled:bg-slate-400" href="https://seo-aigency.vercel.app/">
          Try SEO AIgency for Free
        </a>
      </motion.p>
      <motion.p variants={fadeInUp}>
        <img src="/hero.png" className="w-full h-full object-cover border rounded-xl"></img>
      </motion.p>
    </motion.section >
  );
}
