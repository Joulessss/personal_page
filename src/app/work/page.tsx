import { Column, Meta, Schema } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { getServerContent } from "@/resources/server-localization";
import { getPosts } from "@/utils/utils";
import { WorkContent } from "@/components/work/WorkContent";

export async function generateMetadata() {
  const { work } = await getServerContent();
  return Meta.generate({
    title: work.title,
    description: work.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(work.title)}`,
    path: work.path,
  });
}

export default async function Work() {
  const { about, person, work } = await getServerContent();
  const postsEn = getPosts(["src", "app", "work", "projects"], "en");
  const postsEs = getPosts(["src", "app", "work", "projects"], "es");

  return (
    <Column maxWidth="m" paddingTop="24">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={work.path}
        title={work.title}
        description={work.description}
        image={`/api/og/generate?title=${encodeURIComponent(work.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <WorkContent postsEn={postsEn} postsEs={postsEs} />
    </Column>
  );
}
