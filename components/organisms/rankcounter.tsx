"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function RankCounter() {
    const [count, setCount] = useState(10);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let resetTimeout: NodeJS.Timeout;

        const startCountdown = () => {
            let current = 10;
            setCount(current);
            interval = setInterval(() => {
                current -= 1;
                setCount(current);
                if (current === 1) {
                    clearInterval(interval);
                    resetTimeout = setTimeout(startCountdown, 5000);
                }
            }, 500);
        };

        startCountdown();
        return () => {
            clearInterval(interval);
            clearTimeout(resetTimeout);
        };
    }, []);

    return (
        <div className="w-full rounded-xl flex flex-col items-left justify-center overflow-hidden relative mt-4">
            <AnimatePresence mode="wait">
                <motion.div
                    key={count}
                    initial={{ opacity: 0, y: 20, filter: "blur(2px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -20, filter: "blur(2px)" }}
                    transition={{ duration: 0.4 }}
                    className="text-6xl font-bold text-cyan-500 flex items-center"
                >
                    {count}
                    <ArrowUpRight className="w-6 h-6 ml-1 text-cyan-500" />
                </motion.div>
            </AnimatePresence>
            <motion.p
                className="mt-3 text-gray-600 text-md font-bold text-left"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
            >
                Google Rank for “Boutique Hotel Vienna”
            </motion.p>
        </div>
    );
}