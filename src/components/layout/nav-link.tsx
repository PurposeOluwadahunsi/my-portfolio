"use client";

import Link from "next/link";
import type { Route } from "next";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/constants/navigation";

interface NavLinkProps {
  item: NavItem;
  onClick?: () => void;
  className?: string;
}

// Shared between desktop and mobile nav so "what counts as active"
// only has one implementation.
export function NavLink({ item, onClick, className }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  if (item.comingSoon) {
    return (
      <span
        className={cn(
          "text-muted-foreground/60 text-body-sm cursor-default select-none",
          className,
        )}
        aria-disabled="true"
      >
        {item.label}
        <span className="ml-1.5 text-caption">Soon</span>
      </span>
    );
  }

  return (
    <Link
      href={item.href as Route}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "text-body-sm transition-colors duration-fast",
        isActive
          ? "text-foreground"
          : "text-muted-foreground hover:text-foreground",
        className,
      )}
    >
      {item.label}
    </Link>
  );
}