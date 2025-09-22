"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { ChartNoAxesColumn, Users, Target, Globe, BarChart2, Zap } from "lucide-react";

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
    return (
        <div className="min-h-screen bg-white p-8">
            <div className="grid grid-cols-12 gap-6">
                {/* Container 1 (25%) */}
                <Card className="col-span-12 md:col-span-3 bg-white border shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-orange-600">
                            <Zap className="w-5 h-5" /> Automatisiertes SEO Cockpit
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-gray-600 mb-4">
                            Entwickle deine SEO-Strategie, analysiere deine Konkurrenz und optimiere deine Keywords mit Leichtigkeit.
                        </p>
                        <Button className="rounded-full bg-orange-500 hover:bg-orange-600">🚀 Starte jetzt</Button>
                    </CardContent>
                </Card>

                {/* Container 2 (50%) */}
                <Card className="col-span-12 md:col-span-6 bg-white border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-blue-600 flex items-center gap-2">
                            <BarChart2 className="w-5 h-5" /> Performance Analytics
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={200}>
                            <LineChart data={followerData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="followers" stroke="#f97316" strokeWidth={2} />
                                <Line type="monotone" dataKey="visits" stroke="#22c55e" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                        <p className="text-xs text-gray-500 mt-2">Follower & Profilbesuche im Zeitverlauf</p>
                    </CardContent>
                </Card>

                {/* Container 3 (25%) */}
                <Card className="col-span-12 md:col-span-3 bg-white border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-green-600 flex items-center gap-2">
                            <Target className="w-5 h-5" /> Keyword Potenzial
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>✅ Longtail Keywords entdecken</li>
                            <li>✅ Wettbewerbsanalyse</li>
                            <li>✅ Content-Ideen</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Container 4 (50%) */}
                <Card className="col-span-12 md:col-span-6 bg-white border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-red-600 flex items-center gap-2">
                            <ChartNoAxesColumn className="w-5 h-5" /> Keyword Rankings
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={150}>
                            <BarChart data={keywordData}>
                                <XAxis dataKey="name" hide />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="rank" fill="#ef4444" />
                            </BarChart>
                        </ResponsiveContainer>
                        <p className="text-xs text-gray-500 mt-2">Aktuelle Keyword Positionen</p>
                    </CardContent>
                </Card>

                {/* Container 5 (50%) */}
                <Card className="col-span-12 md:col-span-6 bg-white border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-blue-600 flex items-center gap-2">
                            <Globe className="w-5 h-5" /> Lokale SEO Insights
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-700">
                            📍 1070 Wien: Optimiert für lokale Events, Restaurants und Touristen.
                        </p>
                        <Progress value={70} className="h-2 mt-2" />
                        <p className="text-xs text-gray-500 mt-1">70% Lokale Sichtbarkeit erreicht</p>
                    </CardContent>
                </Card>

                {/* Container 6 (30%) */}
                <Card className="col-span-12 md:col-span-4 bg-white border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-green-600 flex items-center gap-2">
                            <Users className="w-5 h-5" /> Konkurrenzvergleich
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="text-sm text-gray-700 space-y-1">
                            <li>🏨 Hotel A – 1,200 Klicks</li>
                            <li>🏨 Hotel B – 1,050 Klicks</li>
                            <li className="font-semibold text-green-600">✨ Dein Hotel – 1,340 Klicks</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Container 7 (30%) */}
                <Card className="col-span-12 md:col-span-4 bg-white border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-orange-600 flex items-center gap-2">
                            📊 Backlink Analysis
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-700">123 neue Backlinks im letzten Monat</p>
                        <Progress value={55} className="h-2 mt-2" />
                        <p className="text-xs text-gray-500 mt-1">55% Ziel erreicht</p>
                    </CardContent>
                </Card>

                {/* Container 8 (30%) */}
                <Card className="col-span-12 md:col-span-4 bg-white border shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-red-600 flex items-center gap-2">
                            📈 Traffic Overview
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-gray-700">Monatliche Seitenaufrufe: 24,500</p>
                        <p className="text-sm text-gray-700">Organischer Traffic: 18,200</p>
                        <p className="text-sm text-gray-700">Direkter Traffic: 6,300</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
