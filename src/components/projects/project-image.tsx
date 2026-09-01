import Image from "next/image";

import { ProjectPlaceholderImage } from "@/components/projects/project-placeholder-image";

interface ProjectImageProps {
  image?: string;
  alt: string;
  placeholderLabel: string;
}

export function ProjectImage({ image, alt, placeholderLabel }: ProjectImageProps) {
  if (!image) {
    return <ProjectPlaceholderImage label={placeholderLabel} />;
  }

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