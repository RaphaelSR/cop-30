import React from "react";
import { Link } from "react-router-dom";

interface QuickAccessItemProps {
  to: string;
  icon: string;
  label: string;
}

export const QuickAccessItem: React.FC<QuickAccessItemProps> = ({
  to,
  icon,
  label
}) => {
  return (
    <Link
      to={to}
      className="group p-4 text-center border border-gray-200 dark:border-gray-600 rounded-lg hover:border-cop-green-300 dark:hover:border-cop-green-400 hover:bg-cop-green-50 dark:hover:bg-gray-700 transition-all duration-200"
    >
      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
        {icon}
      </div>
      <div className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-cop-green-600 dark:group-hover:text-cop-green-400 transition-colors duration-200">
        {label}
      </div>
    </Link>
  );
};
