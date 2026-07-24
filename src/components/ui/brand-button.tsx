import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type BrandButtonBaseProps = {
  children: React.ReactNode;
  className?: string;
  /** Show the arrow-up-right icon (SingleStore default). */
  showIcon?: boolean;
};

type BrandButtonAsLink = BrandButtonBaseProps &
  Omit<React.ComponentPropsWithoutRef<typeof Link>, "className" | "children"> & {
    href: string;
  };

type BrandButtonAsButton = BrandButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

export type BrandButtonProps = BrandButtonAsLink | BrandButtonAsButton;

const brandButtonClassName =
  "brand-button inline-flex items-center justify-center gap-2 " +
  "h-10 min-h-10 px-5 md:px-6 py-1 " +
  "rounded-[4px] text-sm font-medium leading-[1.35] text-white " +
  "border border-[#2e2e2e] whitespace-nowrap select-none no-underline " +
  "cursor-pointer align-middle box-border " +
  "transition-[background-position] duration-300 ease-in-out";

export function BrandButton({
  children,
  className,
  showIcon = true,
  ...props
}: BrandButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {showIcon ? (
        <ArrowUpRight className="size-3.5 shrink-0" aria-hidden />
      ) : null}
    </>
  );

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkProps } = props;
    return (
      <Link
        href={href}
        className={cn(brandButtonClassName, className)}
        {...linkProps}
      >
        {content}
      </Link>
    );
  }

  const { type = "button", ...buttonProps } = props;
  return (
    <button
      type={type}
      className={cn(brandButtonClassName, className)}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
