import { cn } from "@/lib/utils";

type PremisesIconType =
  | "building"
  | "store"
  | "utensils"
  | "medical"
  | "wellness"
  | "gym"
  | "commercial";

interface PremisesIconProps {
  type: PremisesIconType;
  className?: string;
}

export function PremisesIcon({ type, className }: PremisesIconProps) {
  const shared = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: cn("h-5 w-5", className),
    "aria-hidden": true,
  };

  switch (type) {
    case "building":
      return (
        <svg {...shared}>
          <path d="M4 21V5a1 1 0 0 1 1-1h5v17" />
          <path d="M10 21V9a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v12" />
          <path d="M7 8h1M7 12h1M7 16h1M14 12h1M14 16h1M14 20h1M17 12h1M17 16h1M17 20h1" />
        </svg>
      );
    case "store":
      return (
        <svg {...shared}>
          <path d="M4 10V8l2-4h12l2 4v2" />
          <path d="M3 10h18v11H3z" />
          <path d="M9 21v-6h6v6" />
          <path d="M9 14h6" />
        </svg>
      );
    case "utensils":
      return (
        <svg {...shared}>
          <path d="M6 3v8a2 2 0 0 0 4 0V3" />
          <path d="M8 11v10" />
          <path d="M16 3v18" />
          <path d="M14 3h4" />
        </svg>
      );
    case "medical":
      return (
        <svg {...shared}>
          <path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 6.5-7 11-7 11z" />
          <path d="M12 8v6M9 11h6" />
        </svg>
      );
    case "wellness":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
    case "gym":
      return (
        <svg {...shared}>
          <path d="M6 9v6" />
          <path d="M18 9v6" />
          <path d="M4 11h2v2H4zM18 11h2v2h-2z" />
          <path d="M8 10h8v4H8z" />
        </svg>
      );
    case "commercial":
      return (
        <svg {...shared}>
          <path d="M3 21h18" />
          <path d="M6 21V7l6-4 6 4v14" />
          <path d="M10 21v-5h4v5" />
        </svg>
      );
    default:
      return null;
  }
}
