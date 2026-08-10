import { Logo } from "@/components/shared/logo";
import { Container } from "@/components/ui/container";
import { resumePath } from "@/components/home/resume-actions";
import { siteConfig } from "@/constants/site";

const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Resume", href: resumePath, external: true },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

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
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-body-sm text-muted-foreground transition-colors duration-fast hover:text-foreground"
            >
              {link.label}
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