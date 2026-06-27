import { portfolioCategories } from "@/constants/site";
import type { PortfolioCategory } from "@/types/project";

export type PortfolioFilter = PortfolioCategory | "All";

export function isPortfolioCategory(value: string): value is PortfolioCategory {
  return portfolioCategories.includes(value as PortfolioCategory);
}

export function getInitialPortfolioFilter(value?: string): PortfolioFilter {
  if (!value) return "All";

  const decoded = decodeURIComponent(value);
  return isPortfolioCategory(decoded) ? decoded : "All";
}
