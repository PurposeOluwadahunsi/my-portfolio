import { TechChip } from "@/components/projects/tech-chip";
import { skillGroups } from "@/data/skills";

export function SkillsGrid() {
  return (
    <div className="flex flex-col gap-5">
      {skillGroups.map((group) => (
        <div key={group.label}>
          <p className="text-label uppercase text-muted-foreground">{group.label}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <TechChip key={skill} label={skill} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}