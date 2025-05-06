
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  text: string;
  variant: 'purple' | 'red';
  onClick?: () => void;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  text, 
  variant, 
  onClick, 
  className 
}) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        'rounded-full px-7 py-6 font-semibold text-white min-w-[220px] transition-all hover:scale-105 hover:shadow-lg',
        variant === 'purple' ? 'bg-summit-purple hover:bg-summit-purple/90' : 'bg-summit-red hover:bg-summit-red/90',
        className
      )}
    >
      {text}
    </Button>
  );
};

export default CTAButton;
