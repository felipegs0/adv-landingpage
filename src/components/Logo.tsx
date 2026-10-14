import { cn } from "@/lib/cn";
import { firm } from "@/lib/site";

type LogoProps = {
  inverted?: boolean;
  compact?: boolean;
};

export function Logo({ inverted = false, compact = false }: LogoProps) {
  return (
    <span className="flex flex-col leading-none">
      <span
        className={cn(
          "font-serif tracking-tight",
          compact ? "text-[1.15rem]" : "text-[1.28rem] sm:text-[1.4rem]",
          inverted ? "text-cream" : "text-navy",
        )}
      >
        {firm.name}
      </span>
      <span
        className={cn(
          "mt-1 text-[0.62rem] font-medium tracking-[0.32em] uppercase",
          inverted ? "text-gold" : "text-gold",
        )}
      >
        {firm.subtitle}
      </span>
    </span>
  );
}
