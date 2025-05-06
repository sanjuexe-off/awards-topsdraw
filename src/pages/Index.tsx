import React, { useEffect } from 'react';
import Hero from '@/components/summit/Hero';
import HeroInfoGraphic from '@/components/summit/HeroInfoGraphic';
import Introduction from '@/components/summit/Introduction';
import WhatToExpect from '@/components/summit/WhatToExpect';
import CallToAction from '@/components/summit/CallToAction';
import ClosingStatement from '@/components/summit/ClosingStatement';
import Footer from '@/components/summit/Footer';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-summit-purple/5 to-summit-red/5 flex flex-col">
      <div className="container px-4 py-16 mx-auto max-w-4xl flex-1">
        {/* Hero Section */}
        <Hero
          summitTitle="Topsdraw Apex Summit 2025"
          summitSubtitle="UAE's Premier Agency Awards & Business Summit"
          poweredBy="Powered by Topsdraw — the cutting-edge B2B platform connecting businesses with trusted service providers."
        />

        {/* Hero Infographic */}
        <HeroInfoGraphic />

        {/* Introduction */}
        <Introduction />

        {/* What to Expect */}
        <WhatToExpect />

        {/* Dual CTA */}
        <CallToAction />

        {/* Closing Statement */}
        <ClosingStatement />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
