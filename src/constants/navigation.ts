export interface NavItem {
  label: string;
  href: string;
  comingSoon?: boolean;
}

// Single source of truth for primary navigation. Both the desktop navbar
// and the mobile drawer read from this so they never drift out of sync.
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Resume", href: "/resume" },
  { label: "Blog", href: "/blog", comingSoon: true },
  { label: "Contact", href: "/contact" },
];