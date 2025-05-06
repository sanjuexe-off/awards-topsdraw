import React from 'react';
import { Star } from 'lucide-react';
import CTAButton from './CTAButton';

const CallToAction = () => {
  const handleWhatsAppRedirect = (type: 'agency' | 'business') => {
    const phoneNumber = '971503210098'; // Dubai WhatsApp number with country code
    const messages = {
      agency: "Hello! I'm interested in participating in the Topsdraw Apex Summit 2025 as an agency. I'd like to learn more about the nomination process and program access.",
      business: "Hello! I'm a business interested in the Topsdraw Apex Summit 2025. I'd like to stay updated about the event and potential opportunities."
    };
    
    const encodedMessage = encodeURIComponent(messages[type]);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
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
          onClick={() => handleWhatsAppRedirect('agency')}
        />
        <CTAButton 
          text="I'm a Business – Keep Me in the Loop" 
          variant="red"
          onClick={() => handleWhatsAppRedirect('business')}
        />
      </div>
    </div>
  );
};

export default CallToAction;
