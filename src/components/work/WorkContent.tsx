"use client";

import { Column, Heading } from "@once-ui-system/core";
import { ProjectCard } from "@/components/ProjectCard";
import { useLanguage } from "@/components/LanguageProvider";

type TeamMember = {
  avatar: string;
};

type Post = {
  slug: string;
  content: string;
  metadata: {
    title: string;
    summary: string;
    images: string[];
    publishedAt: string;
    link?: string;
    repo?: string;
    category?: "research" | "project" | "thesis";
    team?: TeamMember[];
  };
};

type WorkContentProps = {
  postsEn: Post[];
  postsEs: Post[];
};

function sortByDate(posts: Post[]): Post[] {
  return [...posts].sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime(),
  );
}

export function WorkContent({ postsEn, postsEs }: WorkContentProps) {
  const { locale, content } = useLanguage();
  const { work, ui } = content;
  const posts = sortByDate(locale === "es" ? postsEs : postsEn);
  const copy =
    locale === "es"
      ? {
          intro:
            "Trabajo aplicado en machine learning, modelado científico y productos digitales construido para convertir datos complejos en respuestas útiles para contextos reales.",
          research:
            "Modelos, artículos y marcos analíticos donde el objetivo principal es producir conocimiento riguroso y transferible.",
          thesis:
            "Trabajo académico de mayor profundidad metodológica, con experimentación, análisis y documentación completa.",
          project:
            "Productos en vivo, prototipos y despliegues orientados a uso real, interfaces, APIs o validación aplicada.",
        }
      : {
          intro:
            "Applied machine learning, scientific modeling, and digital product work built to turn complex data into useful answers for real-world contexts.",
          research:
            "Models, papers, and analytical frameworks where the primary goal is rigorous, transferable knowledge.",
          thesis:
            "Long-form academic work with deeper methodology, experimentation, analysis, and full documentation.",
          project:
            "Live products, prototypes, and deployments designed for real usage, interfaces, APIs, or applied validation.",
        };

  const renderSection = (category: "research" | "thesis" | "project", title: string) => {
    const sectionPosts = posts.filter((post) => post.metadata.category === category);
    if (!sectionPosts.length) return null;

    const description =
      category === "research"
        ? copy.research
        : category === "thesis"
          ? copy.thesis
          : copy.project;

    return (
      <Column fillWidth gap="xl" marginBottom="40" paddingX="l" className="work-section-shell">
        <Column gap="12" className="work-section-heading">
          <Heading as="h2" marginBottom="m" variant="heading-strong-l" align="start">
            {title}
          </Heading>
          <p className="work-section-description">{description}</p>
        </Column>
        {sectionPosts.map((post, index) => (
          <ProjectCard
            priority={index < 2}
            key={post.slug}
            href={`/work/${post.slug}`}
            images={post.metadata.images}
            title={post.metadata.title}
            description={post.metadata.summary}
            content={post.content}
            avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}
            link={post.metadata.link || ""}
            repo={post.metadata.repo || ""}
            publishedAt={post.metadata.publishedAt}
            category={post.metadata.category}
          />
        ))}
      </Column>
    );
  };

  return (
    <Column fillWidth gap="32">
      <Column className="work-page-hero" gap="16" paddingX="l">
        <p className="work-page-eyebrow">
          {locale === "es" ? "Portfolio técnico" : "Technical portfolio"}
        </p>
        <Heading marginBottom="m" variant="display-strong-m" align="start">
          {work.title}
        </Heading>
        <p className="work-page-intro">{copy.intro}</p>
      </Column>
      <Column className="work-page-grid" gap="24">
        {renderSection("research", ui.workPage.researchPapers)}
        {renderSection("thesis", ui.workPage.thesisDocuments)}
        {renderSection("project", ui.workPage.projects)}
      </Column>
    </Column>
  );
}
