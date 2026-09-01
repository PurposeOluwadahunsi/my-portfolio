import { Terminal } from "lucide-react";

import { TechChip } from "@/components/projects/tech-chip";
import { skillGroups } from "@/data/skills";
import { skillIcons } from "@/data/skill-icons";
// used everywhere else (CredentialsCard, project cards).
export function SkillsGrid() {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-foreground">
          <Terminal className="h-4 w-4" />
        </div>
        <p className="text-body-sm font-semibold uppercase tracking-wide text-foreground">
          Tech Stack
        </p>
      </div>

      <div className="my-4 h-px bg-border" />

      <div className="flex flex-col gap-5">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <p className="text-label uppercase text-muted-foreground">{group.label}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <TechChip key={skill} label={skill} icon={skillIcons[skill]} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}