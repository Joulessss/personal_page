import { notFound } from "next/navigation";
import { getPosts } from "@/utils/utils";
import {
  Meta,
  Schema,
  AvatarGroup,
  Button,
  Tag,
  Column,
  Flex,
  Heading,
  Media,
  Text,
  SmartLink,
  Row,
  Avatar,
  Line,
} from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { formatDate } from "@/utils/formatDate";
import { ScrollToHash, CustomMDX } from "@/components";
import { Metadata } from "next";
import { Projects } from "@/components/work/Projects";
import { getServerContent, getServerLocale } from "@/resources/server-localization";
import FlipBook from "@/components/work/FlipBook";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"], "en");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}): Promise<Metadata> {
  const { work } = await getServerContent();
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  const locale = await getServerLocale();
  const posts = getPosts(["src", "app", "work", "projects"], locale);
  let post = posts.find((post) => post.slug === slugPath);

  if (!post) return {};

  return Meta.generate({
    title: post.metadata.title,
    description: post.metadata.summary,
    baseURL: baseURL,
    image: post.metadata.image || `/api/og/generate?title=${post.metadata.title}`,
    path: `${work.path}/${post.slug}`,
  });
}

export default async function Project({
  params,
}: {
  params: Promise<{ slug: string | string[] }>;
}) {
  const { about, person, work, ui } = await getServerContent();
  const locale = await getServerLocale();
  const routeParams = await params;
  const slugPath = Array.isArray(routeParams.slug)
    ? routeParams.slug.join("/")
    : routeParams.slug || "";

  let post = getPosts(["src", "app", "work", "projects"], locale).find(
    (post) => post.slug === slugPath,
  );

  if (!post) {
    notFound();
  }

  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];

  const categoryLabel =
    post.metadata.category === "research"
      ? "Research Paper"
      : post.metadata.category === "thesis"
        ? "Thesis Document"
        : "Project";
  const publishedLabel = post.metadata.publishedAt
    ? formatDate(post.metadata.publishedAt)
    : "";
  const statusLabel =
    post.metadata.status === "preprint"
      ? "Preprint"
      : post.metadata.status === "published"
        ? "Published"
        : "";

  return (
    <Column as="section" fillWidth horizontal="center" gap="l">
      <Schema
        as="blogPosting"
        baseURL={baseURL}
        path={`${work.path}/${post.slug}`}
        title={post.metadata.title}
        description={post.metadata.summary}
        datePublished={post.metadata.publishedAt}
        dateModified={post.metadata.publishedAt}
        image={
          post.metadata.image || `/api/og/generate?title=${encodeURIComponent(post.metadata.title)}`
        }
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column className="work-hero" fillWidth paddingY="24" paddingX="l" horizontal="center">
        <Column className="work-hero-inner" fillWidth maxWidth="l" gap="16" align="center">
          <SmartLink href="/work">
            <Text variant="label-strong-m">{ui.workPost.backToProjects}</Text>
          </SmartLink>
          <Heading variant="display-strong-m" wrap="balance">
            {post.metadata.title}
          </Heading>
          <Row gap="8" wrap horizontal="center">
            <Tag size="l">{categoryLabel}</Tag>
            {publishedLabel && <Tag size="l">{publishedLabel}</Tag>}
            {statusLabel && <Tag size="l">{statusLabel}</Tag>}
            {post.metadata.pdf && <Tag size="l">PDF</Tag>}
          </Row>
          <Row gap="16" vertical="center" horizontal="center" wrap>
            {post.metadata.team && <AvatarGroup reverse avatars={avatars} size="s" />}
            <Text variant="label-default-m" onBackground="brand-weak">
              {post.metadata.team?.map((member, idx) => (
                <span key={idx}>
                  {idx > 0 && (
                    <Text as="span" onBackground="neutral-weak">
                      ,{" "}
                    </Text>
                  )}
                  <SmartLink href={member.linkedIn}>{member.name}</SmartLink>
                </span>
              ))}
            </Text>
          </Row>
        </Column>
      </Column>
      <Column
        as="article"
        fillWidth
        maxWidth="m"
        style={{
          margin: "auto",
          columnWidth: "22rem",
          columnGap: "2rem",
          textAlign: "justify",
        }}
      >
        <CustomMDX source={post.content} />
      </Column>
      {(post.metadata.link || post.metadata.repo) && (
        <Row gap="16" wrap horizontal="center">
          {post.metadata.link && (post.metadata.category === "research" ? (
            <Button
              href={post.metadata.link}
              className="reference-neon-button"
              data-border="rounded"
              size="l"
              variant="secondary"
            >
              Open Research Article
            </Button>
          ) : post.metadata.category === "thesis" ? (
            <Button
              href={post.metadata.link}
              className="reference-neon-button"
              data-border="rounded"
              size="l"
              variant="secondary"
            >
              Open Thesis Document
            </Button>
          ) : (
            <SmartLink href={post.metadata.link}>
              <Text variant="body-default-s">Open source</Text>
            </SmartLink>
          ))}
          {post.metadata.repo && (
            <SmartLink href={post.metadata.repo}>
              <Text variant="body-default-s">Open GitHub repository</Text>
            </SmartLink>
          )}
        </Row>
      )}
      {post.metadata.pages && post.metadata.pages.length > 0 && (
        <Column fillWidth maxWidth="l" gap="12">
          <Heading as="h2" variant="heading-strong-l">
            PDF Preview
          </Heading>
          <FlipBook pages={post.metadata.pages} />
        </Column>
      )}
      {post.metadata.pdf && (!post.metadata.pages || post.metadata.pages.length === 0) && (
        <Column fillWidth maxWidth="l" gap="12">
          <Heading as="h2" variant="heading-strong-l">
            PDF Preview
          </Heading>
          <iframe
            title={`${post.metadata.title} PDF`}
            src={post.metadata.pdf}
            style={{
              width: "100%",
              height: "820px",
              border: "1px solid var(--neutral-alpha-weak)",
              borderRadius: "12px",
            }}
          />
        </Column>
      )}
      <Column fillWidth gap="40" horizontal="center" marginTop="40">
        <Line maxWidth="40" />
        <Heading as="h2" variant="heading-strong-xl" marginBottom="24">
          {ui.workPost.relatedProjects}
        </Heading>
        <Projects
          exclude={[post.slug]}
          range={[2]}
          category={post.metadata.category}
          locale={locale}
        />
      </Column>
      <ScrollToHash />
    </Column>
  );
}
