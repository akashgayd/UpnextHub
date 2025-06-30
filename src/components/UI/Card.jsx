import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  gradientColors = 'from-gray-900 to-gray-800', 
  borderColor = 'border-gray-800',
  hoverBorderColor = 'hover:border-purple-500/50',
  gradientDirection = 'bg-gradient-to-br',
  withGlow = false,
  glowColors = 'from-blue-500 to-purple-600'
}) => {
  return (
    <div className={`relative ${gradientDirection} ${gradientColors} rounded-2xl p-6 border ${borderColor} ${hoverBorderColor} transition-all duration-300 card-3d group ${className}`}>
      {withGlow && (
        <div className={`absolute -inset-1 bg-gradient-to-r ${glowColors} rounded-2xl opacity-10 blur-lg group-hover:opacity-20 transition-opacity duration-300`}></div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;