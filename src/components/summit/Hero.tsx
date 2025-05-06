
import React from 'react';
import { Trophy } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface HeroProps {
  summitTitle: string;
  summitSubtitle: string;
  poweredBy: string;
  heroImage?: string;
}

const Hero: React.FC<HeroProps> = ({ 
  summitTitle, 
  summitSubtitle, 
  poweredBy, 
  heroImage 
}) => {
  return (
    <div className="text-center mb-10 animate-fade-in">
      <div className="inline-block mb-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="p-4 bg-white/50 rounded-full shadow-md animate-pulse-slow">
              <Trophy className="h-12 w-12 text-summit-red"/>
            </div>
          </TooltipTrigger>
          <TooltipContent side="top" className="max-w-xs">
            <p>A credibility-first awards and recognition summit — stay ahead of the announcement.</p>
          </TooltipContent>
        </Tooltip>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-bold text-summit-dark mt-6 mb-3">{summitTitle}</h1>
      <h2 className="text-xl md:text-2xl font-semibold text-summit-purple mb-3">{summitSubtitle}</h2>
      <p className="text-summit-dark opacity-80 max-w-2xl mx-auto">{poweredBy}</p>
      
      {heroImage && (
        <div className="mt-8">
          <img 
            src={heroImage} 
            alt="Apex Summit Hero" 
            className="max-w-sm mx-auto w-full rounded-2xl shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Hero;
