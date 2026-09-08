import React from 'react';
import {
  Brain,
  Wallet,
  CloudSun,
  MapPin,
  MessageSquare,
  ClipboardList,
  Image as ImageIcon,
  Video,
  GraduationCap,
  Shield,
  Bitcoin,
  ShoppingCart,
  BarChart3,
  Wrench,
  Layers,
  LucideProps,
} from 'lucide-react';

interface CategoryIconProps extends LucideProps {
  name: string;
}

const iconMap: Record<string, React.ComponentType<LucideProps>> = {
  Brain,
  Wallet,
  CloudSun,
  MapPin,
  MessageSquare,
  ClipboardList,
  Image: ImageIcon,
  Video,
  GraduationCap,
  Shield,
  Bitcoin,
  ShoppingCart,
  BarChart3,
  Wrench,
};

export function CategoryIcon({ name, ...props }: CategoryIconProps) {
  const IconComponent = iconMap[name] || Layers;
  return <IconComponent {...props} />;
}
