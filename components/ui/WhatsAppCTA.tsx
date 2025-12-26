'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface WhatsAppCTAProps {
    phoneNumber?: string; // Format: 1234567890 (without + or spaces)
    message?: string;
    variant?: 'default' | 'premium';
}

const WhatsAppCTA: React.FC<WhatsAppCTAProps> = ({
    phoneNumber = '1234567890', // Placeholder - replace with actual number
    message,
    variant = 'default'
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    // Show button after a short delay for elegance
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    const defaultMessage = variant === 'premium'
        ? "Hi TagVerse! I'm exploring enterprise AI solutions. I'd like to schedule a strategy call to discuss custom implementation."
        : "I'm ready to scale my enterprise with AI.";

    const whatsappMessage = encodeURIComponent(message || defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

    const isPremium = variant === 'premium';

    return (
        <>
            {/* Floating WhatsApp Button */}
            <div
                className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                    }`}
            >
                {/* Tooltip/Message Preview */}
                {isExpanded && (
                    <div className={`absolute bottom-full right-0 mb-4 w-64 p-4 rounded-xl shadow-2xl animate-in slide-in-from-bottom-2 ${isPremium
                        ? 'bg-slate-900 border border-signature-start/30'
                        : 'bg-white border border-purple-200'
                        }`}>
                        <button
                            onClick={() => setIsExpanded(false)}
                            className={`absolute top-2 right-2 p-1 rounded-full transition-colors ${isPremium
                                ? 'hover:bg-slate-800 text-slate-400'
                                : 'hover:bg-gray-100 text-gray-500'
                                }`}
                        >
                            <X className="w-4 h-4" />
                        </button>
                        <p className={`text-sm font-medium mb-2 ${isPremium ? 'text-white' : 'text-midnight'
                            }`}>
                            💬 Chat with us on WhatsApp
                        </p>
                        <p className={`text-xs ${isPremium ? 'text-slate-300' : 'text-subtext'
                            }`}>
                            Get instant answers to your questions
                        </p>
                    </div>
                )}

                {/* Main Button */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseEnter={() => setIsExpanded(true)}
                    className={`group relative flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl ${isPremium
                        ? 'bg-gradient-to-br from-signature-start to-signature-end hover:from-purple-400 hover:to-purple-600'
                        : 'bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700'
                        }`}
                >
                    {/* Pulse Animation */}
                    <div className={`absolute inset-0 rounded-full animate-ping opacity-20 ${isPremium ? 'bg-signature-start' : 'bg-green-400'
                        }`} />

                    {/* Icon */}
                    <MessageCircle className="w-7 h-7 text-white relative z-10 transition-transform duration-300 group-hover:rotate-12" />

                    {/* Notification Badge */}
                    <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center ${isPremium ? 'bg-signature-end' : 'bg-red-500'
                        }`}>
                        <span className="text-white text-xs font-bold">1</span>
                    </div>
                </a>
            </div >
        </>
    );
};

export default WhatsAppCTA;
