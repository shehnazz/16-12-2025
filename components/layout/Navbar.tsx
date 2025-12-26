'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const { scrollYProgress } = useScroll();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navLinks.map((link) => link.href.slice(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            {/* Progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-0.5 bg-accent z-[60] origin-left"
                style={{ scaleX: scrollYProgress }}
            />

            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? "bg-porcelain/80 backdrop-blur-xl shadow-md border-b border-border/50"
                    : "bg-transparent py-4"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <nav className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <motion.a
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("#home");
                            }}
                            className="flex items-center gap-2 group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <motion.div
                                className="w-10 h-10 rounded-xl bg-gradient-to-br from-signature-start to-signature-end flex items-center justify-center shadow-lg"
                                whileHover={{ rotate: 5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            >
                                <span className="text-white font-serif font-bold text-lg">T</span>
                            </motion.div>
                            <span className="text-xl font-serif font-semibold tracking-tight text-midnight">
                                TagVerse
                            </span>
                        </motion.a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link, index) => {
                                const isActive = activeSection === link.href.slice(1);
                                return (
                                    <motion.button
                                        key={link.name}
                                        onClick={() => scrollToSection(link.href)}
                                        className="relative px-4 py-2 text-sm font-medium tracking-wide"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ y: -1 }}
                                    >
                                        <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-signature-start" : "text-subtext hover:text-midnight"
                                            }`}>
                                            {link.name}
                                        </span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeNav"
                                                className="absolute inset-0 bg-signature-start/5 rounded-lg"
                                                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                            />
                                        )}
                                        {/* Hover underline */}
                                        <motion.div
                                            className="absolute bottom-1 left-4 right-4 h-0.5 bg-signature-start origin-left"
                                            initial={{ scaleX: 0 }}
                                            whileHover={{ scaleX: 1 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </motion.button>
                                );
                            })}
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            className="hidden md:flex items-center gap-4"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    variant="hero"
                                    size="default"
                                    onClick={() => scrollToSection("#cta")}
                                    className="relative overflow-hidden group"
                                >
                                    <motion.span
                                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                                        initial={{ x: "-100%" }}
                                        whileHover={{ x: "100%" }}
                                        transition={{ duration: 0.6 }}
                                    />
                                    <span className="relative z-10">Initiate Partnership</span>
                                </Button>
                            </motion.div>
                        </motion.div>

                        {/* Mobile Menu Toggle */}
                        <motion.button
                            className="md:hidden p-2 text-midnight relative"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            whileTap={{ scale: 0.95 }}
                        >
                            <AnimatePresence mode="wait">
                                {isMobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X size={24} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu size={24} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </nav>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                            className="md:hidden bg-porcelain/95 backdrop-blur-xl border-b border-border overflow-hidden"
                        >
                            <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
                                {navLinks.map((link, index) => {
                                    const isActive = activeSection === link.href.slice(1);
                                    return (
                                        <motion.button
                                            key={link.name}
                                            onClick={() => scrollToSection(link.href)}
                                            className={`text-left py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 ${isActive
                                                ? "bg-signature-start/10 text-signature-start"
                                                : "text-subtext hover:text-midnight hover:bg-black/5"
                                                }`}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            {link.name}
                                        </motion.button>
                                    );
                                })}
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="pt-4"
                                >
                                    <Button
                                        variant="hero"
                                        size="lg"
                                        onClick={() => scrollToSection("#cta")}
                                        className="w-full"
                                    >
                                        Initiate Partnership
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>
        </>
    );
};

export default Navbar;
