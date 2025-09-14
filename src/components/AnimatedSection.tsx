'use client';

import React from 'react';
import { useInView } from './ScrollAnimations';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleUp' | 'slideInUp';
  delay?: number;
  duration?: number;
}

export function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6
}: AnimatedSectionProps) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (!inView) {
      switch (animation) {
        case 'fadeInUp':
          return `${baseClasses} opacity-0 translate-y-16`;
        case 'fadeInLeft':
          return `${baseClasses} opacity-0 -translate-x-16`;
        case 'fadeInRight':
          return `${baseClasses} opacity-0 translate-x-16`;
        case 'scaleUp':
          return `${baseClasses} opacity-0 scale-95`;
        case 'slideInUp':
          return `${baseClasses} opacity-0 translate-y-20`;
        default:
          return `${baseClasses} opacity-0 translate-y-16`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  const style = {
    transitionDelay: inView ? `${delay}ms` : '0ms',
    transitionDuration: `${duration * 1000}ms`
  };

  return (
    <div 
      ref={ref} 
      className={`${getAnimationClasses()} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

// Staggered animation for multiple children
export function StaggeredContainer({ 
  children, 
  className = '',
  staggerDelay = 100 
}: {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <AnimatedSection
          key={index}
          animation="fadeInUp"
          delay={inView ? index * staggerDelay : 0}
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
}

// Counter animation for stats
export function AnimatedCounter({ 
  end, 
  suffix = '', 
  duration = 2000,
  className = ''
}: {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!inView) return;

    let startTime: number;
    const startValue = 0;
    const endValue = end;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * (endValue - startValue) + startValue);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {count}{suffix}
    </span>
  );
}
