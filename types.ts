import { LucideIcon } from 'lucide-react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  image?: string;
}

export interface StatItem {
  label: string;
  value: string | number;
  prefix?: string;
  suffix?: string;
}

export interface NavLink {
  label: string;
  path: string;
}

export interface ImpactData {
  month: string;
  donation: number;
}