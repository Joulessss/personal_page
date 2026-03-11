import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Locale } from "@/resources/content";

type Team = {
  name: string;
  role: string;
  avatar: string;
  linkedIn: string;
};

type Metadata = {
  title: string;
  subtitle?: string;
  publishedAt: string;
  summary: string;
  image?: string;
  images: string[];
  pages?: string[];
  tag?: string;
  category?: "research" | "project" | "thesis";
  status?: "preprint" | "published";
  pdf?: string;
  repo?: string;
  team: Team[];
  link?: string;
};

import { notFound } from "next/navigation";

type MdxFile = {
  file: string;
  slug: string;
};

function getMDXFiles(dir: string, locale: Locale = "en"): MdxFile[] {
  if (!fs.existsSync(dir)) {
    notFound();
  }

  const files = fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
  const bySlug = new Map<string, { en?: string; es?: string; base?: string }>();

  files.forEach((file) => {
    if (file.endsWith(".en.mdx")) {
      const slug = file.replace(/\.en\.mdx$/, "");
      const entry = bySlug.get(slug) ?? {};
      entry.en = file;
      bySlug.set(slug, entry);
      return;
    }

    if (file.endsWith(".es.mdx")) {
      const slug = file.replace(/\.es\.mdx$/, "");
      const entry = bySlug.get(slug) ?? {};
      entry.es = file;
      bySlug.set(slug, entry);
      return;
    }

    const slug = file.replace(/\.mdx$/, "");
    const entry = bySlug.get(slug) ?? {};
    entry.base = file;
    bySlug.set(slug, entry);
  });

  return Array.from(bySlug.entries()).map(([slug, entry]) => {
    const file = locale === "es"
      ? entry.es ?? entry.base ?? entry.en
      : entry.en ?? entry.base ?? entry.es;

    if (!file) {
      notFound();
    }

    return { file, slug };
  });
}

function readMDXFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const rawContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(rawContent);

  const metadata: Metadata = {
    title: data.title || "",
    subtitle: data.subtitle || "",
    publishedAt: data.publishedAt,
    summary: data.summary || "",
    image: data.image || "",
    images: data.images || [],
    pages: data.pages || [],
    tag: data.tag || [],
    category: data.category || undefined,
    status: data.status || undefined,
    pdf: data.pdf || "",
    repo: data.repo || "",
    team: data.team || [],
    link: data.link || "",
  };

  return { metadata, content };
}

function getMDXData(dir: string, locale: Locale = "en") {
  const mdxFiles = getMDXFiles(dir, locale);
  return mdxFiles.map(({ file, slug }) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getPosts(customPath = ["", "", "", ""], locale: Locale = "en") {
  const postsDir = path.join(process.cwd(), ...customPath);
  return getMDXData(postsDir, locale);
}
