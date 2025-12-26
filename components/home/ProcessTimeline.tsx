'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '@/components/ui/FadeIn';

const ProcessTimeline = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const steps = [
        {
            number: "01",
            title: "The Blueprint",
            description: "We deconstruct your brand essence to architect a digital sanctuary. Every pixel is strategic, every interaction calculated for authority.",
            detail: "Vision & Strategy"
        },
        {
            number: "02",
            title: "The Craft",
            description: "Precision engineering meets aesthetic mastery. We weave performant code with fluid motion to build an infrastructure of elegance.",
            detail: "Design & Development"
        },
        {
            number: "03",
            title: "The Launch",
            description: "Your digital flagship goes live. A seamless ascension into the market, designed to command attention and convert traffic into legacy.",
            detail: "Deployment & Scale"
        }
    ];

    return (
        <section ref={containerRef} className="relative py-32 bg-midnight text-porcelain overflow-hidden" id="process">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ opacity: 1.0 }}
            >
                <source src="/assets/footer-bg.webm" type="video/webm" />
            </video>

            {/* Dark Overlay for Better Text Contrast */}
            <div className="absolute inset-0 bg-midnight/60 z-[1]" />

            {/* Animated Line */}
            <div className="absolute left-[50%] top-0 bottom-0 w-px bg-white/10 hidden md:block z-[2]">
                <motion.div
                    className="w-full bg-gradient-to-b from-transparent via-signature-start to-transparent w-[2px] -ml-[0.5px]"
                    style={{ height: "30%", top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), position: "absolute" }}
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-6xl font-serif font-medium mb-6">The Digital <span className="italic text-subtext/80">Genesis</span></h2>
                    </div>
                </FadeIn>

                <div className="space-y-24">
                    {steps.map((step, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Content Side */}
                            <div className="flex-1 text-center md:text-left">
                                <FadeIn direction={index % 2 === 1 ? 'left' : 'right'}>
                                    <div className="inline-block mb-4 text-sm tracking-widest uppercase text-signature-start font-medium bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                        {step.detail}
                                    </div>
                                    <h3 className="text-4xl font-serif mb-4 text-white">{step.title}</h3>
                                    <p className="text-lg text-subtext/60 font-light leading-relaxed max-w-sm mx-auto md:mx-0">
                                        {step.description}
                                    </p>
                                </FadeIn>
                            </div>

                            {/* Number/Icon Side - Center */}
                            <div className="relative shrink-0 z-10">
                                <FadeIn>
                                    <div className="w-24 h-24 rounded-full bg-midnight border-2 border-white/10 flex items-center justify-center relative shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                                        <span className="text-3xl font-serif font-medium text-signature-start">{step.number}</span>
                                        {/* Pulse Effect */}
                                        <div className="absolute inset-0 rounded-full border border-white/5 animate-ping opacity-20" />
                                    </div>
                                </FadeIn>
                            </div>

                            {/* Empty Side for Balance */}
                            <div className="flex-1 hidden md:block" />

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessTimeline;
