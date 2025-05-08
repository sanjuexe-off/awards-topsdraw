import React from 'react';
import { Star } from 'lucide-react';
import CTAButton from './CTAButton';

const CallToAction = () => {
  const handleFormRedirect = (type: 'agency' | 'business') => {
    const urls = {
      agency: 'https://forms.topsdraw.com/Topsdraw/form/ExpressYourInterestForAgencies1/formperma/SzmsY0KAjZKCC-xxTpvQed2gDwTwnfoTB-yxkllzsUA',
      business: 'https://forms.topsdraw.com/Topsdraw/form/ExpressYourInterestForClients/formperma/Ladb-PM8-1vWSFifToJB7AyYRAqavOh3TqEDIkw-SSI',
    };
    window.open(urls[type], '_blank');
  };

  return (
    <div className="my-16 text-center">
      <div className="flex items-center justify-center mb-8 gap-2">
        <Star className="h-5 w-5 text-summit-red" />
        <p className="text-xl font-medium">
          Nominations and program access opening soon. Want in early?
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <CTAButton 
          text="I'm an Agency – Express Interest" 
          variant="purple"
          onClick={() => handleFormRedirect('agency')}
        />
        <CTAButton 
          text="I'm a Business – Keep Me in the Loop" 
          variant="red"
          onClick={() => handleFormRedirect('business')}
        />
      </div>
    </div>
  );
};

export default CallToAction;
