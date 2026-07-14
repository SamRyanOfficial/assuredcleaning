import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export type PremisesIconType =
  | "building"
  | "store"
  | "hospitality"
  | "medical"
  | "wellness"
  | "gym"
  | "commercial"
  | "tenancy"
  | "builders"
  | "window"
  | "deep"
  | "observe"
  | "report";

interface PremisesIconProps {
  type: PremisesIconType;
  className?: string;
}

type IconPalette = {
  primary: string;
  secondary: string;
  accent: string;
};

const palettes: Record<PremisesIconType, IconPalette> = {
  building: { primary: "#132d52", secondary: "#4a6fa5", accent: "#9dcc40" },
  store: { primary: "#c2410c", secondary: "#fb923c", accent: "#132d52" },
  hospitality: { primary: "#92400e", secondary: "#fbbf24", accent: "#fef3c7" },
  medical: { primary: "#dc2626", secondary: "#ffffff", accent: "#991b1b" },
  wellness: { primary: "#7c3aed", secondary: "#c4b5fd", accent: "#34d399" },
  gym: { primary: "#132d52", secondary: "#64748b", accent: "#9dcc40" },
  commercial: { primary: "#132d52", secondary: "#64748b", accent: "#9dcc40" },
  tenancy: { primary: "#0369a1", secondary: "#7dd3fc", accent: "#9dcc40" },
  builders: { primary: "#a16207", secondary: "#facc15", accent: "#132d52" },
  window: { primary: "#0891b2", secondary: "#a5f3fc", accent: "#9dcc40" },
  deep: { primary: "#9dcc40", secondary: "#132d52", accent: "#fbbf24" },
  observe: { primary: "#132d52", secondary: "#38bdf8", accent: "#0ea5e9" },
  report: { primary: "#132d52", secondary: "#9dcc40", accent: "#64748b" },
};

