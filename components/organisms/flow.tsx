"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import BlurIn from "../ui/blur-in";

// Central dictionary for all card content
const cards: {
    title: string;
    subtitle: string;
    short: string;
    image: string;
}[] = [
        {
            title: "Step 1",
            subtitle: "Anaylze your website & Website Audit",
            short: "Analyze your website and get a comprehensive SEO audit with actionable insights. This include the page speed score, core web vitals, and other important SEO factors like page structure from how Google see's it.",
            image: "/check-action-001.png"
        },
        {
            title: "Step 2",
            subtitle: "Explain your Business & Define your Strategy via Text or Voice",
            short: "Explain your business, target audience, and goals via text or voice to help us tailor the SEO strategy to your specific needs.",
            image: "/strategy-input-001.png"
        },
        {
            title: "Step 3",
            subtitle: "Identify your Competition & Keywords Determination based on your Strategy",
            short: "Identify competitors and determine relevant keywords for your business niche.",
            image: "/competitor-benchmark.png"
        },
        {
            title: "Step 4",
            subtitle: "Content Creation based on chosen Keyword",
            short: "High-quality, SEO-optimized content is created based on the chosen keywords to improve search engine rankings and attract organic traffic.",
            image: "/content-generation-001.png"
        },
        {
            title: "Step 5",
            subtitle: "Implement Content into your Website",
            short: "Easily implement the created content into your website with your CMS (e.g., WordPress, Wix, Squarespace) or manually.",
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
            image: "/dashboard-002.png"
        },
        {
            title: "Step 8",
            subtitle: "Rinse & Repeat for other keywords",
            short: "Repeat the process for other keywords to continuously improve your website's SEO and maintain a strong online presence.",
            image: "/check-action-001.png"
        }
    ];

export default function Flow() {
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
        <div className="min-h-screen bg-white text-center max-w-screen-xl mx-auto pt-24 pb-4">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cards.map((c, idx) => (
                    <Card key={idx} className="bg-white border shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-gray-800">{c.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-md text-gray-600 mb-3">{c.subtitle}</p>

                            {/* 16:9 screenshot placeholder */}
                            <div className="w-full bg-gray-100 rounded-lg overflow-hidden mb-3">
                                <div className="relative" style={{ paddingTop: '75%' }}>
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                        <div className="w-5/6 h-4/6 bg-white border-dashed border-2 border-gray-200 rounded-lg flex items-center justify-center">
                                            <img src={c.image} className="w-full h-full object-cover border rounded-xl"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className="text-md text-gray-700 max-w-md mx-auto">{c.short}</p>

                            <div className="mt-4 flex justify-center">
                                <Button size="lg" className="bg-purple-400 rounded-full font-bold">View</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}