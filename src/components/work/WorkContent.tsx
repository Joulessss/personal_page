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

  const renderSection = (category: "research" | "thesis" | "project", title: string) => {
    const sectionPosts = posts.filter((post) => post.metadata.category === category);
    if (!sectionPosts.length) return null;

    return (
      <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
        <Heading as="h2" marginBottom="m" variant="heading-strong-l" align="start">
          {title}
        </Heading>
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
            category={post.metadata.category}
          />
        ))}
      </Column>
    );
  };

  return (
    <>
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      {renderSection("research", ui.workPage.researchPapers)}
      {renderSection("thesis", ui.workPage.thesisDocuments)}
      {renderSection("project", ui.workPage.projects)}
    </>
  );
}

