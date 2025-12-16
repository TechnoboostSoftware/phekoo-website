import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean;
    className?: string; // Allow overriding/merging classes
}

export const Button: React.FC<ButtonProps> = ({
    onClick,
    children,
    className = "",
    fullWidth = false,
    ...props
}) => {
    return (
        <button
            onClick={onClick}
            className={`
        relative 
        group 
        bg-phekoo-blue 
        text-white 
        uppercase 
        font-bold 
        tracking-wider 
        rounded-xl 
        border-b-[4px] border-[#1A2555] 
        hover:bg-[#344491] 
        active:border-b-0 
        active:translate-y-[4px] 
        transition-all 
        duration-100 
        ease-out
        px-5 py-1.5
        text-xs md:text-sm
        ${fullWidth ? 'w-full' : 'w-auto'}
        ${className} 
      `}
            {...props}
        >
            <div className="relative z-10 flex items-center justify-center">
                {children}
            </div>

            {/* Gloss Effect (Highlight) */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-xl pointer-events-none"></div>

            {/* Corner Gloss Blob */}
            <div className="absolute bottom-2 right-2 w-4 h-2 bg-white/10 rounded-full blur-[1px] rotate-[-15deg] pointer-events-none"></div>
        </button>
    );
};
