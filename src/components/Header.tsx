"use client";

import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { ButtonLink } from "@/components/ButtonLink";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/cn";
import { navItems } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const inverted = !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300",
        scrolled || open
          ? "border-b border-navy/10 bg-cream/95 backdrop-blur-md shadow-xs"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-[4.5rem] max-w-[1180px] items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-10">
        <a href="#inicio" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo inverted={inverted} />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Principal">
          {navItems
            .filter((item) => item.href !== "#contato")
            .map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[0.82rem] tracking-[0.04em] transition-colors",
                  inverted
                    ? "text-cream/80 hover:text-gold"
                    : "text-navy/75 hover:text-navy",
                )}
              >
                {item.label}
              </a>
            ))}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink
            href="#contato"
            variant={inverted ? "gold" : "ghost"}
            className="min-h-10 px-5 text-[0.74rem] shadow-sm tracking-[0.14em]"
          >
            Entre em contato
          </ButtonLink>
        </div>

        <button
          type="button"
          className={cn(
            "inline-flex size-11 items-center justify-center lg:hidden",
            inverted ? "text-cream" : "text-navy",
          )}
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      <div
        id={menuId}
        className={cn(
          "max-h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-navy/10 bg-cream lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col px-5 py-6" aria-label="Móvel">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="flex min-h-12 items-center border-b border-navy/8 text-[0.95rem] text-navy transition-colors hover:text-gold"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <ButtonLink
            href="#contato"
            variant="ghost"
            className="mt-5 w-full"
            onClick={() => setOpen(false)}
          >
            Entre em contato
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
