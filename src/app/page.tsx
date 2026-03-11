"use client";

import {
  Heading,
  Text,
  Button,
  Avatar,
  RevealFx,
  Column,
  Badge,
  Row,
  Flex,
  Schema,
} from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { withBasePath } from "@/utils/withBasePath";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { content } = useLanguage();
  const { home, about, person, ui } = content;
  const tiles = [
    {
      title: ui.home.tiles.roleTitle,
      description: ui.home.tiles.roleBody,
      badge: "01",
      className: "home-matrix-tile--role",
    },
    {
      title: ui.home.tiles.phdTitle,
      description: ui.home.tiles.phdBody,
      badge: "02",
      className: "home-matrix-tile--phd",
    },
    {
      title: ui.home.tiles.skillsTitle,
      description: ui.home.tiles.skillsBody,
      badge: "03",
      className: "home-matrix-tile--skills",
    },
    {
      title: ui.home.tiles.mottoTitle,
      description: ui.home.tiles.mottoBody,
      badge: "04",
      className: "home-matrix-tile--motto",
    },
  ];

  return (
    <Column maxWidth="l" gap="xl" paddingY="12" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" gap="m" maxWidth="l">
        <Column maxWidth="l" horizontal="center" align="center">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="16"
              paddingBottom="32"
              paddingLeft="12"
            >
              <Badge
                className="featured-neon-badge"
                background="brand-alpha-weak"
                paddingX="20"
                paddingY="8"
                onBackground="neutral-strong"
                textVariant="label-default-m"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="4">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="center" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="center" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Row gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={withBasePath(person.avatar)}
                    size="m"
                  />
                )}
                {about.title}
              </Row>
            </Button>
          </RevealFx>
        </Column>
        <Row fillWidth gap="0" s={{ direction: "column" }} className="home-matrix-grid">
          {tiles.map((tile, index) => (
            <Flex
              key={`${tile.title}-${index}`}
              fillWidth
              padding="0"
              border="neutral-alpha-weak"
              radius="l"
              overflow="hidden"
              className={`home-matrix-tile ${tile.className}`}
            >
              <Column fillWidth className="home-matrix-content">
                <Text className="home-matrix-badge" variant="label-default-s">
                  {tile.badge}
                </Text>
                <Heading
                  as="h3"
                  align="start"
                  variant="heading-strong-l"
                  className="home-matrix-title"
                >
                  {tile.title}
                </Heading>
                <Text
                  variant="body-default-l"
                  align="start"
                  onBackground="neutral-weak"
                  className="home-matrix-description"
                >
                  {tile.description}
                </Text>
              </Column>
            </Flex>
          ))}
        </Row>
      </Column>
    </Column>
  );
}
