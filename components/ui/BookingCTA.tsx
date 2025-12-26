'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import MagneticWrapper from '@/components/ui/MagneticWrapper';
import FadeIn from '@/components/ui/FadeIn';

interface BookingCTAProps {
    variant?: 'default' | 'premium';
    calendlyUrl?: string;
    className?: string;
}

const BookingCTA: React.FC<BookingCTAProps> = ({
    variant = 'default',
    calendlyUrl = '#', // Placeholder - replace with actual Calendly link
    className = ''
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const isPremium = variant === 'premium';

    const handleBooking = () => {
        if (calendlyUrl && calendlyUrl !== '#') {
            // Open Calendly in a new window
            window.open(calendlyUrl, '_blank', 'width=700,height=800');
        } else {
            // Fallback to alert if no URL provided
            alert('Booking integration coming soon! Please contact us directly.');
        }
    };

    return (
        <FadeIn delay={400} direction="up" className={`w-full ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full py-24 md:py-32 overflow-hidden"
            >
                {/* Full Section Background */}
                <div className="absolute inset-0 z-0">
                    {/* Darker overlay for text readability since we lost the card background */}
                    <div className={`absolute inset-0 z-[1] ${isPremium
                        ? 'bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-slate-900/95'
                        : 'bg-gradient-to-b from-white/95 via-porcelain/90 to-white/95'
                        }`} />

                    {/* Collage Background */}
                    <div className="absolute inset-0 z-0 opacity-[1.0] mix-blend-overlay">
                        <img
                            src="/assets/collage-bg.png"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Content Container - Centered */}
                <div className="relative z-10 max-w-4xl mx-auto px-6">

                    {/* Icon */}
                    <div className={`flex justify-center mb-8`}>
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className={`p-5 rounded-full shadow-2xl ${isPremium
                                ? 'bg-gradient-to-br from-signature-start to-signature-end'
                                : 'bg-gradient-to-br from-signature-start to-signature-end'
                                }`}>
                            <Calendar className="w-10 h-10 text-white" />
                        </motion.div>
                    </div>

                    {/* Headline */}
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className={`text-4xl md:text-5xl font-serif font-medium text-center mb-4 ${isPremium ? 'text-white' : 'text-midnight'
                            }`}>
                        {isPremium ? 'Schedule Your Strategy Session' : 'Book Strategy Call'}
                    </motion.h3>

                    {/* Subheadline */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className={`text-center text-lg md:text-xl mb-10 max-w-2xl mx-auto ${isPremium ? 'text-slate-300' : 'text-subtext'
                            }`}>
                        {isPremium
                            ? '60-Minute Executive AI Transformation Assessment. Architect your legacy.'
                            : '30-Minute Complimentary AI Solutions Discovery Call'
                        }
                    </motion.p>

                    {/* Benefits List */}
                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12">
                        {(isPremium
                            ? [
                                'Custom Enterprise Roadmap',
                                'ROI & Timeline Analysis',
                                'Tech Stack Architecture'
                            ]
                            : [
                                'Identify Automation Opportunities',
                                'Personalized Recommendations',
                                'No-Obligation Pricing'
                            ]
                        ).map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 + (index * 0.1) }}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full border ${isPremium
                                    ? 'bg-white/5 border-white/10 text-slate-200'
                                    : 'bg-midnight/5 border-midnight/10 text-midnight'
                                    }`}
                            >
                                <CheckCircle2 className={`w-4 h-4 ${isPremium ? 'text-signature-start' : 'text-signature-start'}`} />
                                <span className="text-sm font-medium tracking-wide">
                                    {benefit}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex justify-center"
                    >
                        <MagneticWrapper strength={0.3}>
                            <Button
                                onClick={handleBooking}
                                variant={isPremium ? 'default' : 'default'}
                                size="lg"
                                icon
                                className={`min-w-[200px] text-lg py-6 shadow-xl shadow-signature-start/20 ${isPremium
                                    ? 'bg-gradient-to-r from-signature-start to-signature-end hover:from-purple-400 hover:to-purple-600 text-white font-semibold'
                                    : ''
                                    }`}
                            >
                                {isPremium ? 'Book Strategy Session' : 'Book Strategy Call'}
                            </Button>
                        </MagneticWrapper>
                    </motion.div>

                    {/* Trust Badge */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                        className={`text-center text-sm mt-6 ${isPremium ? 'text-slate-500' : 'text-subtext/60'
                            }`}>
                        🔒 {isPremium ? 'Confidential & Secure' : 'No credit card required'}
                    </motion.p>
                </div>
            </motion.div>
        </FadeIn>
    );
};

export default BookingCTA;
