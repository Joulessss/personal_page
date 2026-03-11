import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

export type Locale = "en" | "es";

export type UiCopy = {
  header: {
    locationLabel: string;
  };
  home: {
    latestFromBlog: string;
    carouselUp: string;
    carouselDown: string;
    researchLabel: string;
    projectLabel: string;
    thesisLabel: string;
    tiles: {
      roleTitle: string;
      roleBody: string;
      phdTitle: string;
      phdBody: string;
      skillsTitle: string;
      skillsBody: string;
      mottoTitle: string;
      mottoBody: string;
    };
  };
  blog: {
    earlierPosts: string;
  };
  blogPost: {
    backToBlog: string;
    recentPosts: string;
    shareThisPost: string;
    linkCopied: string;
    copyFailed: string;
  };
  workPost: {
    backToProjects: string;
    relatedProjects: string;
  };
  workPage: {
    researchPapers: string;
    thesisDocuments: string;
    projects: string;
  };
  about: {
    scheduleCall: string;
  };
  footer: {
    builtWithPrefix: string;
  };
  mailchimp: {
    emailPlaceholder: string;
    subscribe: string;
    invalidEmail: string;
  };
  language: {
    label: string;
    english: string;
    spanish: string;
  };
};

export type LocalizedContent = {
  person: Person;
  newsletter: Newsletter;
  social: Social;
  home: Home;
  about: About;
  blog: Blog;
  work: Work;
  gallery: Gallery;
  ui: UiCopy;
};

const personEn: Person = {
  firstName: "Juliana",
  lastName: "Quintana Rojas",
  name: "Juliana Quintana Rojas",
  role: "PhD Student in Engineering | ML Engineer, Data Scientist & Researcher",
  avatar: "/images/image_avatar.jpeg",
  email: "j.quintanar2@outlook.com",
  location: "America/Bogota",
  languages: ["English", "Spanish"],
};

const personEs: Person = {
  ...personEn,
  role: "Estudiante de doctorado en Ingeniería | Ingeniera de ML, científica de datos e investigadora",
  languages: ["Español", "Inglés"],
};

const social: Social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/juliana-quintana-rojas-7b93b4232",
    essential: true,
  },
  {
    name: "Website",
    icon: "globe",
    link: "https://julianaquintana.com",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${personEn.email}`,
    essential: true,
  },
];

const newsletterEn: Newsletter = {
  display: false,
  title: <>Subscribe to {personEn.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const newsletterEs: Newsletter = {
  display: false,
  title: <>Suscríbete al newsletter de {personEs.firstName}</>,
  description: <>Mi newsletter semanal sobre creatividad e ingeniería</>,
};

const homeEn: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${personEn.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${personEn.role}`,
  headline: <>Engineering Smarter Decisions Through Data Science &amp; Machine Learning.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Research article</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
           Latest
        </Text>
      </Row>
    ),
    href: "/work/stochastic-cost-benefit-optimization-colombian-natural-gas-network",
  },
  subline: (
    <>
      I&apos;m Juliana, a researcher and engineer bridging rigorous scientific modeling with modern
      ML workflows, from data pipelines to deployed solutions, across energy, food, and beyond.
    </>
  ),
};

const homeEs: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Inicio",
  title: `Portafolio de ${personEs.name}`,
  description: `Portafolio profesional donde presento mi trabajo como ${personEs.role}`,
  headline: <>Decisiones más inteligentes con ciencia de datos y machine learning.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Artículo de investigación</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Último
        </Text>
      </Row>
    ),
    href: "/work/stochastic-cost-benefit-optimization-colombian-natural-gas-network",
  },
  subline: (
    <>
      Soy Juliana, investigadora e ingeniera. Combino modelado científico riguroso con flujos
      modernos de ML, desde la construcción de pipelines de datos hasta el despliegue de
      soluciones en energía, alimentos y otros sectores.
    </>
  ),
};

