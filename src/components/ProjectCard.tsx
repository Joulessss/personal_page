"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Tag,
  Text,
  Row,
} from "@once-ui-system/core";
import { useLanguage } from "@/components/LanguageProvider";
import { withBasePath } from "@/utils/withBasePath";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
  repo?: string;
  publishedAt?: string;
  category?: "research" | "project" | "thesis";
  hideHero?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  images = [],
  title,
  content,
  description,
  avatars,
  link,
  repo,
  publishedAt,
  category,
  hideHero,
}) => {
  const { locale } = useLanguage();
  const labels =
    locale === "es"
      ? {
          readCaseStudy: "Leer caso de estudio",
          viewPublication: "Ver publicación",
          viewThesis: "Ver tesis",
          viewProject: "Abrir proyecto",
          viewGitHub: "Ver GitHub",
          research: "Investigación",
          thesis: "Tesis",
          project: "Producto",
        }
      : {
          readCaseStudy: "Read case study",
          viewPublication: "View publication",
          viewThesis: "View thesis",
          viewProject: "Open project",
          viewGitHub: "View GitHub",
          research: "Research",
          thesis: "Thesis",
          project: "Product",
        };

  const normalizedImages = images.map((image) => withBasePath(image));
  const normalizedAvatars = avatars.map((avatar) => ({ src: withBasePath(avatar.src) }));
  const year = publishedAt ? new Date(publishedAt).getFullYear().toString() : undefined;
  const categoryLabel =
    category === "research"
      ? labels.research
      : category === "thesis"
        ? labels.thesis
        : labels.project;

  return (
    <Column fillWidth gap="m" className="project-command-card">
      {!hideHero && (
        <div className="project-command-media">
          <Carousel
            sizes="(max-width: 960px) 100vw, 960px"
            items={normalizedImages.map((image) => ({
              slide: (
                <div className="work-card-slide">
                  <img src={image} alt={title} className="work-card-image" />
                </div>
              ),
              alt: title,
            }))}
          />
        </div>
      )}
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="16"
        paddingBottom="24"
        gap="l"
        className="project-command-body"
      >
        {title && (
          <Column flex={5} gap="12">
            <Row gap="8" wrap>
              <Tag size="s">{categoryLabel}</Tag>
              {year && <Tag size="s">{year}</Tag>}
            </Row>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Column>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {normalizedAvatars?.length > 0 && <AvatarGroup avatars={normalizedAvatars} size="m" reverse />}
            {description?.trim() && (
              <Text
                wrap="balance"
                variant="body-default-m"
                onBackground="neutral-weak"
                className="project-command-summary"
              >
                {description}
              </Text>
            )}
            <Flex gap="12" wrap className="project-command-links">
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  className="project-command-link"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">{labels.readCaseStudy}</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  className="project-command-link"
                  style={{ margin: "0", width: "fit-content" }}
                  href={link}
                >
                  <Text variant="body-default-s">
                    {category === "research"
                      ? labels.viewPublication
                      : category === "thesis"
                        ? labels.viewThesis
                        : labels.viewProject}
                  </Text>
                </SmartLink>
              )}
              {repo && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  className="project-command-link"
                  style={{ margin: "0", width: "fit-content" }}
                  href={repo}
                >
                  <Text variant="body-default-s">{labels.viewGitHub}</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
