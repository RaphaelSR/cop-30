import React from "react";
import { Card } from "../ui";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconBgColor?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  iconBgColor = "bg-cop-green-100 dark:bg-cop-green-900"
}) => {
  return (
    <Card hover className="h-full">
      <div
        className={`w-12 h-12 ${iconBgColor} rounded-lg flex items-center justify-center mb-4`}
      >
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </Card>
  );
};
