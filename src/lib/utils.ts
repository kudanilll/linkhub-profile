import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToProfileSection() {
  const profileSection = document.getElementById("profile");
  if (profileSection) {
    profileSection.scrollIntoView({ behavior: "smooth" });
  }
}