function IconShell({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      className={cn("h-11 w-11 md:h-12 md:w-12", className)}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function PremisesIcon({ type, className }: PremisesIconProps) {
  const { primary, secondary, accent } = palettes[type];

  switch (type) {
    case "building":
      return (
        <IconShell className={className}>
          <path fill={secondary} d="M6 27h20V14l-10-7.5L6 14v13z" />
          <path fill={primary} d="M8.5 27V16.5L16 11.5l7.5 5V27H8.5z" />
          <rect fill={accent} x="11.5" y="18" width="3" height="3" rx="0.6" />
          <rect fill={accent} x="17.5" y="18" width="3" height="3" rx="0.6" />
          <rect fill={secondary} x="11.5" y="22.5" width="3" height="3" rx="0.6" />
          <rect fill={secondary} x="17.5" y="22.5" width="3" height="3" rx="0.6" />
          <path fill={accent} d="M14.5 12.5 16 11.5l1.5 1-0.6 1.8H15.1l-0.6-1.8z" />
        </IconShell>
      );
    case "store":
      return (
        <IconShell className={className}>
          <path fill={secondary} d="M5 14.5 7.5 9h17l2.5 5.5V17H5v-2.5z" />
          <path fill={primary} d="M6.5 17h19v8.5H6.5V17z" />
          <path
            fill={accent}
            d="M8 9.5h3l1.2-2.5h1.6L15 9.5h2l1.2-2.5h1.6L21 9.5h3"
          />
          <path fill={secondary} d="M13 17v8.5h6V17h-1.5v6H14.5V17H13z" />
          <circle fill={accent} cx="23.5" cy="20.5" r="1.4" />
        </IconShell>
      );
    case "hospitality":
      return (
        <IconShell className={className}>
          <path
            fill={accent}
            d="M9.5 12.5h11.5c.8 0 1.5.7 1.5 1.5v7.5c0 2.5-2 4.5-4.5 4.5h-5c-2.5 0-4.5-2-4.5-4.5V14c0-.8.7-1.5 1.5-1.5z"
          />
          <ellipse fill={primary} cx="15.2" cy="13.2" rx="5.2" ry="1.4" />
          <path
            fill="none"
            stroke={primary}
            strokeWidth="2.2"
            strokeLinecap="round"
            d="M22.5 15c1.8 0 3.2 1.2 3.2 2.8s-1.4 2.8-3.2 2.8"
          />
          <path
            stroke={secondary}
            strokeWidth="1.6"
            strokeLinecap="round"
            d="M12.5 8.2c0-.8.5-1.3 1-1.3s1 .5 1 1.3M15.5 7c0-.8.5-1.3 1-1.3s1 .5 1 1.3"
          />
        </IconShell>
      );
    case "medical":
      return (
        <IconShell className={className}>
          <rect fill={secondary} x="7" y="7" width="18" height="18" rx="4" />
          <rect fill={primary} x="14.2" y="10.5" width="3.6" height="11" rx="0.8" />
          <rect fill={primary} x="10.5" y="14.2" width="11" height="3.6" rx="0.8" />
        </IconShell>
      );
    case "wellness":
      return (
        <IconShell className={className}>
          <ellipse fill={secondary} cx="16" cy="21" rx="8" ry="2.2" opacity="0.55" />
          <path
            fill={accent}
            d="M16 24c-1.8-2.8-5.5-6.2-5.5-9.5 0-2.2 1.4-3.5 3-3.5 1.2 0 2.2.7 2.5 1.7.3-1 1.3-1.7 2.5-1.7 1.6 0 3 1.3 3 3.5 0 3.3-3.7 6.7-5.5 9.5z"
          />
          <path
            fill={primary}
            d="M16 22.2c-1.2-1.8-3.8-4.2-3.8-6.6 0-1.4.9-2.2 1.9-2.2.8 0 1.4.4 1.6 1 .2-.6.8-1 1.6-1 1 0 1.9.8 1.9 2.2 0 2.4-2.6 4.8-3.8 6.6z"
          />
          <path
            fill={secondary}
            d="M16 8.5c0-2.2 1.2-4 2.8-4.8.3 1.6-.2 3.2-1.2 4.3-.8.9-1.6 1.3-1.6 1.3s-.8-.4-1.6-1.3c-1-1.1-1.5-2.7-1.2-4.3 1.6.8 2.8 2.6 2.8 4.8z"
          />
        </IconShell>
      );
    case "gym":
      return (
        <IconShell className={className}>
          <rect fill={primary} x="5" y="12.5" width="5" height="7" rx="2.2" />
          <rect fill={primary} x="22" y="12.5" width="5" height="7" rx="2.2" />
          <rect fill={secondary} x="6.2" y="13.7" width="2.6" height="4.6" rx="1" />
          <rect fill={secondary} x="23.2" y="13.7" width="2.6" height="4.6" rx="1" />
          <rect fill={accent} x="11" y="14.8" width="10" height="2.4" rx="1.2" />
          <rect fill={primary} x="9.5" y="15.5" width="2" height="1" rx="0.5" />
          <rect fill={primary} x="20.5" y="15.5" width="2" height="1" rx="0.5" />
        </IconShell>
      );
    case "commercial":
      return (
        <IconShell className={className}>
          <path fill={secondary} d="M4 25h24v-10L16 7 4 15v10z" />
          <path fill={primary} d="M7 25v-8l9-6 9 6v8H7z" />
          <rect fill={accent} x="13.5" y="18" width="5" height="7" rx="0.8" />
          <rect fill={secondary} x="9.5" y="19" width="2.8" height="2.8" rx="0.5" />
          <rect fill={secondary} x="19.7" y="19" width="2.8" height="2.8" rx="0.5" />
        </IconShell>
      );
    case "tenancy":
      return (
        <IconShell className={className}>
          <path fill={secondary} d="M6 26h20V15L16 9 6 15v11z" />
          <path fill={primary} d="M9 26V17.5L16 13l7 4.5V26H9z" />
          <path fill={primary} d="M13.5 26v-6h5v6h-5z" />
          <circle fill={accent} cx="24" cy="11" r="3" />
          <path
            stroke={primary}
            strokeWidth="1.6"
            strokeLinecap="round"
            d="M24 9.5v3M22.5 11h3"
          />
          <path
            stroke={accent}
            strokeWidth="1.5"
            strokeLinecap="round"
            d="M26.8 7.8l1.2-1.2M27.8 9.8l1.2-1.2"
          />
        </IconShell>
      );
    case "builders":
      return (
        <IconShell className={className}>
          <path fill={secondary} d="M5 25h22v-9L16 7 5 16v9z" />
          <path fill={primary} d="M8 25v-7.5L16 11l8 6.5V25H8z" />
          <path fill={primary} d="M12.5 25v-4.5h7V25h-7z" />
          <path fill={secondary} d="M11.5 9.5 16 6.5l4.5 3-1.5 2H13l-1.5-2z" />
          <rect fill={accent} x="20.5" y="9" width="3.5" height="2.5" rx="0.5" />
          <path
            stroke={primary}
            strokeWidth="1.8"
            strokeLinecap="round"
            d="M22.2 8v5M20.2 10.5h4"
          />
        </IconShell>
      );
    case "window":
      return (
        <IconShell className={className}>
          <rect fill={secondary} x="6" y="7" width="20" height="18" rx="2.5" />
          <rect fill={primary} x="7.5" y="8.5" width="17" height="15" rx="1.8" />
          <path stroke={accent} strokeWidth="1.8" d="M16 8.5v15M7.5 16h17" />
          <circle fill={secondary} cx="25.5" cy="9" r="2.2" />
          <path
            stroke={accent}
            strokeWidth="1.5"
            strokeLinecap="round"
            d="M25.5 7v4M23.5 9h4"
          />
          <path
            stroke={accent}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.5 12.5 13.2 14.2 16.5 10.5"
          />
        </IconShell>
      );
    case "deep":
      return (
        <IconShell className={className}>
          <path
            fill={primary}
            d="M16 5.5 17.8 12.2 24.5 14l-6.7 1.8L16 22.5l-1.8-6.7L7.5 14l6.7-1.8L16 5.5z"
          />
          <path
            fill={secondary}
            d="M16 9.2 17 13.5 21.3 14.5 17 15.5 16 19.8 15 15.5 10.7 14.5 15 13.5 16 9.2z"
          />
          <path
            fill={accent}
            d="M8.5 8.2 9.1 10.1 11 10.7 9.1 11.3 8.5 13.2 7.9 11.3 6 10.7 7.9 10.1 8.5 8.2z"
          />
          <path
            fill={accent}
            d="M23.2 19.5 23.7 21 25.2 21.5 23.7 22 23.2 23.5 22.7 22 21.2 21.5 22.7 21 23.2 19.5z"
          />
          <path
            fill={secondary}
            d="M6.5 18.8 7 20 8.2 20.5 7 21 6.5 22.2 6 21 4.8 20.5 6 20 6.5 18.8z"
            opacity="0.7"
          />
        </IconShell>
      );
    case "observe":
      return (
        <IconShell className={className}>
          <path
            fill={secondary}
            d="M16 8.5c-4.5 0-8 3.2-8 7s3.5 7 8 7 8-3.2 8-7-3.5-7-8-7z"
            opacity="0.35"
          />
          <path
            fill={accent}
            d="M16 10.5c-3.2 0-5.8 2.3-5.8 5s2.6 5 5.8 5 5.8-2.3 5.8-5-2.6-5-5.8-5z"
          />
          <circle fill={primary} cx="16" cy="15.5" r="2.2" />
          <circle fill={secondary} cx="16.8" cy="14.8" r="0.7" />
          <path
            stroke={primary}
            strokeWidth="1.8"
            strokeLinecap="round"
            d="M10 15.5h-1.8M23.8 15.5H22"
          />
        </IconShell>
      );
    case "report":
      return (
        <IconShell className={className}>
          <rect fill={accent} x="8" y="6" width="14" height="18" rx="2" opacity="0.25" />
          <rect fill={secondary} x="9.5" y="7.5" width="11" height="15" rx="1.5" />
          <rect fill={primary} x="11" y="10" width="8" height="1.6" rx="0.5" />
          <rect fill={primary} x="11" y="13.2" width="8" height="1.6" rx="0.5" />
          <rect fill={primary} x="11" y="16.4" width="5.5" height="1.6" rx="0.5" />
          <path
            fill={accent}
            d="M13.5 5.5h5l2 2.5v1H11.5V7.5l2-2z"
          />
          <circle fill={secondary} cx="20.5" cy="19.5" r="2.2" />
          <path
            stroke={primary}
            strokeWidth="1.2"
            strokeLinecap="round"
            d="M19.8 19.5 20.3 20 21.2 18.8"
          />
        </IconShell>
      );
    default:
      return null;
  }
}
