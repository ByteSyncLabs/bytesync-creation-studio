
import React from "react";

type LogoProps = {
  animated?: boolean;
  className?: string;
};

const ByteSyncLogo: React.FC<LogoProps> = ({ animated = true, className = "" }) => {
  return (
    <div className={`flex items-center ${className}`}>
      {animated ? (
        <div className="relative">
          <div className="flex items-center">
            <div className="animate-b-bounce">
              <img 
                src="/lovable-uploads/ad222247-deda-41f4-adc4-cdc45d77af62.png" 
                alt="ByteSync Logo" 
                className="h-10 object-contain drop-shadow-[0_0_10px_rgba(255,193,7,0.5)]"
              />
            </div>
            <div className="animate-text-slide-in ml-1">
              <span className="font-bold text-xl text-foreground">yteSync</span>
              <span className="text-xs tracking-widest text-bytesync-orange ml-1 font-light uppercase">Labs</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/ad222247-deda-41f4-adc4-cdc45d77af62.png" 
            alt="ByteSync Logo" 
            className="h-10 object-contain drop-shadow-[0_0_10px_rgba(255,193,7,0.5)]"
          />
          <div className="ml-1">
            <span className="font-bold text-xl text-foreground">yteSync</span>
            <span className="text-xs tracking-widest text-bytesync-orange ml-1 font-light uppercase">Labs</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ByteSyncLogo;
