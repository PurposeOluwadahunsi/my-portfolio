import { Download, FileText } from "lucide-react";

export const resumePath = "/resume/Purpose-Oluwadahunsi-Resume.pdf";

export function ResumeActions() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={resumePath}
        download
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 text-sm font-semibold text-white transition-colors duration-fast hover:bg-accent/90"
      >
        <Download className="h-4 w-4" />
        Download Resume
      </a>
      <a
        href={resumePath}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-6 text-sm font-semibold text-foreground transition-colors duration-fast hover:border-accent hover:text-accent"
      >
        <FileText className="h-4 w-4" />
        View Resume
      </a>
    </div>
  );
}