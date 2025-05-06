
import React from 'react';
import FeatureItem from './FeatureItem';
import { Award, BadgeCheck, Megaphone, Users } from 'lucide-react';
import AgencyInfoGraphic from './AgencyInfoGraphic';

const AgencyFeatures = () => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-summit-purple mb-6 border-b border-gray-100 pb-2">For Agencies:</h3>
      
      <AgencyInfoGraphic />
      
      <div className="space-y-4">
        <FeatureItem 
          icon={<Award className="text-summit-red h-5 w-5" />}
          text="Powerlist 2025 & Topsdraw Agency Awards consideration"
          tooltip="Get recognized for excellence in your industry"
        />
        <FeatureItem 
          icon={<BadgeCheck className="text-summit-purple h-5 w-5" />}
          text="Early Trust Circle inclusion"
          tooltip="Join an exclusive network of trusted service providers"
        />
        <FeatureItem 
          icon={<Megaphone className="text-summit-purple h-5 w-5" />}
          text="Platform, stage, and media features"
          tooltip="Showcase your expertise and success stories"
        />
        <FeatureItem 
          icon={<Users className="text-summit-red h-5 w-5" />}
          text="Vetted pitchroom access"
          tooltip="Connect with pre-qualified potential clients"
        />
      </div>
    </div>
  );
};

export default AgencyFeatures;
