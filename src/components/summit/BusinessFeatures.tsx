
import React from 'react';
import FeatureItem from './FeatureItem';
import { BookCheck, CalendarCheck, Handshake } from 'lucide-react';
import BusinessInfoGraphic from './BusinessInfoGraphic';

const BusinessFeatures = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-summit-purple mb-6 border-b border-gray-100 pb-2">For Businesses & Clients:</h3>
      
      <BusinessInfoGraphic />
      
      <div className="space-y-4">
        <FeatureItem 
          icon={<BookCheck className="text-summit-red h-5 w-5" />}
          text="Access award-worthy, pre-vetted agencies"
          tooltip="Connect with the best service providers in the region"
        />
        <FeatureItem 
          icon={<CalendarCheck className="text-summit-purple h-5 w-5" />}
          text="Join curated dialogue sessions"
          tooltip="Participate in focused discussions with industry leaders"
        />
        <FeatureItem 
          icon={<Handshake className="text-summit-red h-5 w-5" />}
          text="Unlock exclusive support/services (TBA)"
          tooltip="Special offerings only available to summit participants"
        />
      </div>
    </div>
  );
};

export default BusinessFeatures;
