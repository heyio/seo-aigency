import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Type, FileText, Key, Zap, Globe, Lightbulb, Image as ImageIcon, Hash } from 'lucide-react'

export default function SEOAnalysisReport() {
    const [showAiAnalysis, setShowAiAnalysis] = useState(false)

    const webVitals = [
        { name: 'Largest Contentful Paint (LCP)', score: 2.5, icon: <Zap className="h-5 w-5" />, improvement: 'Optimize images and reduce server response time' },
        { name: 'First Input Delay (FID)', score: 100, icon: <Zap className="h-5 w-5" />, improvement: 'Minimize long tasks and reduce JavaScript execution time' },
        { name: 'Cumulative Layout Shift (CLS)', score: 0.1, icon: <Zap className="h-5 w-5" />, improvement: 'Use set size attribute for media elements' },
    ]

    const oldResults = {
        title: "Boost Your Online Presence with Our SEO Services | YourCompany",
        headings: [
            "H1: Boost Your Online Presence with Expert SEO Services",
            "H2: Our Comprehensive SEO Solutions",
            "H3: On-Page Optimization",
            "H3: Content Strategy",
            "H3: Link Building"
        ],
        metaDescription: "Improve your website's visibility with our expert SEO services. We offer tailored strategies to boost your rankings and drive organic traffic.",
        keywords: "SEO, search engine optimization, online visibility, organic traffic, website ranking"
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">SEO Analysis Report</h1>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>Page Overview</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid gap-4">
                        <div>
                            <h2 className="text-lg font-semibold mb-2 flex items-center">
                                <Globe className="mr-2 h-5 w-5 text-blue-500" aria-hidden="true" />
                                Title
                            </h2>
                            <p>{oldResults.title}</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-2 flex items-center">
                                <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" aria-hidden="true" />
                                Meta Description
                            </h2>
                            <p>{oldResults.metaDescription}</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-2 flex items-center">
                                <ImageIcon className="mr-2 h-5 w-5 text-violet-500" aria-hidden="true" />
                                Images
                            </h2>
                            <p>No images found on the page.</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-2 flex items-center">
                                <Hash className="mr-2 h-5 w-5 text-blue-500" aria-hidden="true" />
                                Keywords
                            </h2>
                            <p>{oldResults.keywords}</p>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold mb-2">Headings</h2>
                            <ul className="list-disc list-inside">
                                {oldResults.headings.map((heading, index) => (
                                    <li key={index}>{heading}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>INP Score and Web Vitals</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="mb-4">
                        <h3 className="text-lg font-semibold mb-2">Interaction to Next Paint (INP)</h3>
                        <div className="flex items-center">
                            <Progress value={75} className="w-full mr-4" />
                            <span className="font-semibold">75%</span>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {webVitals.map((vital, index) => (
                            <div key={index} className="flex items-start">
                                <div className="mr-4 mt-1">{vital.icon}</div>
                                <div>
                                    <h4 className="font-semibold">{vital.name}</h4>
                                    <div className="flex items-center mt-1">
                                        <Progress value={vital.score * 100} className="w-32 mr-2" />
                                        <span>{vital.score}</span>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">{vital.improvement}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <Card className="mb-8">
                <CardHeader>
                    <CardTitle>OG Image Check</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="mb-4">
                        <Image
                            src="/placeholder.svg?height=300&width=600"
                            alt="OG Image Preview"
                            width={600}
                            height={300}
                            className="rounded-lg"
                        />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Essential Tips for OG Image Optimization</h3>
                    <ul className="list-disc list-inside space-y-2">
                        <li>Use an image size of 1200x630 pixels for optimal display across platforms</li>
                        <li>Ensure the image is relevant to the page content</li>
                        <li>Include your logo or branding elements for consistency</li>
                        <li>Use high-contrast text if adding text to the image</li>
                        <li>Optimize the image file size for faster loading</li>
                    </ul>
                </CardContent>
            </Card>

            <div className="text-center mb-8">
                <Button onClick={() => setShowAiAnalysis(!showAiAnalysis)}>
                    {showAiAnalysis ? 'Hide AI Analysis' : 'Analyze with AI'}
                </Button>
            </div>

            {showAiAnalysis && (
                <Card>
                    <CardHeader>
                        <CardTitle>AI-Powered Improvements</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="title">
                                <AccordionTrigger>
                                    <div className="flex items-center">
                                        <Type className="mr-2 h-5 w-5" />
                                        Title Improvement
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold">Suggested:</span>
                                        <Badge variant="outline" className="bg-green-100 text-green-800">New</Badge>
                                    </div>
                                    <p>&quot;Skyrocket Your Online Visibility: Expert SEO Services | YourCompany&quot;</p>
                                    <p className="text-sm text-muted-foreground mt-2">This title is more action-oriented and emphasizes the benefit to the user.</p>
                                    <div className="mt-4 p-3 bg-gray-100 border border-gray-300 rounded-md">
                                        <div className="font-semibold mb-1">Current:</div>
                                        <p className="text-gray-700">{oldResults.title}</p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="headings">
                                <AccordionTrigger>
                                    <div className="flex items-center">
                                        <FileText className="mr-2 h-5 w-5" />
                                        Headings Refinement
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold">Suggested:</span>
                                        <Badge variant="outline" className="bg-green-100 text-green-800">New</Badge>
                                    </div>
                                    <ul className="list-disc list-inside space-y-2">
                                        <li>H1: &quot;Dominate Search Rankings with Our Proven SEO Strategies&quot;</li>
                                        <li>H2: &quot;Tailored SEO Solutions for Measurable Results&quot;</li>
                                        <li>H3: &quot;Data-Driven On-Page Optimization&quot;</li>
                                        <li>H3: &quot;Engaging Content Strategy that Converts&quot;</li>
                                        <li>H3: &quot;Authoritative Link Building for Long-Term Success&quot;</li>
                                    </ul>
                                    <div className="mt-4 p-3 bg-gray-100 border border-gray-300 rounded-md">
                                        <div className="font-semibold mb-1">Current:</div>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            {oldResults.headings.map((heading, index) => (
                                                <li key={index}>{heading}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="meta">
                                <AccordionTrigger>
                                    <div className="flex items-center">
                                        <AlertTriangle className="mr-2 h-5 w-5" />
                                        Meta Description Enhancement
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold">Suggested:</span>
                                        <Badge variant="outline" className="bg-green-100 text-green-800">New</Badge>
                                    </div>
                                    <p>&quot;Unlock your website&apos;s full potential with our data-driven SEO services. From on-page optimization to content strategy, we deliver measurable results that boost your rankings and drive qualified organic traffic. Start dominating search results today!&quot;</p>
                                    <p className="text-sm text-muted-foreground mt-2">This description is more specific about the services offered and includes a call-to-action.</p>
                                    <div className="mt-4 p-3 bg-gray-100 border border-gray-300 rounded-md">
                                        <div className="font-semibold mb-1">Current:</div>
                                        <p className="text-gray-700">{oldResults.metaDescription}</p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="keywords">
                                <AccordionTrigger>
                                    <div className="flex items-center">
                                        <Key className="mr-2 h-5 w-5" />
                                        Keyword Optimization
                                    </div>
                                </AccordionTrigger>
                                <AccordionContent>
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="font-semibold">Suggested additional keywords:</span>
                                        <Badge variant="outline" className="bg-green-100 text-green-800">New</Badge>
                                    </div>
                                    <p>data-driven SEO, SEO strategy, search ranking improvement, local SEO, e-commerce SEO, SEO audit, SEO consulting</p>
                                    <p className="text-sm text-muted-foreground mt-2">These keywords are more specific and target different aspects of SEO services.</p>
                                    <div className="mt-4 p-3 bg-gray-100 border border-gray-300 rounded-md">
                                        <div className="font-semibold mb-1">Current:</div>
                                        <p className="text-gray-700">{oldResults.keywords}</p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}