"use client";

import { Column, Row, Carousel } from "@once-ui-system/core";
import { withBasePath } from "@/utils/withBasePath";

type FlipBookProps = {
  pages: string[];
};

export default function FlipBook({ pages }: FlipBookProps) {
  if (!pages.length) {
    return null;
  }

  const pairedPages: Array<[string, string | null]> = [];
  for (let i = 0; i < pages.length; i += 2) {
    pairedPages.push([withBasePath(pages[i]), pages[i + 1] ? withBasePath(pages[i + 1]) : null]);
  }

  return (
    <Column className="pdf-carousel" fillWidth maxWidth="l" horizontal="center" gap="12">
      <Carousel
        className="pdf-carousel-frame"
        sizes="(max-width: 1200px) 100vw, 1200px"
        items={pairedPages.map(([left, right], index) => ({
          slide: (
            <Row
              key={`${left}-${right ?? "empty"}`}
              className="pdf-carousel-spread"
              fillWidth
              gap="12"
              horizontal="center"
              style={{ padding: "12px" }}
            >
              <img
                src={left}
                alt={`Page ${index * 2 + 1}`}
                onClick={() => window.open(left, "_blank")}
                role="button"
                tabIndex={0}
                className="pdf-carousel-page"
              />
              {right ? (
                <img
                  src={right}
                  alt={`Page ${index * 2 + 2}`}
                  onClick={() => window.open(right, "_blank")}
                  role="button"
                  tabIndex={0}
                  className="pdf-carousel-page"
                />
              ) : (
                <div className="pdf-carousel-page pdf-carousel-placeholder" />
              )}
            </Row>
          ),
          alt: `Pages ${index * 2 + 1}-${index * 2 + 2}`,
        }))}
      />
    </Column>
  );
}
