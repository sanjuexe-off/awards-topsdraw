
import React from 'react';
import { Award, Handshake, ChartBar } from 'lucide-react';

const HeroInfoGraphic = () => {
  return (
    <div className="my-10 flex flex-wrap justify-center gap-6">
      <div className="flex flex-col items-center p-5 bg-white/80 rounded-xl shadow-sm max-w-[220px] transition-all hover:shadow-md">
        <Award className="h-12 w-12 text-summit-red mb-3" />
        <p className="font-medium text-center">Recognition for Excellence</p>
      </div>
      <div className="flex flex-col items-center p-5 bg-white/80 rounded-xl shadow-sm max-w-[220px] transition-all hover:shadow-md">
        <Handshake className="h-12 w-12 text-summit-purple mb-3" />
        <p className="font-medium text-center">Trusted Connections</p>
      </div>
      <div className="flex flex-col items-center p-5 bg-white/80 rounded-xl shadow-sm max-w-[220px] transition-all hover:shadow-md">
        <ChartBar className="h-12 w-12 text-summit-red mb-3" />
        <p className="font-medium text-center">Measurable Results</p>
      </div>
    </div>
  );
};

export default HeroInfoGraphic;
