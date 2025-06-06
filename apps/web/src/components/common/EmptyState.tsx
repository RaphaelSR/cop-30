import React from "react";
import { Card } from "../ui";

interface EmptyStateProps {
  icon: string;
  title: string;
  description: string;
  iconColor?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  iconColor = "text-cop-orange dark:text-cop-orange-400"
}) => {
  return (
    <Card className="text-center py-12">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-cop-orange/10 dark:bg-cop-orange-900/20 rounded-full mb-4">
        <span className={`text-3xl ${iconColor}`}>{icon}</span>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {description}
      </p>
    </Card>
  );
};
