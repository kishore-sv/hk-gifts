import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import slugify from "slugify";
import { Rating } from "@/types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const createSlug = (name: string) => {
  return slugify(name, {
    lower: true,
    strict: true,
    trim: true,
  });
};

export const getAverageRating = (ratings: Rating[]): number => {
  if (!ratings.length) return 0;

  const total = ratings.reduce((sum, r) => sum + r.rating, 0);
  return Number((total / ratings.length).toFixed(1)); // 4.3
};

export const getReviewCount = (ratings: Rating[]): number => {
  return ratings.length;
};