import { Logo } from "@/components/shared/logo";
import { Container } from "@/components/ui/container";
import { navItems } from "@/constants/navigation";
import { siteConfig } from "@/constants/site";

export function Footer() {
  const year = new Date().getFullYear();
  const visibleItems = navItems.filter((item) => !item.comingSoon);

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-center md:justify-between md:py-16">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="text-body-sm text-muted-foreground max-w-xs">
            {siteConfig.description}
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer">
          {visibleItems.map((item) => (
            <a key={item.href} href={item.href} className="footer-link">
              {item.label}
            </a>
          ))}
        </nav>
      </Container>

      <Container className="border-t border-border py-6">
        <p className="text-caption text-muted-foreground">
          © {year} {siteConfig.name}. Built with Next.js.
        </p>
      </Container>
    </footer>
  );
}
