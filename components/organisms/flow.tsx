"use client";

import React, { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import BlurIn from "../ui/blur-in";
import RankCounter from "./rankcounter";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Central dictionary for all card content
const cards: {
    title: string;
    subtitle: string;
    short: string;
    image: string;
}[] = [
        {
            title: "Step 1",
            subtitle: "Website Analysis & Audit",
            short: "Analyze your website and get a comprehensive SEO audit with actionable insights. This include the page speed score, core web vitals, and other important SEO factors like page structure from how Google see's it.",
            image: "/check-action-001.png"
        },
        {
            title: "Step 2",
            subtitle: "Optionally explain your Business & define your strategy via Text or Voice Input",
            short: "Explain your business, target audience, and goals via text or voice to help us tailor the SEO strategy to your specific needs.",
            image: "/strategy-input-001.png"
        },
        {
            title: "Step 3",
            subtitle: "Identify your Competition & Keywords Determination based on your Strategy",
            short: "Identify competitors and determine relevant keywords for your business niche.",
            image: "/competitor-selection-001.png"
        },
        {
            title: "Step 4",
            subtitle: "Content Creation based on chosen Keyword",
            short: "High-quality, SEO-optimized content is created based on the chosen keywords to improve search engine rankings and attract organic traffic.",
            image: "/content-generation-002.png"
        },
        {
            title: "Step 5",
            subtitle: "Implement improved Content into your Website",
            short: "Easily implement the created content or suggested new page into your website with your CMS (e.g., WordPress, Wix, Squarespace) or manually.",
            image: "/cms-overview-001.png"
        },
        {
            title: "Step 6",
            subtitle: "Track Keyword Rankings & Performance",
            short: "Monitor the performance of your keywords and track their rankings over time to measure the effectiveness in Google Search Console.",
            image: "/seo-performance-report-001.png"
        },
        {
            title: "Step 7",
            subtitle: "Monthly Reports",
            short: "Receive monthly reports to monitor progress, track keyword rankings, and measure the effectiveness of the SEO strategy.",
            image: "/reports-002.png"
        },
        {
            title: "Step 8",
            subtitle: "Rinse & Repeat for other pages and keywords",
            short: "Repeat the process for other keywords to continuously improve your website's SEO and maintain a strong online presence.",
            image: "/check-action-001.png"
        }
    ];

export default function EightCardsCanvas() {
    const [current, setCurrent] = useState(0);
    const startX = useRef<number | null>(null);


    const nextCard = () => setCurrent((prev) => (prev + 1) % cards.length);
    const prevCard = () => setCurrent((prev) => (prev - 1 + cards.length) % cards.length);


    useEffect(() => {
        const interval = setInterval(() => {
            nextCard();
        }, 8000);
        return () => clearInterval(interval);
    }, []);


    // Touch events for swipe support
    const handleTouchStart = (e: React.TouchEvent) => {
        startX.current = e.touches[0].clientX;
    };


    const handleTouchEnd = (e: React.TouchEvent) => {
        if (startX.current !== null) {
            const diff = startX.current - e.changedTouches[0].clientX;
            if (diff > 50) {
                nextCard();
            } else if (diff < -50) {
                prevCard();
            }
        }
        startX.current = null;
    };

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
        <div className="min-h-min bg-white p-8 flex flex-col items-center">

            <motion.section
                className="text-center mx-auto max-w-5xl px-4 pt-16 pb-4"
                initial="initial"
                animate="animate"
                variants={staggerChildren}
            >
                <motion.div className="" variants={fadeInUp}>
                    <BlurIn
                        word="The Flow"
                        className="text-4xl text-center font-bold mb-10 bg-gradient-to-b from-indigo-400 to-purple-500 text-transparent inline-block bg-clip-text"
                    />
                </motion.div>
                <motion.p className="text-xl mb-10 px-4 max-w-4xl mx-auto" variants={fadeInUp}>
                    An at-a-glance view of our flow and product features.
                </motion.p>
            </motion.section>


            {/* Carousel */}
            <div
                className="relative w-full max-w-5xl overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {cards.map((c, idx) => (
                    <div
                        key={idx}
                        className={`transition-opacity duration-500 ${idx === current ? "opacity-100" : "opacity-0 absolute inset-0"}`}
                    >
                        <Card className="bg-white border shadow-sm">
                            <CardHeader>
                                <CardTitle className="text-3xl max-w-2xl mx-auto text-center font-bold text-gray-600 mb-2 mt-2">{c.title} - {c.subtitle}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="w-full bg-gray-50 rounded-lg overflow-hidden mb-3">
                                    <div className="relative" style={{ paddingTop: "75%" }}>
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                            <div className="w-5/6 h-4/6 bg-white border-dashed border-2 border-gray-200 rounded-lg flex items-center justify-center">
                                                <img src={c.image} className="w-full h-full object-cover border rounded-xl"></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-md text-gray-700 max-w-xl mx-auto text-center mt-5">{c.short}</p>
                            </CardContent>
                        </Card>
                    </div>
                ))}


                {/* Navigation buttons */}
                <button
                    onClick={prevCard}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white rounded-full shadow p-2"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                    onClick={nextCard}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white rounded-full shadow p-2"
                >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
            </div>


            {/* Dots */}
            <div className="flex space-x-2 mt-4">
                {cards.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`w-3 h-3 rounded-full ${idx === current ? "bg-blue-500" : "bg-gray-300"}`}
                    />
                ))}
            </div>
        </div>
    );
}