"use client";

import { useEffect, useRef, useState } from "react";
import { Background, Button, Flex, Media, SmartLink, Text } from "@once-ui-system/core";
import { mailchimp } from "@/resources";
import { useLanguage } from "@/components/LanguageProvider";

interface HomeScrollerItem {
  slug: string;
  title: string;
  category?: "research" | "project" | "thesis";
  image: string;
}

interface HomeScrollerProps {
  items: HomeScrollerItem[];
}

export function HomeScroller({ items }: HomeScrollerProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState(0);
  const { content } = useLanguage();
  const { ui } = content;

  useEffect(() => {
    if (!trackRef.current) return;
    const firstItem = trackRef.current.querySelector<HTMLElement>(".home-vertical-item");
    if (firstItem) {
      const height = firstItem.getBoundingClientRect().height;
      setStep(height + 16);
    }
  }, [items.length]);

  const scrollByStep = (direction: "up" | "down") => {
    if (!trackRef.current || step === 0) return;
    trackRef.current.scrollBy({
      top: direction === "up" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <Flex fillWidth horizontal="center">
      <div className="home-vertical-carousel">
        <Background
          top="0"
          position="absolute"
          mask={{
            x: mailchimp.effects.mask.x,
            y: mailchimp.effects.mask.y,
            radius: mailchimp.effects.mask.radius + 40,
            cursor: mailchimp.effects.mask.cursor,
          }}
          gradient={{
            display: mailchimp.effects.gradient.display,
            opacity: 100,
            x: mailchimp.effects.gradient.x,
            y: mailchimp.effects.gradient.y,
            width: mailchimp.effects.gradient.width,
            height: mailchimp.effects.gradient.height,
            tilt: mailchimp.effects.gradient.tilt,
            colorStart: mailchimp.effects.gradient.colorStart,
            colorEnd: mailchimp.effects.gradient.colorEnd,
          }}
          dots={{
            display: mailchimp.effects.dots.display,
            opacity: 30,
            size: mailchimp.effects.dots.size,
            color: mailchimp.effects.dots.color,
          }}
          grid={{
            display: mailchimp.effects.grid.display,
            opacity: mailchimp.effects.grid.opacity,
            color: mailchimp.effects.grid.color,
            width: mailchimp.effects.grid.width,
            height: mailchimp.effects.grid.height,
          }}
          lines={{
            display: mailchimp.effects.lines.display,
            opacity: mailchimp.effects.lines.opacity,
            size: mailchimp.effects.lines.size,
            thickness: mailchimp.effects.lines.thickness,
            angle: mailchimp.effects.lines.angle,
            color: mailchimp.effects.lines.color,
          }}
        />
        <div className="home-vertical-track" ref={trackRef}>
          {items.map((item) => (
            <div key={item.slug} className="home-vertical-item">
              <SmartLink href={`/work/${item.slug}`} className="home-vertical-link">
                <Media src={item.image} alt={item.title} aspectRatio="16 / 10" radius="l" />
                <div className="home-vertical-hovercard">
                  <div className="home-vertical-title">{item.title}</div>
                  <Text className="home-vertical-meta" onBackground="neutral-weak">
                    {item.category === "research"
                      ? ui.home.researchLabel
                      : item.category === "thesis"
                        ? ui.home.thesisLabel
                        : ui.home.projectLabel}
                  </Text>
                </div>
              </SmartLink>
            </div>
          ))}
        </div>
        <div className="home-vertical-controls">
          <Button
            size="s"
            variant="secondary"
            onClick={() => scrollByStep("up")}
            aria-label="Previous projects"
          >
            {ui.home.carouselUp}
          </Button>
          <Button
            size="s"
            variant="secondary"
            onClick={() => scrollByStep("down")}
            aria-label="Next projects"
          >
            {ui.home.carouselDown}
          </Button>
        </div>
      </div>
    </Flex>
  );
}
