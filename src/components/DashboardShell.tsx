
import React from "react";

interface DashboardShellProps {
  children: React.ReactNode;
}

export const DashboardShell: React.FC<DashboardShellProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-fixer-dark">
      {children}
    </div>
  );
};
