import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost" | "gold";
  className?: string;
  onClick?: () => void;
};

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className,
  onClick,
}: ButtonLinkProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center px-5 py-2.5 text-[0.78rem] font-medium tracking-[0.14em] uppercase transition-colors duration-200";

  const variants = {
    solid:
      "bg-cream text-navy hover:bg-gold hover:text-navy active:bg-gold-soft",
    outline:
      "border border-cream/35 text-cream hover:border-gold hover:text-gold active:bg-cream/5",
    ghost:
      "border border-navy bg-navy text-cream font-medium shadow-xs hover:bg-gold hover:border-gold hover:text-navy active:bg-navy",
    gold: "border border-gold bg-gold text-navy font-semibold shadow-xs hover:bg-cream hover:border-cream hover:text-navy active:bg-gold-soft",
  };

  return (
    <a href={href} className={cn(base, variants[variant], className)} onClick={onClick}>
      {children}
    </a>
  );
}
