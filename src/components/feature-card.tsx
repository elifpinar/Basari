import React from "react";
import {
  Typography,
  Card,
  CardContent,
} from '@mui/material';

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}
export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <Card  >
      <CardContent className="grid place-items-start px-0">
        <div className="mb-3 grid place-content-center rounded-lg text-left text-blue-gray-900">
          <Icon className="h-6 w-6" />
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography className="text-gray-500 font-normal">
          {children}
        </Typography>
      </CardContent>
    </Card>
  );
}


export default FeatureCard;
