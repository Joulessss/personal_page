"use client";

import {
  Heading,
  Text,
  Button,
  RevealFx,
  Column,
  Badge,
  Row,
  Flex,
  Schema,
} from "@once-ui-system/core";
import { baseURL } from "@/resources";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { content, locale } = useLanguage();
  const { home, about, person, ui } = content;

  const labels =
    locale === "es"
      ? {
          work: "Explorar trabajo",
          about: "Ver perfil",
          live: "Abrir BioSense AI",
          stack: "Stack de modelo a producto",
          tracks: "Líneas de trabajo",
          metrics: "Señales operativas",
          badges: [
            "ML aplicado",
            "NLP + LLMs",
            "MLOps y despliegue",
            "Analítica geoespacial",
            "Investigación científica",
          ],
          stats: [
            { value: "32k", label: "observaciones complejas estructuradas para modelado" },
            { value: "80+", label: "variables integradas en pipelines analíticos" },
            { value: "2,087", label: "evaluaciones sensoriales estructuradas" },
            { value: "3", label: "líneas principales de trabajo aplicado" },
          ],
          signals: [
            {
              title: "Productos de IA en vivo",
              body: "Interfaces científicas con frontend en Next.js/React, backend en Python y despliegue en AWS.",
              chips: ["Next.js", "Flask", "Docker", "AWS"],
            },
            {
              title: "Modelado científico",
              body: "Clasificación multimodal, aumento de datos, validación rigurosa e interpretabilidad para datasets complejos.",
              chips: ["Random Forest", "XGBoost", "VBGMM", "PyTorch"],
            },
            {
              title: "Soluciones para decisión",
              body: "Clasificación NLP, pronóstico, analítica aplicada y herramientas orientadas a responder preguntas reales en industria y ciencia.",
              chips: ["LLM-NLP", "GIS", "Monte Carlo", "APIs"],
            },
          ],
          tracksData: [
            {
              title: "Cacao BioSense AI",
              body: "Producto full-stack de IA que conecta percepción sensorial con predicción bioactiva, aromática y funcional.",
              href: "/work/cacao-biosense-ai-ophirian",
            },
            {
              title: "Sistemas industriales y datos complejos",
              body: "Pipelines geoespaciales, NLP y modelado aplicados a problemas industriales de alto impacto.",
              href: "/work/stochastic-cost-benefit-optimization-colombian-natural-gas-network",
            },
            {
              title: "Tesis y publicaciones",
              body: "Investigación aplicada en sensores, ciencia de alimentos y machine learning explicable.",
              href: "/work",
            },
          ],
        }
      : {
          work: "Explore work",
          about: "View profile",
          live: "Open BioSense AI",
          stack: "Model-to-product stack",
          tracks: "Featured tracks",
          metrics: "Operating signals",
          badges: [
            "Applied ML",
            "NLP + LLMs",
            "MLOps & deployment",
            "Geospatial analytics",
            "Scientific research",
          ],
          stats: [
            { value: "32k", label: "complex observations structured for modeling" },
            { value: "80+", label: "variables integrated into analytical pipelines" },
            { value: "2,087", label: "structured sensory evaluations" },
            { value: "3", label: "core applied-work tracks" },
          ],
          signals: [
            {
              title: "Live AI products",
              body: "Scientific interfaces with Next.js/React frontends, Python backends, and AWS deployment.",
              chips: ["Next.js", "Flask", "Docker", "AWS"],
            },
            {
              title: "Scientific modeling",
              body: "Multimodal classification, data augmentation, rigorous validation, and interpretability for complex datasets.",
              chips: ["Random Forest", "XGBoost", "VBGMM", "PyTorch"],
            },
            {
              title: "Decision-ready solutions",
              body: "NLP classification, forecasting, applied analytics, and tools designed to answer real questions in industry and science.",
              chips: ["LLM-NLP", "GIS", "Monte Carlo", "APIs"],
            },
          ],
          tracksData: [
            {
              title: "Cacao BioSense AI",
              body: "A full-stack AI product translating sensory perception into bioactive, aromatic, and functional predictions.",
              href: "/work/cacao-biosense-ai-ophirian",
            },
            {
              title: "Industrial systems & complex data",
              body: "Geospatial pipelines, NLP, and modeling applied to high-impact industrial problems.",
              href: "/work/stochastic-cost-benefit-optimization-colombian-natural-gas-network",
            },
            {
              title: "Thesis and publications",
              body: "Applied research across sensing systems, food science, and interpretable machine learning.",
              href: "/work",
            },
          ],
        };

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
    <Column maxWidth="xl" gap="xl" paddingY="12" horizontal="center" className="ai-home-shell">
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

      <Column fillWidth className="ai-home-hero-surface" gap="24">
        <Row fillWidth gap="24" s={{ direction: "column" }} vertical="stretch">
          <Column flex={7} gap="20">
            {home.featured.display && (
              <RevealFx fillWidth horizontal="start">
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

            <RevealFx translateY="4" fillWidth horizontal="start">
              <Heading wrap="balance" variant="display-strong-l">
                {home.headline}
              </Heading>
            </RevealFx>

            <RevealFx translateY="8" delay={0.12} fillWidth horizontal="start">
              <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
                {home.subline}
              </Text>
            </RevealFx>

            <RevealFx delay={0.18}>
              <Row wrap gap="12" className="ai-home-cta-row">
                <Button href="/work" variant="primary" size="m" weight="default" arrowIcon>
                  {labels.work}
                </Button>
                <Button href={about.path} variant="secondary" size="m" weight="default" arrowIcon>
                  {labels.about}
                </Button>
                <Button
                  href="https://cocoa-biosense-ai.ophirian.co"
                  variant="tertiary"
                  size="m"
                  weight="default"
                  arrowIcon
                >
                  {labels.live}
                </Button>
              </Row>
            </RevealFx>

            <RevealFx delay={0.24}>
              <Row wrap gap="12" className="ai-home-capability-row">
                {labels.badges.map((badge) => (
                  <Text key={badge} className="ai-home-capability-pill" variant="label-default-s">
                    {badge}
                  </Text>
                ))}
              </Row>
            </RevealFx>

            <RevealFx fillWidth translateY="8" delay={0.3}>
              <Column fillWidth gap="12">
                <Text variant="label-strong-m" className="ai-home-section-label">
                  {labels.metrics}
                </Text>
                <Row fillWidth wrap gap="12" className="ai-home-stat-grid">
                  {labels.stats.map((stat) => (
                    <Flex key={stat.label} className="ai-home-stat-card" fillWidth>
                      <Column gap="8">
                        <Text className="ai-home-stat-value" variant="display-strong-s">
                          {stat.value}
                        </Text>
                        <Text className="ai-home-stat-label" onBackground="neutral-weak">
                          {stat.label}
                        </Text>
                      </Column>
                    </Flex>
                  ))}
                </Row>
              </Column>
            </RevealFx>
          </Column>

          <Column flex={5} gap="12" className="ai-home-command-panel">
            <Text variant="label-strong-m" className="ai-home-section-label">
              {labels.stack}
            </Text>
            {labels.signals.map((signal) => (
              <Column key={signal.title} className="ai-home-signal-card" gap="12">
                <Text variant="heading-strong-m">{signal.title}</Text>
                <Text onBackground="neutral-weak" variant="body-default-m">
                  {signal.body}
                </Text>
                <Row wrap gap="8">
                  {signal.chips.map((chip) => (
                    <Text key={chip} className="ai-home-signal-chip" variant="label-default-s">
                      {chip}
                    </Text>
                  ))}
                </Row>
              </Column>
            ))}
          </Column>
        </Row>
      </Column>

      <RevealFx fillWidth translateY="8" delay={0.35}>
        <Column fillWidth gap="12">
          <Text variant="label-strong-m" className="ai-home-section-label">
            {labels.tracks}
          </Text>
          <Row fillWidth gap="12" s={{ direction: "column" }} className="ai-home-track-grid">
            {labels.tracksData.map((track, index) => (
              <Flex key={track.title} fillWidth className="ai-home-track-card">
                <Column fillWidth gap="12">
                  <Text className="ai-home-track-index" variant="label-default-s">
                    {`0${index + 1}`}
                  </Text>
                  <Heading as="h3" variant="heading-strong-l">
                    {track.title}
                  </Heading>
                  <Text onBackground="neutral-weak" variant="body-default-m">
                    {track.body}
                  </Text>
                  <Button href={track.href} variant="secondary" size="s" weight="default" arrowIcon>
                    {labels.work}
                  </Button>
                </Column>
              </Flex>
            ))}
          </Row>
        </Column>
      </RevealFx>

      <RevealFx fillWidth translateY="8" delay={0.42}>
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
      </RevealFx>
    </Column>
  );
}
