
import React from 'react';
import { ChartBar, BookCheck, CalendarCheck, Handshake } from 'lucide-react';

const BusinessInfoGraphic = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative w-full max-w-[280px] aspect-square bg-gray-50 rounded-full flex items-center justify-center">
        <ChartBar className="h-16 w-16 text-summit-purple absolute" />
        <div className="w-full h-full absolute">
          <div className="absolute top-[20%] left-0 transform -translate-x-1/3">
            <div className="bg-summit-red/10 p-3 rounded-full">
              <BookCheck className="h-6 w-6 text-summit-red" />
            </div>
          </div>
          <div className="absolute top-[70%] left-[20%]">
            <div className="bg-summit-purple/10 p-3 rounded-full">
              <CalendarCheck className="h-6 w-6 text-summit-purple" />
            </div>
          </div>
          <div className="absolute bottom-[30%] right-[10%]">
            <div className="bg-summit-red/10 p-3 rounded-full">
              <Handshake className="h-6 w-6 text-summit-red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInfoGraphic;
