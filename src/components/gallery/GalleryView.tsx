"use client";

import { Media, MasonryGrid } from "@once-ui-system/core";
import { useLanguage } from "@/components/LanguageProvider";
import { withBasePath } from "@/utils/withBasePath";

export default function GalleryView() {
  const { content } = useLanguage();
  const { gallery } = content;

  return (
    <MasonryGrid columns={2} s={{ columns: 1 }}>
      {gallery.images.map((image, index) => (
        <Media
          enlarge
          priority={index < 10}
          sizes="(max-width: 560px) 100vw, 50vw"
          key={index}
          radius="m"
          aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "3 / 4"}
          src={withBasePath(image.src)}
          alt={image.alt}
        />
      ))}
    </MasonryGrid>
  );
}
