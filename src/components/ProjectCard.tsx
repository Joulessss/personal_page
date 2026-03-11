"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
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
          viewProject: "Ver proyecto",
          viewGitHub: "Ver GitHub",
        }
      : {
          readCaseStudy: "Read case study",
          viewPublication: "View publication",
          viewThesis: "View thesis",
          viewProject: "View project",
          viewGitHub: "View GitHub",
        };

  const normalizedImages = images.map((image) => withBasePath(image));
  const normalizedAvatars = avatars.map((avatar) => ({ src: withBasePath(avatar.src) }));

  return (
    <Column fillWidth gap="m">
      {!hideHero && (
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
      )}
      <Flex
        s={{ direction: "column" }}
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl">
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {normalizedAvatars?.length > 0 && <AvatarGroup avatars={normalizedAvatars} size="m" reverse />}
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-s" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            <Flex gap="24" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{ margin: "0", width: "fit-content" }}
                  href={href}
                >
                  <Text variant="body-default-s">{labels.readCaseStudy}</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
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
