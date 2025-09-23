"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { ChartNoAxesColumn, Users, Target, Globe, BarChart2, Zap } from "lucide-react";
import BlurIn from "../ui/blur-in";
import RankCounter from "./rankcounter";

const followerData = [
    { name: "Jan", followers: 120, visits: 200 },
    { name: "Feb", followers: 180, visits: 250 },
    { name: "Mar", followers: 260, visits: 300 },
    { name: "Apr", followers: 400, visits: 460 },
];

const keywordData = [
    { name: "Hotel Vienna", rank: 4 },
    { name: "Vienna Events", rank: 7 },
    { name: "Family Stay", rank: 9 },
    { name: "Boutique Hotel 1070", rank: 11 },
];

export default function Features() {
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
        <div className="min-h-screen bg-white p-8">
            <motion.section
                className="text-center mx-auto max-w-5xl px-4 pt-24 pb-4"
                initial="initial"
                animate="animate"
                variants={staggerChildren}
            >
                <motion.div className="" variants={fadeInUp}>
                    <BlurIn
                        word="All in sight"
                        className="text-4xl text-center font-bold mb-10 bg-gradient-to-b from-indigo-400 to-purple-500 text-transparent inline-block bg-clip-text"
                    />
                </motion.div>
                <motion.p className="text-xl mb-10 px-4 max-w-4xl mx-auto" variants={fadeInUp}>
                    Track your visibility, discover keyword opportunities, and outperform your competition with our automated SEO tool.
                </motion.p>
            </motion.section>
            <div className="grid grid-cols-12 gap-6 max-w-screen-xl mx-auto mb-8 px-4 py-4">
                {/* Container 1 (25%) */}
                <Card className="col-span-12 md:col-span-3 bg-white border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-xl flex items-center gap-2 text-purple-500">
                            <Zap className="w-5 h-5" /> Automated SEO Cockpit
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 mb-4">
                            Build your SEO strategy, analyze competitors, and optimize your keywords with ease.
                        </p>
                        <a className="text-white font-bold text-md rounded-full bg-violet-700 hover:bg-violet-500 px-4 py-2" href="https://seo-aigency.vercel.app/">🚀 Start now</a>
                    </CardContent>
                </Card>

                {/* Container 2 (50%) */}
                <Card className="col-span-12 md:col-span-6 bg-white border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-xl text-green-600 flex items-center gap-2">
                            <BarChart2 className="w-5 h-5" /> Performance Analytics
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={followerData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="followers" stroke="#A855F7" strokeWidth={2} />
                                <Line type="monotone" dataKey="visits" stroke="#22c55e" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                        <p className="text-xs text-gray-500 mt-2">Followers & Profile visits over time</p>
                    </CardContent>
                </Card>

                {/* Container 3 (25%) */}
                <Card className="col-span-12 md:col-span-3 bg-white border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-xl text-cyan-500 flex items-center gap-2">
                            <Target className="w-5 h-5" /> Keyword Potential
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="text-md text-gray-700 space-y-1">
                            <li>☑️ Discover long-tail keywords</li>
                            <li>☑️ Competitor analysis</li>
                            <li>☑️ Content ideas</li>
                        </ul>
                        <RankCounter />
                    </CardContent>
                </Card>

                {/* Container 4 (50%) */}
                <Card className="col-span-12 md:col-span-6 bg-white border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-xl text-indigo-400 flex items-center gap-2">
                            <ChartNoAxesColumn className="w-5 h-5" /> Keyword Rankings
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={150}>
                            <BarChart data={keywordData}>
                                <XAxis dataKey="name" hide />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="rank" fill="#818cf8" />
                            </BarChart>
                        </ResponsiveContainer>
                        <p className="text-xs text-gray-500 mt-2">Current keyword positions</p>
                    </CardContent>
                </Card>

                {/* Container 5 (50%) */}
                <Card className="col-span-12 md:col-span-6 bg-white border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-xl text-blue-600 flex items-center gap-2">
                            <Globe className="w-5 h-5" /> Local SEO Insights
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-md text-gray-700">
                            📍 1070 Vienna: Optimized for local events, restaurants, and tourists.
                        </p>
                        <Progress value={70} className="h-2 mt-2" />
                        <p className="text-sm text-gray-500 mt-1">70% local visibility achieved</p>
                    </CardContent>
                </Card>

                {/* Container 6 (30%) */}
                <Card className="col-span-12 md:col-span-4 bg-white border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-xl text-green-600 flex items-center gap-2">
                            <Users className="w-5 h-5" /> Competitor Comparison
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="text-md text-gray-700 space-y-1">
                            <li>🏨 Hotel A – 1,200 clicks</li>
                            <li>🏨 Hotel B – 1,050 clicks</li>
                            <li className="font-semibold text-green-600">✨ Your Hotel – 1,340 clicks</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Container 7 (30%) */}
                <Card className="col-span-12 md:col-span-4 bg-white border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-xl text-cyan-500 flex items-center gap-2">
                            📊 Backlink Analysis
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-md text-gray-700">123 new backlinks last month</p>
                        <Progress value={55} className="h-2 mt-2" />
                        <p className="text-sm text-gray-500 mt-1">55% of goal achieved</p>
                    </CardContent>
                </Card>

                {/* Container 8 (30%) */}
                <Card className="col-span-12 md:col-span-4 bg-white border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-xl text-red-600 flex items-center gap-2">
                            📈 Traffic Overview
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-md text-gray-700">Monthly pageviews: 24,500</p>
                        <p className="text-md text-gray-700">Organic traffic: 18,200</p>
                        <p className="text-md text-gray-700">Direct traffic: 6,300</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
