import React, { useState } from 'react';
import { generateGamePrompt } from '../services/geminiService';

export const DemoAI: React.FC = () => {
  const [prompt, setPrompt] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const result = await generateGamePrompt("office parties");
    setPrompt(result);
    setLoading(false);
  };

  return (
    <section className="w-full bg-white py-20 px-6 border-t border-gray-100 z-20 relative">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-bold text-phekoo-blue mb-4">
          Need a lie? Ask our AI.
        </h2>
        <p className="text-gray-600 mb-8">
          Powered by Google Gemini. See what kind of chaos you can start.
        </p>
        
        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-inner min-h-[150px] flex items-center justify-center flex-col">
            {loading ? (
                <div className="animate-pulse flex space-x-2">
                    <div className="w-3 h-3 bg-phekoo-coral rounded-full"></div>
                    <div className="w-3 h-3 bg-phekoo-coral rounded-full animation-delay-100"></div>
                    <div className="w-3 h-3 bg-phekoo-coral rounded-full animation-delay-200"></div>
                </div>
            ) : (
                <p className="text-2xl font-serif italic text-phekoo-grey">
                    "{prompt || "Click the button to generate a scandalous topic..."}"
                </p>
            )}
        </div>

        <button 
            onClick={handleGenerate}
            disabled={loading}
            className="mt-8 bg-phekoo-coral text-white px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-colors disabled:opacity-50"
        >
            {loading ? 'Thinking...' : 'Generate Topic'}
        </button>
      </div>
    </section>
  );
};