import React from "react";
import * as LucideIcons from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  className?: string;
  fallback?: string;
}

const Icon = ({
  name,
  size = 24,
  className = "",
  fallback = "CircleAlert",
}: IconProps) => {
  const IconComponent =
    (LucideIcons as any)[name] || (LucideIcons as any)[fallback];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found, using fallback "${fallback}"`);
    return <div className={`w-${size / 4} h-${size / 4} ${className}`}>?</div>;
  }

  return <IconComponent size={size} className={className} />;
};

export default Icon;
