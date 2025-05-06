
import React from 'react';
import { Award, BadgeCheck, Megaphone, Users, FileCheck } from 'lucide-react';

const AgencyInfoGraphic = () => {
  return (
    <div className="flex justify-center mb-8">
      <div className="relative w-full max-w-[280px] aspect-square bg-gray-50 rounded-full flex items-center justify-center">
        <Award className="h-16 w-16 text-summit-red absolute" />
        <div className="w-full h-full absolute">
          <div className="absolute top-0 left-[40%] transform -translate-y-1/2">
            <div className="bg-summit-purple/10 p-3 rounded-full">
              <BadgeCheck className="h-6 w-6 text-summit-purple" />
            </div>
          </div>
          <div className="absolute top-[30%] right-0 transform translate-x-1/2">
            <div className="bg-summit-red/10 p-3 rounded-full">
              <Megaphone className="h-6 w-6 text-summit-red" />
            </div>
          </div>
          <div className="absolute bottom-[30%] right-[20%] transform translate-x-1/2">
            <div className="bg-summit-purple/10 p-3 rounded-full">
              <Users className="h-6 w-6 text-summit-purple" />
            </div>
          </div>
          <div className="absolute bottom-0 left-[30%] transform translate-y-1/2">
            <div className="bg-summit-red/10 p-3 rounded-full">
              <FileCheck className="h-6 w-6 text-summit-red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgencyInfoGraphic;