const aboutEn: About = {
  path: "/about",
  label: "About",
  title: `About – ${personEn.name}`,
  description: `Meet ${personEn.name}, ${personEn.role} from Bogotá, Colombia`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Juliana is a Bogotá-based PhD student in Engineering and ML engineer/data scientist. She
        builds end-to-end machine learning solutions, from exploratory analysis and feature
        engineering to deployment-ready workflows, with domain-informed interpretability for
        strategic decision-making across energy, food, and complex industrial systems.

      </>
    ),
  },

  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "COPA — Universidad de los Andes",
        timeframe: "Aug 2025 - Present",
        role: "ML Engineer, Data Scientist & Researcher",
        achievements: [
          <>
            Design and deploy end-to-end ML and statistical workflows to model stochastic and
            continuous energy processes, including forecasting pipelines for production use.
          </>,
          <>
            Integrate domain expertise into model interpretability so outputs directly support
            strategic decisions in energy transportation and distribution systems.
          </>,
          <>
            Automate data pipelines and analysis workflows to improve reliability, risk analysis,
            and safety optimization across energy systems.
          </>,
          <>
            Develop quantitative decision-support tools and author technical reports and scientific
            outputs for academic and industry audiences.
          </>,
        ],
        images: [],
      },
      {
        company: "Dept. of Industrial Engineering — Universidad de los Andes",
        timeframe: "Aug 2025 - Present",
        role: "PhD Teaching Assistant (Discrete Event Simulation)",
        achievements: [
          <>
            Deliver lectures on discrete event simulation and support students in applied
            quantitative reasoning and data-driven decision-making.
          </>,
          <>
            Design and evaluate academic assessments aligned with continuous improvement of
            data-driven pedagogy.
          </>,
        ],
        images: [],
      },
      {
        company: "GDPP — Universidad de los Andes",
        timeframe: "Oct 2023 - Jun 2025",
        role: "ML Engineer, Data Scientist & Researcher",
        achievements: [
          <>
            Built hybrid ML frameworks integrating multimodal data sources to predict complex
            product quality profiles, with scalability toward production deployment.
          </>,
          <>
            Designed and automated end-to-end pipelines, including data collection, augmentation,
            feature engineering, and rigorous model validation.
          </>,
          <>
            Embedded domain expertise into model design and interpretability to improve product and
            process optimization decisions.
          </>,
          <>
            Produced peer-reviewed outputs and presented findings in national academic venues.
          </>,
        ],
        images: [],
      },
      {
        company: "Dept. of Chemical Engineering — Universidad de los Andes",
        timeframe: "Oct 2023 - Jun 2025",
        role: "Graduate Teaching Assistant (Transport Phenomena)",
        achievements: [
          <>
            Led laboratory sessions focused on experimental design, data collection, and
            quantitative interpretation of transport phenomena results.
          </>,
          <>
            Mentored students on lab protocols, analytical reasoning, and technical reporting.
          </>,
        ],
        images: [],
      },
    ],
  },


  studies: {
  display: true,
  title: "Studies",
  institutions: [
    {
      name: "Universidad de los Andes",
      major: <>Ph.D. in Engineering (Aug 2025 - Present)</>,
      focus: <em>Focused on energy systems, system reliability, failure and risk analysis, 
      and decision-making through the implementation of machine learning and data-driven solutions.</em>,
    },
    {
      name: "Universidad de los Andes",
      major: <>M.Sc. in Chemical Engineering (Aug 2023 - Jun 2025)</>,
      focus: <em>Research centered on bridging electronic sensory analysis and human sensory panels using predictive machine 
      learning models to support sensory screening and improve cocoa processing for smallholder producers in Colombia.</em>,
    },
    {
      name: "Universidad de los Andes",
      major: <>B.Sc. in Food Engineering (Aug 2021 - Apr 2024)</>,
      focus: <em>Focused on experimental research in compound encapsulation to improve the physicochemical and 
      sensory characteristics of food products.</em>,
    },
    {
      name: "Universidad de los Andes",
      major: <>B.Sc. in Chemical Engineering (Jan 2018 - Oct 2023)</>,
      focus: <em>Focused on introducing machine learning and data-driven approaches to support decision-making in encapsulation processes and material compatibility.</em>,
    },
  ],
},

  technical: {
    display: true,
    title: "Technical Skills",
    categories: [
      {
        name: "Programming & Data Analysis",
        skills: [
          { name: "Python", icon: "python" },
          { name: "R", icon: "r" },
          { name: "SQL", icon: "sql" },
          { name: "MATLAB", icon: "matlab" },
          { name: "Scikit-learn", icon: "machineLearning" },
          { name: "Pandas", icon: "dataScience" },
          { name: "NumPy", icon: "dataScience" },
          { name: "Matplotlib", icon: "dataViz" },
          { name: "Seaborn", icon: "dataViz" },
          { name: "Flask", icon: "grid" },
          { name: "Excel", icon: "grid" },
        ],
      },
      {
        name: "Machine Learning & AI",
        skills: [
          { name: "Supervised Learning", icon: "machineLearning" },
          { name: "Unsupervised Learning", icon: "machineLearning" },
          { name: "Data Augmentation", icon: "experimentalDesign" },
          { name: "Hybrid ML Frameworks", icon: "machineLearning" },
          { name: "Predictive Modeling", icon: "predictiveModeling" },
          { name: "Time Series Analysis", icon: "statisticalAnalysis" },
          { name: "Stochastic Simulation", icon: "rocket" },
          { name: "Inferential Statistics", icon: "statisticalAnalysis" },
          { name: "MLOps", icon: "git" },
        ],
      },
      {
        name: "Data Science & Analytics",
        skills: [
          { name: "Data Pipeline Design", icon: "dataScience" },
          { name: "Feature Engineering", icon: "dataScience" },
          { name: "Model Validation", icon: "experimentalDesign" },
          { name: "Data Visualization", icon: "dataViz" },
          { name: "Decision-Support Systems", icon: "grid" },
          { name: "ML Interpretability", icon: "dataScience" },
        ],
      },
      {
        name: "Web & Deployment",
        skills: [
          { name: "HTML", icon: "javascript" },
          { name: "CSS", icon: "grid" },
          { name: "Web Development", icon: "nextjs" },
          { name: "Deployment", icon: "aws" },
          { name: "API Integration", icon: "grid" },
          { name: "CI/CD Pipelines", icon: "git" },
        ],
      },
      {
        name: "Automation & Workflow Integration",
        skills: [
          { name: "End-to-end ML Automation", icon: "rocket" },
          { name: "Workflow Orchestration", icon: "rocket" },
          { name: "Operational ML Integration", icon: "grid" },
        ],
      },
      {
        name: "Process Simulation & Engineering Tools",
        skills: [
          { name: "Aspen Plus", icon: "aspenPlus" },
          { name: "SuperPro Designer", icon: "superProDesigner" },
        ],
      },
    ],
  },
};

