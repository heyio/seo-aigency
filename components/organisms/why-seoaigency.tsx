"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import BlurIn from "../ui/blur-in";

const sampleData = [
    { name: "0h", cost: 0, subscription: 50 },
    { name: "30m", cost: 40, subscription: 50 },
    { name: "1h", cost: 80, subscription: 50 },
    { name: "2h", cost: 160, subscription: 50 },
    { name: "4h", cost: 320, subscription: 50 },
    { name: "8h", cost: 640, subscription: 50 },
    { name: "16h", cost: 1280, subscription: 50 },
];

function IconZap(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" {...props}>
            <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
    );
}

function IconChart(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" stroke="currentColor" {...props}>
            <path d="M3 3v18h18" />
            <path d="M7 13l4-4 4 6 4-10" />
        </svg>
    );
}

export default function WhySeoAigency() {
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
        <div className="bg-white p-8">
            <motion.section
                className="text-center mx-auto max-w-5xl px-4 pt-24 pb-4"
                initial="initial"
                animate="animate"
                variants={staggerChildren}
            >
                <motion.div className="" variants={fadeInUp}>
                    <BlurIn
                        word="Optimized for effectiveness"
                        className="text-sm text-center font-bold mb-10 bg-gradient-to-b from-indigo-400 to-purple-500 text-transparent inline-block bg-clip-text"
                    />
                </motion.div>
                <motion.p className="text-xl mb-10 px-4 max-w-4xl mx-auto" variants={fadeInUp}>
                    Track your visibility, discover keyword opportunities, and outperform your competition with our automated SEO tool.
                </motion.p>
            </motion.section>

            {/* Layout wrapper with fixed height so left stacked cards and right full-height align */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-xl mx-auto">
                {/* LEFT COLUMN: stacked cards */}
                <div className="flex flex-col gap-6 h-full">
                    {/* Top left: ~70% of the column height */}
                    <Card className="h-[70%] bg-white border shadow-sm flex flex-col">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-cyan-500 text-xl">
                                <IconZap className="w-5 h-5" /> Streamline your SEO writing process
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1 flex flex-col justify-between">
                            <div>
                                <p className="text-gray-600 mb-4">
                                    Save several hours each week with automated content creation and SEO-ready drafts.
                                </p>
                            </div>

                            <div className="mt-6">
                                <div className="text-6xl font-bold">12x</div>
                                <div className="text-md text-gray-500 mb-4">Faster content creation</div>
                                <div className="flex flex-col gap-2">
                                    <div className="rounded-full bg-cyan-50 h-8 flex items-center px-3 max-w-64">
                                        <div className="bg-cyan-100 rounded-full h-3 w-3 mr-3" />
                                        <span className="text-md text-gray-600">SEO AIGENCY ~15 min</span>
                                    </div>
                                    <div className="rounded-full bg-gray-100 h-8 flex items-center px-3">
                                        <div className="bg-gray-300 rounded-full h-3 w-3 mr-3" />
                                        <span className="text-md text-gray-600">without SEO AIGENCY ~3 hours</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Bottom left: ~30% of the column height */}
                    <Card className="h-[30%] bg-white border shadow-sm flex flex-col justify-center items-center">
                        <CardHeader>
                            <CardTitle className="text-cyan-500 text-xl">Consistency Tracker</CardTitle>
                        </CardHeader>
                        <CardContent className="w-full flex items-center justify-center">
                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-2 p-3 rounded-lg border">
                                    {"MTWTFSS".split("").map((d, i) => (
                                        <div
                                            key={i}
                                            className={`w-8 h-8 flex items-center justify-center rounded-full ${i < 5 ? "bg-cyan-400 text-white" : "bg-gray-200 text-gray-600"}`}
                                        >
                                            {d}
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <div className="font-semibold text-md">Finally improve consistently</div>
                                    <div className="text-sm text-gray-500">Set goals and keep your streak</div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* RIGHT COLUMN: single card spanning full height of left column */}
                <Card className="h-full bg-white border shadow-sm flex flex-col">
                    <CardHeader>
                        <CardTitle className="text-purple-500 flex items-center gap-2 text-xl">
                            <IconChart className="w-5 h-5" /> Maximize your earnings, minimize content costs
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="flex-1 flex flex-col justify-between">
                        <div className="flex flex-row mx-auto gap-6 mb-4">
                            <div className="text-blue-500 font-bold text-sm">Your hourly wage</div>
                            <div className="text-purple-500 font-bold text-sm">SEO AIGENCY Subscription</div>
                        </div>
                        <div className="flex-1">
                            <ResponsiveContainer width="100%" height={380}>
                                <LineChart data={sampleData}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="cost" stroke="#3b82f6" strokeWidth={2} name="Your hourly wage" />
                                    <Line type="monotone" dataKey="subscription" stroke="#A855F7" strokeWidth={2} name="SEO AIGENCY Subscription" />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="mt-4 flex items-center justify-between">
                            <div className="text-sm text-gray-600">Compare your time cost vs. subscription cost</div>
                            <div className="text-sm text-gray-600">Hours spent on creating content</div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
