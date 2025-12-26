'use client';

import React from 'react';
import FadeIn from '@/components/ui/FadeIn';
import SpotlightCard from '@/components/ui/SpotlightCard';
import { Code2, Smartphone, Bot, Rocket, ShieldCheck, Globe } from 'lucide-react';

const ServicesGrid = () => {
    const services = [
        {
            title: 'Web Excellence',
            description: 'High-performance websites that captivate and convert. Built on Next.js for speed and SEO dominance.',
            icon: <Globe className="w-8 h-8 text-white" />
        },
        {
            title: 'Mobile Applications',
            description: 'Native and cross-platform apps that put your brand in your customers\' pockets with flawless UX.',
            icon: <Smartphone className="w-8 h-8 text-white" />
        },
        {
            title: 'AI Assistants',
            description: 'Intelligent chatbots that handle customer service 24/7, reducing overhead and increasing satisfaction.',
            icon: <Bot className="w-8 h-8 text-white" />
        },
        {
            title: 'MVP Rapid Launch',
            description: 'Go from idea to market-ready product in record time. We build the core, you build the business.',
            icon: <Rocket className="w-8 h-8 text-white" />
        },
        {
            title: 'Enterprise Security',
            description: 'Fortified digital infrastructure protecting your assets and data with bank-grade security protocols.',
            icon: <ShieldCheck className="w-8 h-8 text-white" />
        },
        {
            title: 'Custom Development',
            description: 'Tailored software solutions solving unique business challenges that off-the-shelf tools can\'t touch.',
            icon: <Code2 className="w-8 h-8 text-white" />
        }
    ];

    return (
        <section className="relative py-24 md:py-32 bg-slate-50 overflow-hidden" id="services">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <FadeIn>
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-serif font-medium text-midnight mb-6">
                            Foundational <span className="italic text-signature-start">Excellence</span>
                        </h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
                            For businesses ready to solidify their digital footprint. Premium execution for essential needs.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <FadeIn key={index} delay={index * 100}>
                            <SpotlightCard className="h-full bg-white border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500">
                                <div className="p-8 h-full flex flex-col items-start relative z-10">
                                    <div className="w-14 h-14 rounded-2xl bg-midnight flex items-center justify-center mb-6 shadow-lg shadow-midnight/20">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-serif text-midnight mb-4">{service.title}</h3>
                                    <p className="text-slate-500 leading-relaxed font-light">
                                        {service.description}
                                    </p>
                                </div>
                            </SpotlightCard>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
