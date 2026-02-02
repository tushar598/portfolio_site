import React from 'react';
import { Play } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'icon';
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false,
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-display font-bold uppercase tracking-wider transition-all duration-300 rounded-full";
  
  const variants = {
    primary: "bg-white text-brand-orange hover:bg-brand-dark hover:text-white px-6 py-3 text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1",
    secondary: "bg-brand-orange text-white border-2 border-white px-6 py-3 text-sm hover:bg-white hover:text-brand-orange",
    outline: "bg-transparent text-white border border-white/30 hover:bg-white hover:text-brand-orange px-6 py-3 text-sm",
    icon: "w-12 h-12 bg-white text-brand-orange rounded-full flex items-center justify-center hover:scale-110 shadow-md"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {icon && <div className="mr-2 bg-brand-orange text-white rounded-full p-1"><Play size={10} fill="currentColor" /></div>}
      {children}
    </button>
  );
};

export default Button;