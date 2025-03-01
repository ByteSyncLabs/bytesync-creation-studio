
import React, { useEffect, useRef, useState } from "react";

const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            entry.target.classList.add("opacity-100");
            entry.target.classList.remove("opacity-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const stats = [
    { value: 100, suffix: "%", label: "Client Satisfaction" },
    { value: 75, suffix: "+", label: "Projects Completed" },
    { value: 60, suffix: "+", label: "Clients Worldwide" }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-16 relative overflow-hidden bg-bytesync-orange/5 opacity-0 transition-opacity duration-1000"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="stats-item text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-gradient">
                {hasAnimated ? (
                  <CountUpAnimation targetValue={stat.value} duration={2000} />
                ) : (
                  0
                )}
                {stat.suffix}
              </div>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple Count-up animation component
const CountUpAnimation = ({ targetValue, duration }: { targetValue: number, duration: number }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (count < targetValue) {
      const intervalTime = duration / targetValue;
      const timer = setInterval(() => {
        setCount(prevCount => {
          const newCount = prevCount + 1;
          if (newCount >= targetValue) {
            clearInterval(timer);
            return targetValue;
          }
          return newCount;
        });
      }, intervalTime);
      
      return () => clearInterval(timer);
    }
  }, [count, targetValue, duration]);
  
  return <>{count}</>;
};

export default StatsSection;
