"use client";

import { useState } from "react";
import { Check, Copy, Github, Linkedin, Mail, MapPin } from "lucide-react";

import { contact } from "@/data/contact";

export function ContactCard() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <button
        onClick={copyEmail}
        className="flex items-center gap-3 rounded-xl border border-border p-4 text-left transition-colors duration-fast hover:border-accent"
      >
        <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
        <span className="flex-1 truncate text-body-sm text-foreground">{contact.email}</span>
        {copied ? (
          <Check className="h-4 w-4 shrink-0 text-success" />
        ) : (
          <Copy className="h-4 w-4 shrink-0 text-muted-foreground" />
        )}
      </button>

      <a
        href={contact.github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors duration-fast hover:border-accent"
      >
        <Github className="h-4 w-4 shrink-0 text-muted-foreground" />
        <span className="text-body-sm text-foreground">GitHub</span>
      </a>

      <a
        href={contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-xl border border-border p-4 transition-colors duration-fast hover:border-accent"
      >
        <Linkedin className="h-4 w-4 shrink-0 text-muted-foreground" />
        <span className="text-body-sm text-foreground">LinkedIn</span>
      </a>

      <div className="flex items-center gap-3 rounded-xl border border-border p-4">
        <MapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
        <span className="text-body-sm text-muted-foreground">{contact.location}</span>
      </div>
    </div>
  );
}