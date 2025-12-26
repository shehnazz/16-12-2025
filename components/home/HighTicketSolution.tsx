'use client';

import React from 'react';
import FadeIn from '@/components/ui/FadeIn';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const HighTicketSolution = () => {
    return (
        <section className="relative py-24 md:py-32 bg-porcelain overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-signature-start/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Left: Introduction */}
                    <FadeIn direction="right">
                        <div>
                            <div className="inline-block px-4 py-1.5 rounded-full border border-midnight/10 bg-white/50 backdrop-blur-sm text-sm font-medium text-midnight/70 mb-8">
                                The Protocol of Evolution
                            </div>
                            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium tracking-tight text-midnight mb-8 leading-[1.1]">
                                Reclaim Your <br />
                                <span className="italic text-signature-start">Sovereignty</span>
                            </h2>
                            <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-8 max-w-xl">
                                We replace the linear grind with exponential intelligence. By architecting a custom AI ecosystem for your enterprise, we decouple your revenue from your time.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    className="bg-midnight hover:bg-slate-900 text-white rounded-full px-8 py-6 text-lg font-light tracking-wide transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    Explore the Strategy
                                    <ArrowRight className="ml-2 w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Right: The Solution Pillars */}
                    <div className="space-y-6">
                        {[
                            {
                                title: "Autonomous Operations",
                                desc: "Systems that execute complex workflows without human intervention.",
                            },
                            {
                                title: "Predictive Intelligence",
                                desc: "Data engines that forecast trends and opportunities before they arise.",
                            },
                            {
                                title: "Legacy Codification",
                                desc: "Your expertise, digitized and scaled infinitely across your organization.",
                            }
                        ].map((item, i) => (
                            <FadeIn key={i} delay={i * 150} direction="left">
                                <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-signature-start/10 flex items-center justify-center shrink-0 mt-1">
                                            <CheckCircle2 className="w-5 h-5 text-signature-start" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-serif text-midnight mb-2 group-hover:text-signature-start transition-colors duration-300">
                                                {item.title}
                                            </h3>
                                            <p className="text-slate-500 font-light leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HighTicketSolution;
