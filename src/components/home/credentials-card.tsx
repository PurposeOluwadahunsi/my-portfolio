import { education, certifications, recognition, currentFocus } from "@/data/credentials";

export function CredentialsCard() {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6">
      <div>
        <p className="text-label uppercase text-muted-foreground">Education</p>
        <p className="mt-2 text-body-sm font-semibold text-foreground">{education.program}</p>
        <p className="text-body-sm text-muted-foreground">{education.school}</p>
        <p className="text-caption text-muted-foreground">{education.status}</p>
      </div>

      <div>
        <p className="text-label uppercase text-muted-foreground">Certifications</p>
        <ul className="mt-2 space-y-1">
          {certifications.map((c) => (
            <li key={c} className="text-body-sm text-muted-foreground">{c}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-label uppercase text-muted-foreground">Recognition</p>
        <p className="mt-2 text-body-sm text-muted-foreground">{recognition}</p>
      </div>

      <div>
        <p className="text-label uppercase text-muted-foreground">Current Focus</p>
        <ul className="mt-2 space-y-1.5">
          {currentFocus.map((f) => (
            <li key={f.name} className="text-body-sm">
              <span className="font-semibold text-foreground">{f.name}</span>{" "}
              <span className="text-muted-foreground"> - {f.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}