import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}

export const MagicCard: React.FC<MagicCardProps> = ({
  children,
  className = '',
  glowColor = 'rgba(37, 99, 235, 0.15)',
  onClick
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: -1000, y: -1000 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCursorPosition({ x: -1000, y: -1000 });
      }}
      onClick={onClick}
      whileHover={{ y: -4, transition: { duration: 0.2, ease: 'easeOut' } }}
      className={`relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-300 ${className}`}
    >
      {/* Magic Spotlight Glow overlay tracking cursor */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
          style={{
            background: `radial-gradient(500px circle at ${cursorPosition.x}px ${cursorPosition.y}px, ${glowColor}, transparent 70%)`
          }}
        />
      )}

      {/* Card Content Container */}
      <div className="relative z-20 h-full">
        {children}
      </div>
    </motion.div>
  );
};
