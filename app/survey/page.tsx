'use client';

import { useState } from 'react';
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown, Star, ArrowRight, Rocket, Target, BarChart, Book } from 'lucide-react';
import Image from 'next/image';

type Question = {
    id: number
    text: string
    type: 'yesno' | 'multiple' | 'rating' | 'text'
    options?: string[]
}

const questions: Question[] = [
    { id: 1, text: "Möchten Sie Ihren Umsatz steigern?", type: "yesno" },
    { id: 2, text: "Möchten Sie Ihre Kundenbasis erweitern?", type: "yesno" },
    { id: 3, text: "Streben Sie eine Verbesserung der Markenbekanntheit an?", type: "yesno" },
    { id: 4, text: "Was hindert Sie daran, Ihre SEO-Ziele zu erreichen?", type: "multiple", options: ["Mangelndes Wissen", "Begrenzte Ressourcen", "Starke Konkurrenz", "Unklare Strategie"] },
    { id: 5, text: "Was möchten Sie erreichen?", type: "multiple", options: ["Höhere Rankings", "Mehr organischen Traffic", "Bessere Konversionsraten", "Verbesserte Online-Präsenz"] },
    { id: 6, text: "Wie bewerten Sie unsere SEO-App?", type: "rating" },
    { id: 7, text: "Haben Sie Feedback zu unserer App?", type: "text" },
    { id: 8, text: "Sind Sie mit Ihrem aktuellen Website-Traffic zufrieden?", type: "yesno" },
    { id: 9, text: "Haben Sie eine Content-Strategie, um organischen Traffic zu generieren?", type: "yesno" },
    { id: 10, text: "Sind Sie offen dafür, neue SEO-Strategien auszuprobieren?", type: "yesno" },
]

export default function Survey() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState<Record<number, any>>({})
    const [showReport, setShowReport] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState<any>(null)

    const handleAnswer = (answer: any) => {
        setSelectedAnswer(answer)
    }

    const nextQuestion = () => {
        if (selectedAnswer !== null) {
            setAnswers({ ...answers, [currentQuestion]: selectedAnswer })
            setSelectedAnswer(null)
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1)
            } else {
                setShowReport(true)
            }
        }
    }

    const renderQuestion = () => {
        const question = questions[currentQuestion]
        switch (question.type) {
            case 'yesno':
                return (
                    <div className="flex justify-center space-x-4">
                        <Button
                            onClick={() => handleAnswer(true)}
                            className={selectedAnswer === true ? "bg-primary text-primary-foreground font-bold" : "bg-secondary text-black hover:text-primary-foreground font-bold"}
                        >
                            <ThumbsUp className="mr-2" /> Ja
                        </Button>
                        <Button
                            onClick={() => handleAnswer(false)}
                            className={selectedAnswer === false ? "bg-primary text-primary-foreground font-bold" : "bg-secondary text-black hover:text-primary-foreground font-bold"}
                        >
                            <ThumbsDown className="mr-2" /> Nein
                        </Button>
                    </div>
                )
            case 'multiple':
                return (
                    <div className="grid grid-cols-2 gap-4">
                        {question.options?.map((option, index) => (
                            <Button
                                key={index}
                                onClick={() => handleAnswer(option)}
                                className={selectedAnswer === option ? "bg-primary text-primary-foreground font-bold" : "font-bold bg-secondary text-black hover:text-white"}
                            >
                                {option}
                            </Button>
                        ))}
                    </div>
                )
            case 'rating':
                return (
                    <div className="flex justify-center space-x-2">
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <Button
                                key={rating}
                                onClick={() => handleAnswer(rating)}
                                className={rating <= (selectedAnswer || 0) ? "bg-primary text-primary-foreground font-bold" : "font-bold bg-secondary text-black"}
                            >
                                <Star className={rating <= (selectedAnswer || 0) ? "fill-yellow-400" : ""} />
                            </Button>
                        ))}
                    </div>
                )
            case 'text':
                return (
                    <textarea
                        className="w-full p-2 border rounded"
                        rows={4}
                        onChange={(e) => handleAnswer(e.target.value)}
                        value={selectedAnswer || ''}
                    />
                )
        }
    }

    const renderReport = () => {
        return (
            <div className="space-y-6 max-w-2xl mx-auto py-20">
                <h2 className="text-2xl font-bold text-center">Glückwunsch! Ihr SEO-Plan ist fertig</h2>
                <p className="text-center">Sie sind auf dem Weg, Ihr ausgewähltes Ziel zu erreichen: {answers[4]}</p>

                <h3 className="text-xl font-semibold">Empfehlungen:</h3>
                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                        <Rocket className="text-blue-500 mr-2" />
                        <span>Optimieren Sie Ihre Website-Struktur</span>
                    </div>
                    <div className="flex items-center">
                        <Target className="text-green-500 mr-2" />
                        <span>Konzentrieren Sie sich auf relevante Keywords</span>
                    </div>
                    <div className="flex items-center">
                        <BarChart className="text-purple-500 mr-2" />
                        <span>Analysieren Sie regelmäßig Ihre Leistung</span>
                    </div>
                    <div className="flex items-center">
                        <Book className="text-orange-500 mr-2" />
                        <span>Erstellen Sie hochwertigen Content</span>
                    </div>
                </div>

                <h3 className="text-xl font-semibold">So erreichen Sie Ihre SEO-Ziele:</h3>
                <ul className="list-disc list-inside">
                    <li>Führen Sie gründliche Keyword-Recherchen durch</li>
                    <li>Verbessern Sie die Ladegeschwindigkeit Ihrer Website</li>
                    <li>Bauen Sie hochwertige Backlinks auf</li>
                    <li>Optimieren Sie für mobile Geräte</li>
                </ul>

                <h3 className="text-xl font-semibold">Erfahren Sie mehr über SEO:</h3>
                <div className="flex space-x-4">
                    <a href="https://moz.com/beginners-guide-to-seo" className="text-blue-500 hover:underline">Moz SEO-Leitfaden</a>
                    <a href="https://developers.google.com/search/docs" className="text-blue-500 hover:underline">Google SEO-Dokumentation</a>
                    <a href="https://backlinko.com/hub/seo" className="text-blue-500 hover:underline">Backlinko SEO-Hub</a>
                </div>
            </div>
        )
    }

    if (showReport) {
        return renderReport()
    }

    return (
        <div className="max-w-2xl mx-auto text-center p-6 space-y-6">
            <Progress value={(currentQuestion + 1) / questions.length * 100} className="w-full" />

            <h2 className="text-2xl font-bold">{questions[currentQuestion].text}</h2>

            {renderQuestion()}

            {currentQuestion === 2 && (
                <div className="my-4">
                    <Image src="/unsplash.jpg?height=300&width=500" alt="SEO App Screenshot" width={500} height={300} className="mx-auto rounded-xl" />
                    <p className="text-center mt-2">Erleben Sie den großen Nutzen unserer SEO-App!</p>
                </div>
            )}

            <Button onClick={nextQuestion} className="w-full font-bold" disabled={selectedAnswer === null}>
                {currentQuestion < questions.length - 1 ? 'Weiter   ' : 'Fertig'} <ArrowRight className="ml-2" />
            </Button>
        </div>
    )
}