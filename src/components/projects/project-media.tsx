import Image from "next/image";

import { ProjectPlaceholderImage } from "@/components/projects/project-placeholder-image";

interface ProjectMediaProps {
  image?: string;
  video?: string;
  alt: string;
  placeholderLabel: string;
}

export function ProjectMedia({ image, video, alt, placeholderLabel }: ProjectMediaProps) {
  if (video) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border">
        <video
          src={video}
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          controls
        />
      </div>
    );
  }

  if (image) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    );
  }

  return <ProjectPlaceholderImage label={placeholderLabel} />;
}