'use client';

import React from 'react';
import AnimatedBackground from '@/components/ui/AnimatedBackground';
import TextReveal from '@/components/ui/TextReveal';
import FadeIn from '@/components/ui/FadeIn';
import ParallaxSection from '@/components/ui/ParallaxSection';
import BookingCTA from '@/components/ui/BookingCTA';
import WhatsAppCTA from '@/components/ui/WhatsAppCTA';

// New Components
import ProblemSection from '@/components/home/ProblemSection';
import HighTicketSolution from '@/components/home/HighTicketSolution';
import ServicesGrid from '@/components/home/ServicesGrid';
import ProcessTimeline from '@/components/home/ProcessTimeline';

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden" id="home">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/home.bg.mp4" type="video/mp4" />
      </video>

      {/* Reduced Overlay for Intensified Video */}
      <div className="absolute inset-0 bg-white/10 z-[0]" />

      {/* Soft Purple Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-porcelain/20 to-porcelain/90 pointer-events-none z-[1]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center text-center">
        <div className="max-w-4xl">
          <FadeIn delay={200}>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-medium tracking-tight text-midnight leading-[1.1] md:leading-[1.05] mb-8">
              <span className="block">Enterprise AI</span>
              <span className="block text-subtext font-light italic font-sans pt-16 text-4xl sm:text-5xl md:text-7xl transform -translate-y-2 md:-translate-y-4">
                for the
              </span>
              <TextReveal
                text="Modern Titan"
                delay={600}
                mode="char"
                stagger={0.08}
                className="text-signature-purple drop-shadow-sm block mt-2"
              />
            </h1>
          </FadeIn>

          <FadeIn delay={800} duration={1}>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-700 leading-relaxed max-w-2xl mb-12 font-light tracking-wide border-l-2 border-signature-start/30 pl-6 backdrop-blur-sm">
              We architect autonomous systems that scale revenue, reclaim time, and cement dominance. This is not just automation; it is your legacy, codified.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <main className="relative min-h-screen bg-porcelain">
        <AnimatedBackground />

        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Problem / Agitation */}
        <ProblemSection />

        {/* 3. The High-Ticket Solution */}
        <HighTicketSolution />

        {/* 4. Mass-Market Services */}
        <ServicesGrid />

        {/* 5. Process / How It Works */}
        <ProcessTimeline />

        {/* 6. Testimonials */}


        {/* 7. Final Booking Call to Action */}
        <BookingCTA
          variant="premium"
          calendlyUrl="https://calendly.com/your-link" // Replace with actual link
          className="w-full"
        />

      </main>

      {/* Floating Elements */}
      <WhatsAppCTA
        phoneNumber="9941968238"
        variant="premium"
        message="I'm ready to scale my enterprise with AI."
      />
    </>
  );
}
