"use client";

import { useEffect, useState } from "react";
import { Button } from "@once-ui-system/core";
import { withBasePath } from "@/utils/withBasePath";

type PdfLightboxProps = {
  url: string;
  label?: string;
};

export default function PdfLightbox({ url, label = "Open PDF" }: PdfLightboxProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <Button
        className="reference-neon-button"
        data-border="rounded"
        size="l"
        variant="secondary"
        onClick={() => setOpen(true)}
      >
        {label}
      </Button>
      {open && (
        <div className="pdf-lightbox" role="dialog" aria-modal="true">
          <div className="pdf-lightbox-backdrop" onClick={() => setOpen(false)} />
          <div className="pdf-lightbox-panel">
            <Button
              className="pdf-lightbox-close"
              data-border="rounded"
              variant="secondary"
              size="s"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
            <iframe className="pdf-lightbox-frame" title="PDF Preview" src={withBasePath(url)} />
          </div>
        </div>
      )}
    </>
  );
}
