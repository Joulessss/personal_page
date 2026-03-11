import { Column, Heading, Meta, Schema } from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { Projects } from "@/components/work/Projects";
import { getServerContent, getServerLocale } from "@/resources/server-localization";

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
  const { about, person, work, ui } = await getServerContent();
  const locale = await getServerLocale();

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
      <Heading marginBottom="l" variant="heading-strong-xl" align="center">
        {work.title}
      </Heading>
      <Heading as="h2" marginBottom="m" variant="heading-strong-l" align="start" marginLeft="l">
        {ui.workPage.researchPapers}
      </Heading>
      <Projects category="research" locale={locale} />
      <Heading as="h2" marginBottom="m" variant="heading-strong-l" align="start" marginLeft="l">
        {ui.workPage.thesisDocuments}
      </Heading>
      <Projects category="thesis" locale={locale} />
      <Heading as="h2" marginBottom="m" variant="heading-strong-l" align="start" marginLeft="l">
        {ui.workPage.projects}
      </Heading>
      <Projects category="project" locale={locale} />
    </Column>
  );
}
