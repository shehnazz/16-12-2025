'use client';

import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';

const ProblemSection = () => {
    return (
        <section className="relative py-24 md:py-32 bg-midnight text-porcelain overflow-hidden">
            {/* Subtle Grid Background */}
            <div className="absolute inset-0 bg-[url('/assets/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
                        <h2 className="text-4xl md:text-6xl font-serif font-medium tracking-tight mb-6">
                            The <span className="italic text-subtext/80">Ceiling</span> of Success
                        </h2>
                        <p className="text-lg md:text-xl text-subtext/60 font-light leading-relaxed">
                            You’ve built an empire. But the very systems that got you here are now the chains holding you back.
                            Manual scaling is a linear trap in an exponential world.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {[
                        {
                            title: "Time Bankruptcy",
                            description: "You are the bottleneck. Every major decision, every fire, every approval waits for you.",
                            icon: "⏳"
                        },
                        {
                            title: "Revenue Plateaus",
                            description: "Hiring more people to do more work yields diminishing returns. Margins shrink as headcount swells.",
                            icon: "📉"
                        },
                        {
                            title: "Operational Chaos",
                            description: "Fragments of data, disconnected tools, and tribal knowledge that walks out the door.",
                            icon: "🌪️"
                        }
                    ].map((item, index) => (
                        <FadeIn key={index} delay={index * 200} direction="up">
                            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-500 group">
                                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 transform origin-left">{item.icon}</div>
                                <h3 className="text-2xl font-serif mb-4 text-porcelain">{item.title}</h3>
                                <p className="text-subtext/70 font-light leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
