import React from 'react';
import { ChatMessage, PhoneScreenMode } from '../types';

interface PhoneMockupProps {
  rotation?: number;
  mode?: PhoneScreenMode;
  className?: string;
}

export const PhoneMockup: React.FC<PhoneMockupProps> = ({ 
  rotation = 0, 
  mode = PhoneScreenMode.LOBBY,
  className = ""
}) => {
  // Determine if Dark Mode (Mafia)
  const isDark = mode === PhoneScreenMode.MAFIA;

  // --- CONTENT RENDERERS ---

  const renderLobby = () => {
    const messages: ChatMessage[] = [
      { id: '1', sender: 'Game Host', text: 'Who said this?', isUser: false },
      { id: '2', sender: 'You', text: 'Totally Nrupesh.', isUser: true },
      { id: '3', sender: 'Sarah', text: 'I think it was Alex!', isUser: false },
    ];
    return (
      <>
        {/* Chat Area */}
        <div className="flex-1 p-4 space-y-4 overflow-y-auto">
            <div className="text-center text-xs text-gray-400 my-2">Game starting in 00:45</div>
            {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-3 rounded-2xl text-sm shadow-sm ${
                          msg.isUser 
                            ? 'bg-phekoo-blue text-white rounded-br-none' 
                            : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
                      }`}>
                          {!msg.isUser && <div className="text-[10px] font-bold opacity-50 mb-1">{msg.sender}</div>}
                          {msg.text}
                      </div>
                </div>
            ))}
            {/* Typing indicator */}
            <div className="flex justify-start">
                <div className="bg-white border border-gray-100 px-4 py-3 rounded-2xl rounded-bl-none flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
            </div>
        </div>
        {/* Input Area */}
        <div className="h-20 bg-white border-t border-gray-100 px-4 flex items-center">
            <div className="w-full h-12 bg-gray-100 rounded-full px-4 flex items-center text-gray-400 text-sm">
                Type a lie...
            </div>
        </div>
      </>
    );
  };

  const renderQuestion = () => (
    <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-6 bg-gray-50">
       <div className="w-12 h-12 bg-blue-100 text-phekoo-blue rounded-full flex items-center justify-center font-bold text-xl mb-4">
         ?
       </div>
       <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 w-full">
         <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Round 1</h3>
         <p className="text-phekoo-blue font-serif font-bold text-xl leading-relaxed">
           Describe the plot of the movie <span className="text-phekoo-coral">Sharknado 4</span>.
         </p>
       </div>
       <p className="text-sm text-gray-400 animate-pulse">Waiting for host...</p>
    </div>
  );

  const renderInput = () => (
    <div className="flex-1 flex flex-col bg-gray-50 relative">
      <div className="p-6">
        <h3 className="text-phekoo-blue font-bold text-lg mb-4">Your Answer</h3>
        <div className="w-full bg-white p-4 rounded-xl shadow-sm border border-blue-100 min-h-[120px] relative">
          <p className="text-gray-800 font-medium">
             Sharks in space... with lasers.
             <span className="inline-block w-0.5 h-4 bg-phekoo-coral ml-1 animate-pulse align-middle"></span>
          </p>
        </div>
      </div>
      {/* Fake Keyboard */}
      <div className="mt-auto bg-gray-200 p-2 pb-6">
         <div className="flex justify-center mb-2 space-x-1">
             <div className="h-8 bg-white rounded shadow-sm w-[90%] flex items-center justify-center text-xs text-gray-500">Suggestions...</div>
         </div>
         <div className="grid grid-rows-4 gap-1.5 px-1">
            <div className="h-10 bg-white rounded shadow-sm"></div>
            <div className="h-10 bg-white rounded shadow-sm"></div>
            <div className="h-10 bg-white rounded shadow-sm"></div>
            <div className="h-10 bg-gray-300 rounded shadow-sm w-1/2 mx-auto"></div>
         </div>
      </div>
    </div>
  );

  const renderVoting = () => (
    <div className="flex-1 p-6 bg-gray-50 flex flex-col">
       <div className="mb-6 text-center">
         <h3 className="text-phekoo-blue font-bold text-xl">Vote for the Lie</h3>
         <p className="text-xs text-gray-500 mt-1">Spot the fake answer</p>
       </div>
       <div className="space-y-3">
          {['A tornado full of sharks hits Vegas.', 'Sharks in space... with lasers.', 'Fin Shepard fights sharks with a lightsaber.', 'Sharknado vs Whalewolf.'].map((ans, i) => (
             <button key={i} className={`w-full text-left p-4 rounded-xl text-sm transition-all duration-300 ${i === 1 ? 'bg-phekoo-blue text-white shadow-lg scale-105 ring-2 ring-offset-2 ring-phekoo-blue' : 'bg-white text-gray-700 shadow-sm border border-gray-100 hover:bg-gray-50'}`}>
                {ans}
             </button>
          ))}
       </div>
    </div>
  );

  const renderMafia = () => (
    <div className="flex-1 bg-[#1a1a1a] flex flex-col items-center justify-center text-center p-8 relative overflow-hidden">
        {/* Red Warning Light Effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-red-900/10 animate-pulse pointer-events-none"></div>
        
        <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(220,38,38,0.5)]">
            <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        </div>

        <h2 className="text-3xl font-serif font-bold text-white mb-2 tracking-wide">SECRET ROLE</h2>
        <p className="text-red-500 font-bold tracking-widest text-sm uppercase mb-8">Confidential</p>

        <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10 w-full">
            <p className="text-white text-lg font-bold">YOU ARE THE MAFIA</p>
            <p className="text-gray-400 text-xs mt-2">Blend in. Don't get caught.</p>
        </div>
    </div>
  );

  return (
    <div 
      className={`relative w-[300px] h-[600px] transition-transform duration-500 ease-out ${className}`}
      style={{
        transform: rotation ? `perspective(1000px) rotateY(${-15 + rotation}deg) rotateX(5deg)` : 'none',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Phone Body */}
      <div className={`absolute inset-0 rounded-[40px] shadow-2xl border-4 overflow-hidden flex flex-col transition-colors duration-500 ${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'}`}>
        
        {/* Notch/Top Bar */}
        <div className={`h-8 w-full flex justify-center items-end pb-1 relative z-20 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
          <div className={`w-32 h-5 rounded-b-2xl ${isDark ? 'bg-black' : 'bg-gray-100'}`}></div>
        </div>

        {/* Screen Content */}
        <div className={`flex-1 flex flex-col relative overflow-hidden ${isDark ? 'bg-[#111]' : 'bg-gray-50'}`}>
            
            {/* Header */}
            <div className={`h-16 w-full flex items-center justify-between px-6 shadow-md z-10 transition-colors duration-500 ${isDark ? 'bg-red-900/20 border-b border-red-900/30' : 'bg-phekoo-blue'}`}>
                <span className={`font-bold text-lg ${isDark ? 'text-red-500' : 'text-white'}`}>
                    {mode === PhoneScreenMode.LOBBY ? 'Lobby #8421' : 'Phekoo'}
                </span>
                <div className={`w-8 h-8 rounded-full ${isDark ? 'bg-red-500' : 'bg-white/20'}`}></div>
            </div>

            {mode === PhoneScreenMode.LOBBY && renderLobby()}
            {mode === PhoneScreenMode.QUESTION && renderQuestion()}
            {mode === PhoneScreenMode.INPUT && renderInput()}
            {mode === PhoneScreenMode.VOTING && renderVoting()}
            {mode === PhoneScreenMode.MAFIA && renderMafia()}

        </div>

        {/* Home Indicator */}
        <div className={`h-6 w-full flex justify-center items-center absolute bottom-0 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
             <div className={`w-32 h-1 rounded-full ${isDark ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
        </div>
      </div>
      
      {/* Phone Shadow/Reflection */}
      <div className="absolute -right-4 top-10 w-full h-[90%] bg-black/5 rounded-[40px] -z-10 blur-xl transform translate-x-4 translate-y-4"></div>
    </div>
  );
};