import React from 'react';
import SectionCard from './SectionCard';
import AgencyFeatures from './AgencyFeatures';
import BusinessFeatures from './BusinessFeatures';

const WhatToExpect = () => {
  return (
    <div className="my-16">
      <SectionCard title="What to Expect" contentClassName="px-2 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="pl-4 md:pl-12">
            <AgencyFeatures />
          </div>
          <BusinessFeatures />
        </div>
      </SectionCard>
    </div>
  );
};

export default WhatToExpect;