const aboutEs: About = {
  ...aboutEn,
  label: "Sobre mí",
  title: `Sobre mí – ${personEs.name}`,
  description: `Conoce a ${personEs.name}, ${personEs.role} de Bogotá, Colombia`,
  intro: {
    ...aboutEn.intro,
    title: "Introducción",
    description: (
      <>
        Juliana es estudiante de doctorado en Ingeniería y se desempeña como ingeniera de ML y
        científica de datos en Bogotá. Diseña soluciones de machine learning de punta a punta,
        desde el análisis exploratorio y la ingeniería de variables hasta flujos listos para
        producción. Además, integra conocimiento de dominio para que los resultados sean
        interpretables y útiles en la toma de decisiones estratégicas en energía, alimentos y
        sistemas industriales complejos.

      </>
    ),
  },
  work: {
    ...aboutEn.work,
    display: true,
    title: "Experiencia Laboral",
    experiences: [
      {
        company: "COPA — Universidad de los Andes",
        timeframe: "Ago 2025 - Presente",
        role: "Ingeniera de ML, científica de datos e investigadora",
        achievements: [
          <>
            Diseño y despliegue de flujos de trabajo de ML y estadística de punta a punta para
            modelar procesos energéticos estocásticos y continuos, incluyendo pipelines de
            pronóstico para uso en producción.
          </>,
          <>
            Integración de conocimiento de dominio en la interpretabilidad de modelos para apoyar
            decisiones estratégicas en transporte y distribución de energía.
          </>,
          <>
            Automatización de pipelines de datos y análisis para mejorar confiabilidad operativa,
            análisis de riesgo y optimización de seguridad en sistemas energéticos.
          </>,
          <>
            Desarrollo de herramientas cuantitativas de apoyo a la toma de decisiones y elaboración de
            reportes técnicos y científicos para audiencias académicas e industriales.
          </>,
        ],
        images: [],
      },
      {
        company: "Departamento de Ingeniería Industrial — Universidad de los Andes",
        timeframe: "Ago 2025 - Presente",
        role: "Asistente Doctoral de Docencia (Simulación de Eventos Discretos)",
        achievements: [
          <>
            Dictado de clases de simulación de eventos discretos y acompañamiento en razonamiento
            cuantitativo aplicado y toma de decisiones basada en datos.
          </>,
          <>
            Diseño y evaluación de instrumentos académicos alineados con la mejora continua de la
            enseñanza basada en evidencia.
          </>,
        ],
        images: [],
      },
      {
        company: "GDPP — Universidad de los Andes",
        timeframe: "Oct 2023 - Jun 2025",
        role: "Ingeniera de ML, científica de datos e investigadora",
        achievements: [
          <>
            Construcción de marcos híbridos de ML que integran datos multimodales para
            predecir perfiles complejos de calidad de producto con enfoque escalable.
          </>,
          <>
            Diseño y automatización de pipelines de punta a punta: recolección y aumento de datos,
            ingeniería de variables y validación rigurosa de modelos.
          </>,
          <>
            Integración de conocimiento de dominio en diseño e interpretabilidad de modelos para
            mejorar decisiones en optimización de productos y procesos.
          </>,
          <>
            Producción de artículos revisados por pares y presentación de resultados en espacios
            académicos nacionales.
          </>,
        ],
        images: [],
      },
      {
        company: "Departamento de Ingeniería Química — Universidad de los Andes",
        timeframe: "Oct 2023 - Jun 2025",
        role: "Asistente Graduada de Docencia (Fenómenos de Transporte)",
        achievements: [
          <>
            Liderazgo de sesiones de laboratorio centradas en diseño experimental, adquisición de
            datos e interpretación cuantitativa de resultados.
          </>,
          <>
            Mentoría a estudiantes en protocolos de laboratorio, razonamiento analítico y
            elaboración de reportes técnicos.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
      ...aboutEn.studies,
  display: true,
  title: "Estudios",
  institutions: [
    {
      name: "Universidad de los Andes",
      major: <>Doctorado en Ingeniería (Ago 2025 - Presente)</>,
      focus: <em>Enfoque en sistemas energéticos, confiabilidad de sistemas, 
      análisis de fallas y riesgos, y apoyo a la toma de decisiones mediante la implementación de machine learning y soluciones basadas en datos.</em>,
    },
    {
      name: "Universidad de los Andes",
      major: <>Maestría en Ingeniería Química (Ago 2023 - Jun 2025)</>,
      focus: <em>Investigación orientada a cerrar la brecha entre análisis sensorial electrónico y paneles sensoriales humanos mediante modelos predictivos 
      de machine learning, para facilitar la identificación sensorial y mejorar el procesamiento de cacao en pequeños productores de Colombia.</em>,
    },
    {
      name: "Universidad de los Andes",
      major: <>Pregrado en Ingeniería de Alimentos (Ago 2021 - Abr 2024)</>,
      focus: <em>Investigación experimental en encapsulación de compuestos para mejorar las propiedades fisicoquímicas y sensoriales de productos alimentarios.</em>,
    },
    {
      name: "Universidad de los Andes",
      major: <>Pregrado en Ingeniería Química (Ene 2018 - Oct 2023)</>,
      focus: <em>Investigación en la introducción de enfoques basados en machine learning y ciencia de datos para facilitar la toma de decisiones en procesos de encapsulación y compatibilidad entre materiales.</em>,
    },
  ],
},
  technical: {
    title: "Habilidades técnicas",
    display: true,
    categories: [
      {
        name: "Programación y análisis de datos",
        skills: [
          { name: "Python", icon: "python" },
          { name: "R", icon: "r" },
          { name: "SQL", icon: "sql" },
          { name: "MATLAB", icon: "matlab" },
          { name: "Scikit-learn", icon: "machineLearning" },
          { name: "Pandas", icon: "dataScience" },
          { name: "NumPy", icon: "dataScience" },
          { name: "Matplotlib", icon: "dataViz" },
          { name: "Seaborn", icon: "dataViz" },
          { name: "Flask", icon: "grid" },
          { name: "Excel", icon: "grid" },
        ],
      },
      {
        name: "Machine Learning e IA",
        skills: [
          { name: "Aprendizaje supervisado", icon: "machineLearning" },
          { name: "Aprendizaje no supervisado", icon: "machineLearning" },
          { name: "Aumento de datos", icon: "experimentalDesign" },
          { name: "Marcos híbridos de ML", icon: "machineLearning" },
          { name: "Modelado predictivo", icon: "predictiveModeling" },
          { name: "Series de tiempo", icon: "statisticalAnalysis" },
          { name: "Simulación estocástica", icon: "rocket" },
          { name: "Estadística inferencial", icon: "statisticalAnalysis" },
          { name: "MLOps", icon: "git" },
        ],
      },
      {
        name: "Ciencia de datos y analítica",
        skills: [
          { name: "Diseño de pipelines", icon: "dataScience" },
          { name: "Ingeniería de variables", icon: "dataScience" },
          { name: "Validación de modelos", icon: "experimentalDesign" },
          { name: "Visualización de datos", icon: "dataViz" },
          { name: "Sistemas de soporte a decisiones", icon: "grid" },
          { name: "Interpretabilidad de ML", icon: "dataScience" },
        ],
      },
      {
        name: "Web y despliegue",
        skills: [
          { name: "HTML", icon: "javascript" },
          { name: "CSS", icon: "grid" },
          { name: "Desarrollo web", icon: "nextjs" },
          { name: "Despliegue", icon: "aws" },
          { name: "Integración de APIs", icon: "grid" },
          { name: "Pipelines CI/CD", icon: "git" },
        ],
      },
      {
        name: "Automatización e integración de flujos",
        skills: [
          { name: "Automatización de ML de punta a punta", icon: "rocket" },
          { name: "Orquestación de flujos de trabajo", icon: "rocket" },
          { name: "Integración operativa de ML", icon: "grid" },
        ],
      },
      {
        name: "Simulación y herramientas de ingeniería",
        skills: [
          { name: "Aspen Plus", icon: "aspenPlus" },
          { name: "SuperPro Designer", icon: "superProDesigner" },
        ],
      },
    ],
  },
};

const blogEn: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${personEn.name} has been up to recently`,
};

const blogEs: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Escribiendo sobre diseño y tecnología...",
  description: `Lee en qué ha estado trabajando ${personEs.name} recientemente`,
};

const workEn: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${personEn.name}`,
  description: `Design and dev projects by ${personEn.name}`,
};

const workEs: Work = {
  path: "/work",
  label: "Proyectos",
  title: `Proyectos – ${personEs.name}`,
  description: `Proyectos de diseño y desarrollo por ${personEs.name}`,
};

const galleryEn: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${personEn.name}`,
  description: `A photo collection by ${personEn.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const galleryEs: Gallery = {
  ...galleryEn,
  label: "Galería",
  title: `Galería de fotos – ${personEs.name}`,
  description: `Una colección de fotos de ${personEs.name}`,
};

const uiEn: UiCopy = {
  header: {
    locationLabel: "Bogota, Colombia",
  },
  home: {
    latestFromBlog: "Latest from the blog",
    carouselUp: "Up",
    carouselDown: "Down",
    researchLabel: "Research",
    projectLabel: "Project",
    thesisLabel: "Thesis",
    tiles: {
      roleTitle: "PhD Student | ML Engineer, Data Scientist & Researcher",
      roleBody: "End-to-end ML workflows, from data pipelines to deployed decision-support tools.",
      phdTitle: "PhD in Engineering",
      phdBody: "Doctoral research focused on energy systems, reliability, and risk-informed decision-making.",
      skillsTitle: "Core Skills",
      skillsBody: "Machine learning, predictive modeling, experimental design, and data visualization.",
      mottoTitle: "Motivation",
      mottoBody: "Transforming data into decisions that improve real-world processes.",
    },
  },
  blog: {
    earlierPosts: "Earlier posts",
  },
  blogPost: {
    backToBlog: "Blog",
    recentPosts: "Recent posts",
    shareThisPost: "Share this post:",
    linkCopied: "Link copied to clipboard",
    copyFailed: "Failed to copy link",
  },
  workPost: {
    backToProjects: "Projects",
    relatedProjects: "Related projects",
  },
  workPage: {
    researchPapers: "Research Papers",
    thesisDocuments: "Thesis Documents",
    projects: "Projects",
  },
  about: {
    scheduleCall: "Schedule a call",
  },
  footer: {
    builtWithPrefix: "/ Build your portfolio with",
  },
  mailchimp: {
    emailPlaceholder: "Email",
    subscribe: "Subscribe",
    invalidEmail: "Please enter a valid email address.",
  },
  language: {
    label: "Language",
    english: "English",
    spanish: "Español",
  },
};

const uiEs: UiCopy = {
  header: {
    locationLabel: "Bogotá, Colombia",
  },
  home: {
    latestFromBlog: "Lo último del blog",
    carouselUp: "Arriba",
    carouselDown: "Abajo",
    researchLabel: "Investigación",
    projectLabel: "Proyecto",
    thesisLabel: "Tesis",
    tiles: {
      roleTitle: "Estudiante de doctorado | Ingeniera de ML, científica de datos e investigadora",
      roleBody: "De los datos al despliegue: creo flujos de trabajo de ML para apoyar decisiones.",
      phdTitle: "Doctorado en Ingeniería",
      phdBody: "Investigación doctoral enfocada en sistemas energéticos, confiabilidad y toma de decisiones basada en riesgo.",
      skillsTitle: "Habilidades clave",
      skillsBody: "Aprendizaje automático, modelado predictivo, diseño experimental y visualización de datos.",
      mottoTitle: "Motivación",
      mottoBody: "Convierto datos en decisiones que mejoran procesos reales.",
    },
  },
  blog: {
    earlierPosts: "Publicaciones anteriores",
  },
  blogPost: {
    backToBlog: "Blog",
    recentPosts: "Publicaciones recientes",
    shareThisPost: "Comparte esta publicación:",
    linkCopied: "Enlace copiado al portapapeles",
    copyFailed: "No se pudo copiar el enlace",
  },
  workPost: {
    backToProjects: "Proyectos",
    relatedProjects: "Proyectos relacionados",
  },
  workPage: {
    researchPapers: "Artículos de investigación",
    thesisDocuments: "Tesis",
    projects: "Proyectos",
  },
  about: {
    scheduleCall: "Agendar una llamada",
  },
  footer: {
    builtWithPrefix: "/ Crea tu portafolio con",
  },
  mailchimp: {
    emailPlaceholder: "Correo electrónico",
    subscribe: "Suscribirme",
    invalidEmail: "Por favor ingresa un correo válido.",
  },
  language: {
    label: "Idioma",
    english: "Inglés",
    spanish: "Español",
  },
};

export const localizedContent: Record<Locale, LocalizedContent> = {
  en: {
    person: personEn,
    newsletter: newsletterEn,
    social,
    home: homeEn,
    about: aboutEn,
    blog: blogEn,
    work: workEn,
    gallery: galleryEn,
    ui: uiEn,
  },
  es: {
    person: personEs,
    newsletter: newsletterEs,
    social,
    home: homeEs,
    about: aboutEs,
    blog: blogEs,
    work: workEs,
    gallery: galleryEs,
    ui: uiEs,
  },
};

const defaultContent = localizedContent.en;

export const person = defaultContent.person;
export const newsletter = defaultContent.newsletter;
export const home = defaultContent.home;
export const about = defaultContent.about;
export const blog = defaultContent.blog;
export const work = defaultContent.work;
export const gallery = defaultContent.gallery;
export const ui = defaultContent.ui;

export { social };
