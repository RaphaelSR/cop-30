import React from "react";
import {
  IconHome,
  IconCalendar,
  IconMapPin,
  IconBook,
  IconCamera,
  IconBed,
  IconToolsKitchen2,
  IconCar,
  IconPlane,
  IconSun,
  IconMoon,
  IconLanguage,
  IconMenu2,
  IconX,
  IconChevronRight,
  IconChevronUp,
  IconExternalLink,
  IconStar,
  IconHeart,
  IconShare,
  IconDownload,
  IconSearch,
  IconFilter,
  IconUser,
  IconUsers,
  IconClock,
  IconMail,
  IconPhone,
  IconLeaf,
  IconChevronDown,
  IconCheck
} from "@tabler/icons-react";

interface IconProps {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  stroke?: number;
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = "md",
  className = "",
  stroke = 1.5
}) => {
  const sizeMap = {
    sm: 16,
    md: 20,
    lg: 24,
    xl: 32
  };

  const iconComponents: Record<string, React.ComponentType<any>> = {
    home: IconHome,
    calendar: IconCalendar,
    map: IconMapPin,
    users: IconUsers,
    book: IconBook,
    camera: IconCamera,
    bed: IconBed,
    utensils: IconToolsKitchen2,
    car: IconCar,
    plane: IconPlane,
    sun: IconSun,
    moon: IconMoon,
    language: IconLanguage,
    menu: IconMenu2,
    close: IconX,
    x: IconX,
    "chevron-right": IconChevronRight,
    "chevron-down": IconChevronDown,
    "chevron-up": IconChevronUp,
    "external-link": IconExternalLink,
    star: IconStar,
    heart: IconHeart,
    share: IconShare,
    download: IconDownload,
    search: IconSearch,
    filter: IconFilter,
    user: IconUser,
    clock: IconClock,
    mail: IconMail,
    phone: IconPhone,
    leaf: IconLeaf,
    check: IconCheck
  };

  const IconComponent = iconComponents[name];

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <IconComponent size={sizeMap[size]} stroke={stroke} className={className} />
  );
};
