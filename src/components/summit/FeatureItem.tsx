
import React, { ReactNode } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface FeatureItemProps {
  icon: ReactNode;
  text: string;
  tooltip?: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text, tooltip }) => {
  const content = (
    <div className="flex items-start gap-3 mb-4">
      <div className="mt-0.5 flex-shrink-0">{icon}</div>
      <span className="text-summit-dark font-medium">{text}</span>
    </div>
  );

  return tooltip ? (
    <Tooltip>
      <TooltipTrigger asChild>
        <div className="cursor-help">{content}</div>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p className="max-w-xs text-sm">{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  ) : (
    content
  );
};

export default FeatureItem;
