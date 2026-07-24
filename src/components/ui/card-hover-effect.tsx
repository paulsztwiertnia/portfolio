"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

export type HoverEffectItem = {
  title: string;
  description: string;
  link?: string;
  icon?: React.ReactNode;
};

export const HoverEffect = ({
  items,
  className,
  layoutId = "hoverBackground",
}: {
  items: HoverEffectItem[];
  className?: string;
  layoutId?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-6",
        className,
      )}
    >
      {items.map((item, idx) => {
        const Wrapper = item.link ? "a" : "div";
        const wrapperProps = item.link
          ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
          : {};

        return (
          <Wrapper
            key={item.title}
            {...wrapperProps}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-800/80 block rounded-3xl"
                  layoutId={layoutId}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              {item.icon ? (
                <div className="mb-3 flex h-10 w-10 items-center justify-center">
                  {item.icon}
                </div>
              ) : null}
              <CardTitle className={item.icon ? "mt-0" : undefined}>
                {item.title}
              </CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Wrapper>
        );
      })}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-white/[0.12] group-hover:border-slate-700 relative z-20",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-3 text-zinc-400 tracking-wide leading-relaxed text-sm font-open-sans",
        className,
      )}
    >
      {children}
    </p>
  );
};
