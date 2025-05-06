import React, { ReactNode } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface SectionCardProps {
  title: string;
  titleColor?: string;
  children: ReactNode;
  className?: string;
  headerClassName?: string;
  contentClassName?: string;
}

const SectionCard: React.FC<SectionCardProps> = ({ 
  title, 
  titleColor = 'text-summit-red',
  children,
  className,
  headerClassName,
  contentClassName
}) => {
  return (
    <Card className={`shadow-md border-white/50 bg-gradient-to-br from-white via-white to-summit-purple/5 backdrop-blur-sm ${className}`}>
      <CardHeader className={`text-center pb-2 ${headerClassName}`}>
        <CardTitle className={`text-2xl font-bold ${titleColor}`}>{title}</CardTitle>
      </CardHeader>
      <CardContent className={`pt-4 ${contentClassName}`}>
        {children}
      </CardContent>
    </Card>
  );
};

export default SectionCard;
