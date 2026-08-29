import { Github, Linkedin } from "lucide-react";

import { Logo } from "@/components/shared/logo";
import { Container } from "@/components/ui/container";
import { resumePath } from "@/components/home/resume-actions";
import { contact } from "@/data/contact";
import { siteConfig } from "@/constants/site";

const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Resume", href: resumePath, external: true },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: contact.github, icon: Github },
  { label: "LinkedIn", href: contact.linkedin, icon: Linkedin },
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

        <div className="flex flex-col items-start gap-4 md:items-end">
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

          <div className="flex gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors duration-fast hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-border py-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-caption text-muted-foreground">
          © {year} {siteConfig.name}. Built with Next.js.
        </p>
        <div className="flex items-center gap-2 text-caption text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
          Based in {contact.location}
        </div>
      </Container>
    </footer>
  );
}