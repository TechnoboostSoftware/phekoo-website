import React, { useState, useEffect, useRef } from 'react';
import PaperPlane from '../src/paper-plane.png';
import { Button } from './Button';

export const ContactUs: React.FC = () => {
    const [isCompany, setIsCompany] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rect = containerRef.current.getBoundingClientRect();
                // Calculate a value that changes as the section comes into view
                // We want the plane to move from left to right as we scroll down
                const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (window.innerHeight + rect.height)));
                setOffsetY(progress * 100); // Move 100px based on scroll
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section ref={containerRef} className="relative w-full py-24 bg-[#F4F6F8] overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center relative z-10">

                {/* Left Column: The Hook */}
                <div className="w-full md:w-2/5 mb-12 md:mb-0 relative">
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-phekoo-blue mb-6 leading-tight">
                        TALK TO<br />THE HOST.
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-sm">
                        Have a feature idea? Or want to roast your team? We are listening.
                    </p>

                    {/* Parallax Paper Plane */}
                    <div
                        className="relative w-64 h-64 md:w-80 md:h-80 transition-transform duration-100 ease-out will-change-transform"
                        style={{ transform: `translateX(${offsetY}px) rotate(-10deg)` }}
                    >
                        <img
                            src={PaperPlane}
                            alt="Paper Plane"
                            className="w-full h-full object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>

                {/* Right Column: The Action (Glassmorphism Form) */}
                <div className="w-full md:w-3/5 md:pl-12">
                    <div className="bg-white/70 backdrop-blur-md border border-white/50 rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative">

                        {/* Toggle Switch */}
                        <div className="flex justify-center mb-10">
                            <div className="bg-white rounded-full p-1 flex shadow-sm border border-gray-100 relative">
                                <button
                                    onClick={() => setIsCompany(false)}
                                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 z-10 ${!isCompany ? 'text-white' : 'text-gray-500 hover:text-phekoo-blue'}`}
                                >
                                    I'm a Player
                                </button>
                                <button
                                    onClick={() => setIsCompany(true)}
                                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 z-10 ${isCompany ? 'text-white' : 'text-gray-500 hover:text-phekoo-blue'}`}
                                >
                                    I'm a Company
                                </button>

                                {/* Sliding Background */}
                                <div
                                    className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-phekoo-blue rounded-full transition-all duration-300 ease-in-out shadow-md`}
                                    style={{ left: isCompany ? '50%' : '4px' }}
                                />
                            </div>
                        </div>

                        {/* Form Fields */}
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-phekoo-blue uppercase tracking-wider ml-1">Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-6 py-4 bg-white/50 border-2 border-transparent focus:border-phekoo-blue/30 rounded-2xl outline-none transition-all placeholder-gray-400 font-medium text-phekoo-blue shadow-inner focus:bg-white"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-phekoo-blue uppercase tracking-wider ml-1">Email</label>
                                    <input
                                        type="email"
                                        className="w-full px-6 py-4 bg-white/50 border-2 border-transparent focus:border-phekoo-blue/30 rounded-2xl outline-none transition-all placeholder-gray-400 font-medium text-phekoo-blue shadow-inner focus:bg-white"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            {isCompany && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in-up">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-phekoo-blue uppercase tracking-wider ml-1">Company Name</label>
                                        <input
                                            type="text"
                                            className="w-full px-6 py-4 bg-white/50 border-2 border-transparent focus:border-phekoo-blue/30 rounded-2xl outline-none transition-all placeholder-gray-400 font-medium text-phekoo-blue shadow-inner focus:bg-white"
                                            placeholder="Acme Corp"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-phekoo-blue uppercase tracking-wider ml-1">Team Size</label>
                                        <select className="w-full px-6 py-4 bg-white/50 border-2 border-transparent focus:border-phekoo-blue/30 rounded-2xl outline-none transition-all text-gray-500 font-medium shadow-inner focus:bg-white appearance-none cursor-pointer">
                                            <option>1 - 10</option>
                                            <option>10 - 50</option>
                                            <option>50 - 200</option>
                                            <option>200+</option>
                                        </select>
                                    </div>
                                </div>
                            )}

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-phekoo-blue uppercase tracking-wider ml-1">Message</label>
                                <textarea
                                    rows={4}
                                    className="w-full px-6 py-4 bg-white/50 border-2 border-transparent focus:border-phekoo-blue/30 rounded-2xl outline-none transition-all placeholder-gray-400 font-medium text-phekoo-blue shadow-inner focus:bg-white resize-none"
                                    placeholder={isCompany ? "Tell us about your event..." : "I have a suggestion..."}
                                />
                            </div>

                            <Button
                                type="button"
                                fullWidth
                                className="mt-4 px-8 py-4 text-lg tracking-wide shadow-xl hover:shadow-2xl hover:-translate-y-1"
                            >
                                SEND IT
                            </Button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    );
};
