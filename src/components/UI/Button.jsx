import React from 'react';
import { ArrowRight, Rocket, Play, Sparkles } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary',
  size = 'medium',
  icon = null,
  iconPosition = 'left',
  isLoading = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-300 flex items-center justify-center';
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  };
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105',
    secondary: 'border-2 border-purple-500/50 text-white hover:border-purple-400 hover:bg-purple-500/10 transform hover:scale-105 backdrop-blur-sm',
    ghost: 'text-gray-300 hover:text-white hover:bg-gray-800/50'
  };
  
  const iconSize = {
    small: 16,
    medium: 20,
    large: 24
  };
  
  const renderIcon = () => {
    if (isLoading) {
      return (
        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
      );
    }
    
    if (!icon) return null;
    
    const icons = {
      arrow: <ArrowRight size={iconSize[size]} className={iconPosition === 'right' ? 'ml-2' : 'mr-2'} />,
      rocket: <Rocket size={iconSize[size]} className={iconPosition === 'right' ? 'ml-2' : 'mr-2'} />,
      play: <Play size={iconSize[size]} className={iconPosition === 'right' ? 'ml-2' : 'mr-2'} />,
      sparkles: <Sparkles size={iconSize[size]} className={iconPosition === 'right' ? 'ml-2' : 'mr-2'} />
    };
    
    return icons[icon] || null;
  };
  
  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {iconPosition === 'left' && renderIcon()}
      {children}
      {iconPosition === 'right' && renderIcon()}
    </button>
  );
};

export default Button;