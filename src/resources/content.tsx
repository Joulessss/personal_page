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
  role: "Applied ML Engineer | Product Builder, Researcher & PhD Engineer",
  avatar: "/images/image_avatar.jpeg",
  email: "j.quintanar2@outlook.com",
  location: "America/Bogota",
  languages: ["English", "Spanish"],
};

const personEs: Person = {
  ...personEn,
  role: "Ingeniera aplicada de ML | Creadora de producto, investigadora e ingeniera doctoral",
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
  title: `${personEn.name} | Applied AI & ML Portfolio`,
  description: `Portfolio website showcasing my work as a ${personEn.role}`,
  headline: <>Applied AI, machine learning, and analytics for complex data and real-world decisions.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Live AI product</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          OphirIAn
        </Text>
      </Row>
    ),
    href: "/work/cacao-biosense-ai-ophirian",
  },
  subline: (
    <>
      I work across industrial systems, food and sensory science, and material-focused datasets,
      using my chemical and food engineering background to interpret complex data and turn it into
      deployable AI, ML, and analytics solutions for real decision-making.
    </>
  ),
};

const homeEs: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Inicio",
  title: `Portafolio de ${personEs.name}`,
  description: `Portafolio profesional donde presento mi trabajo como ${personEs.role}`,
  headline: <>IA aplicada para interpretar datos complejos y convertirlos en decisiones útiles.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Producto de IA en vivo</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          OphirIAn
        </Text>
      </Row>
    ),
    href: "/work/cacao-biosense-ai-ophirian",
  },
  subline: (
    <>
      Trabajo en sistemas industriales, ciencia de alimentos y sensorial, y datos asociados a
      materiales, usando mi formación en ingeniería química y de alimentos para interpretar datos
      complejos y convertirlos en soluciones desplegables de IA, ML y analítica para la toma de
      decisiones.
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
        I am an applied machine learning engineer, product-minded builder, and researcher in
        Engineering based in Bogotá, Colombia. I work across domains such as industrial systems,
        food and sensory science, and material characterization, but my focus is always the same:
        understanding complex data deeply and turning it into useful, deployable machine learning
        solutions.
        {" "}
        My work combines feature engineering, predictive modeling, NLP, statistical analysis, and
        data-driven experimentation with APIs and user-facing interfaces. I enjoy taking messy,
        high-dimensional datasets and transforming them into models and tools that are rigorous,
        interpretable, and practical for real-world decision-making.
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
        role: "Applied ML Engineer, Data Scientist & Researcher",
        achievements: [
          <>
            Built a segment-level georeferenced data product for Colombia&apos;s national gas
            transmission network, transforming simplified line connections into a
            topographically consistent representation aligned with physical corridors and
            elevation profiles.
          </>,
          <>
            Engineered a multidimensional failure-forecasting pipeline with roughly 32,000
            observations and 80+ static and temporal variables spanning topographic, seismic,
            climatic, and societal risk factors.
          </>,
          <>
            Developed an LLM-assisted NLP workflow to clean, standardize, and classify 20 years of
            Spanish-language incident reports by cause, replacing manual review with reproducible
            processing at scale.
          </>,
          <>
            Delivered a length-normalized segment-year analytical database that supports survival
            analysis, machine-learning failure-rate models, and strategic infrastructure planning.
          </>,
        ],
        images: [],
      },
      {
        company: "GDPP — Universidad de los Andes",
        timeframe: "Oct 2023 - Jun 2025",
        role: "ML Researcher",
        achievements: [
          <>
            Led end-to-end ML projects from multimodal scientific data collection and preprocessing
            through supervised and unsupervised model development, validation, and stakeholder
            communication.
          </>,
          <>
            Applied XGBoost, clustering, data augmentation, neural networks, and multivariate
            analysis to predictive modeling problems in food and chemical engineering.
          </>,
          <>
            Published peer-reviewed work and translated model findings into experimentally grounded
            decisions for compatibility and sensory-analysis research.
          </>,
          <>
            Built production-oriented research assets that later informed deployable AI products and
            decision-support tools.
          </>,
        ],
        images: [],
      },
      {
        company: "Industrial Engineering & Chemical Engineering Departments — Universidad de los Andes",
        timeframe: "Oct 2023 - Present",
        role: "Teaching Assistant (Discrete Event Simulation & Transport Phenomena)",
        achievements: [
          <>
            Deliver lectures and design assessments in stochastic modeling, simulation,
            experimental data analysis, and quantitative reasoning for undergraduate and graduate
            students.
          </>,
          <>
            Support students in applied problem-solving with an emphasis on reproducible analysis,
            modeling logic, and technical communication.
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
        name: "University of California, Berkeley",
        major: <>Graduated International Student, Summer Courses in ML & AI (2026)</>,
        focus: (
          <em>
            Advanced summer coursework focused on machine learning and artificial intelligence
            deepening, with international academic training in applied computational methods.
          </em>
        ),
      },
      {
        name: "Universidad de los Andes",
        major: <>Ph.D. in Engineering (Aug 2025 - Present)</>,
        focus: (
          <em>
            Focused on energy systems, reliability, failure analysis, and risk-informed
            decision-making through machine learning and data products.
          </em>
        ),
      },
      {
        name: "Universidad de los Andes",
        major: <>M.Sc. in Chemical Engineering (Aug 2023 - Jun 2025)</>,
        focus: (
          <em>
            Research on bridging electronic sensory systems and human panels with predictive ML to
            support quality screening and cocoa-process decisions for Colombian producers.
          </em>
        ),
      },
      {
        name: "Universidad de los Andes",
        major: <>B.Sc. in Food Engineering (Aug 2021 - Apr 2024)</>,
        focus: (
          <em>
            Experimental research in compound encapsulation to improve physicochemical and sensory
            food-product performance.
          </em>
        ),
      },
      {
        name: "Universidad de los Andes",
        major: <>B.Sc. in Chemical Engineering (Jan 2018 - Oct 2023)</>,
        focus: (
          <em>
            Early research in data-driven decision support for compatibility, encapsulation, and
            process optimization.
          </em>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    categories: [
      {
        name: "Applied ML & Product Delivery",
        skills: [
          { name: "End-to-end ML Pipelines", icon: "rocket" },
          { name: "Model Evaluation", icon: "statisticalAnalysis" },
          { name: "Feature Engineering", icon: "dataScience" },
          { name: "Experimentation", icon: "experimentalDesign" },
          { name: "API Integration", icon: "grid" },
          { name: "Full-stack AI Products", icon: "nextjs" },
          { name: "Production Deployment", icon: "aws" },
        ],
      },
      {
        name: "Programming & Data",
        skills: [
          { name: "Python", icon: "python" },
          { name: "SQL", icon: "sql" },
          { name: "R", icon: "r" },
          { name: "MATLAB", icon: "matlab" },
          { name: "pandas", icon: "dataScience" },
          { name: "NumPy", icon: "dataScience" },
          { name: "scikit-learn", icon: "machineLearning" },
          { name: "TensorFlow / Keras", icon: "tensorflow" },
          { name: "PyTorch", icon: "pytorch" },
          { name: "Jupyter Notebooks", icon: "grid" },
          { name: "RStudio", icon: "r" },
          { name: "matplotlib", icon: "dataViz" },
          { name: "seaborn", icon: "dataViz" },
        ],
      },
      {
        name: "ML & AI",
        skills: [
          { name: "Random Forest", icon: "machineLearning" },
          { name: "XGBoost", icon: "machineLearning" },
          { name: "SVM", icon: "machineLearning" },
          { name: "MLP", icon: "machineLearning" },
          { name: "Gaussian Processes", icon: "machineLearning" },
          { name: "k-means", icon: "machineLearning" },
          { name: "GMM", icon: "machineLearning" },
          { name: "kPCA", icon: "multivariateAnalysis" },
          { name: "VBGMM", icon: "multivariateAnalysis" },
          { name: "MDPs", icon: "grid" },
          { name: "Search Problems / CSPs", icon: "grid" },
          { name: "Active Learning", icon: "experimentalDesign" },
          { name: "Data Augmentation", icon: "experimentalDesign" },
          { name: "Held-out Validation", icon: "statisticalAnalysis" },
          { name: "Cross-validation", icon: "statisticalAnalysis" },
        ],
      },
      {
        name: "NLP & LLMs",
        skills: [
          { name: "LLM-assisted Classification", icon: "rocket" },
          { name: "Lexicon-based NLP", icon: "book" },
          { name: "Spanish / English Text Classification", icon: "globe" },
          { name: "Conversational Agent Design", icon: "grid" },
        ],
      },
      {
        name: "MLOps & Deployment",
        skills: [
          { name: "Docker", icon: "git" },
          { name: "Kubernetes", icon: "grid" },
          { name: "MLflow", icon: "rocket" },
          { name: "AWS", icon: "aws" },
          { name: "Flask", icon: "grid" },
          { name: "REST APIs", icon: "grid" },
          { name: "Next.js / React", icon: "nextjs" },
          { name: "Frontend / Backend Development", icon: "nextjs" },
          { name: "SaaS Platform Development", icon: "rocket" },
        ],
      },
      {
        name: "Statistics & Scientific Modeling",
        skills: [
          { name: "PCA", icon: "multivariateAnalysis" },
          { name: "MCA", icon: "multivariateAnalysis" },
          { name: "ANOVA", icon: "statisticalAnalysis" },
          { name: "Multivariate Analysis", icon: "multivariateAnalysis" },
          { name: "Artificial Neural Networks", icon: "pytorch" },
          { name: "Bayesian Inference", icon: "statisticalAnalysis" },
          { name: "Uncertainty Quantification", icon: "statisticalAnalysis" },
          { name: "Survival Analysis", icon: "statisticalAnalysis" },
          { name: "Stochastic Simulation", icon: "rocket" },
          { name: "Predictive Modeling", icon: "predictiveModeling" },
        ],
      },
      {
        name: "Geospatial & Network Analytics",
        skills: [
          { name: "QGIS", icon: "globe" },
          { name: "GIS Feature Extraction", icon: "globe" },
          { name: "Terrain Raster Integration", icon: "globe" },
          { name: "Climate Raster Integration", icon: "globe" },
          { name: "Spatial Network Analysis", icon: "grid" },
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
        Soy ingeniera de machine learning aplicada, creadora de productos con enfoque técnico e
        investigadora en ingeniería, radicada en Bogotá, Colombia. Trabajo en áreas como sistemas
        industriales, ciencia y análisis sensorial de alimentos, y caracterización de materiales;
        sin embargo, mi objetivo se mantiene constante: comprender datos complejos en profundidad y
        convertirlos en soluciones de machine learning útiles, robustas y desplegables.
        {" "}
        Mi trabajo integra ingeniería de características, modelado predictivo, procesamiento de
        lenguaje natural, análisis estadístico y experimentación guiada por datos, junto con el
        desarrollo de APIs e interfaces orientadas al usuario. Disfruto transformar conjuntos de
        datos desordenados y de alta dimensionalidad en modelos y herramientas rigurosos,
        interpretables y prácticos para respaldar la toma de decisiones en contextos reales.
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
        role: "Ingeniera aplicada de ML, científica de datos e investigadora",
        achievements: [
          <>
            Construcción de un producto de datos georreferenciado a nivel de segmento para la red
            nacional de transporte de gas en Colombia, transformando conexiones simplificadas en
            una representación topográficamente coherente y alineada con corredores físicos.
          </>,
          <>
            Diseño de un pipeline multidimensional de pronóstico de fallas con cerca de 32.000
            observaciones y más de 80 variables estáticas y temporales entre factores topográficos,
            sísmicos, climáticos y sociales.
          </>,
          <>
            Desarrollo de un flujo NLP asistido por LLM para limpiar, estandarizar y clasificar 20
            años de reportes de fallas en español por causa, reemplazando clasificación manual con
            procesamiento reproducible a escala.
          </>,
          <>
            Entrega de una base analítica segmento-año normalizada por longitud para modelos de
            supervivencia, tasas de falla y planeación estratégica de infraestructura.
          </>,
        ],
        images: [],
      },
      {
        company: "GDPP — Universidad de los Andes",
        timeframe: "Oct 2023 - Jun 2025",
        role: "Investigadora en ML",
        achievements: [
          <>
            Liderazgo de proyectos de ML de punta a punta, desde recolección y preprocesamiento de
            datos multimodales hasta desarrollo, validación y comunicación de modelos.
          </>,
          <>
            Aplicación de XGBoost, clustering, aumento de datos, redes neuronales y análisis
            multivariado a problemas predictivos en alimentos e ingeniería química.
          </>,
          <>
            Publicación de trabajo revisado por pares y traducción de hallazgos en decisiones
            experimentales para compatibilidad y análisis sensorial.
          </>,
          <>
            Construcción de activos de investigación con orientación a despliegue que luego
            alimentaron productos de IA y sistemas de soporte a decisiones.
          </>,
        ],
        images: [],
      },
      {
        company: "Departamentos de Ingeniería Industrial e Ingeniería Química — Universidad de los Andes",
        timeframe: "Oct 2023 - Presente",
        role: "Asistente de Docencia (Simulación de Eventos Discretos y Fenómenos de Transporte)",
        achievements: [
          <>
            Dictado de clases y diseño de evaluaciones en modelado estocástico, simulación,
            análisis experimental de datos y razonamiento cuantitativo para estudiantes de pregrado
            y posgrado.
          </>,
          <>
            Acompañamiento en resolución de problemas con énfasis en análisis reproducible, lógica
            de modelado y comunicación técnica.
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
        name: "University of California, Berkeley",
        major: <>International Student graduada, cursos de verano en ML e IA (2026)</>,
        focus: (
          <em>
            Profundización académica de verano en machine learning e inteligencia artificial, con
            formación internacional en métodos computacionales aplicados.
          </em>
        ),
      },
      {
        name: "Universidad de los Andes",
        major: <>Doctorado en Ingeniería (Ago 2025 - Presente)</>,
        focus: (
          <em>
            Enfoque en sistemas energéticos, confiabilidad, análisis de fallas y toma de decisiones
            basada en riesgo mediante machine learning y productos de datos.
          </em>
        ),
      },
      {
        name: "Universidad de los Andes",
        major: <>Maestría en Ingeniería Química (Ago 2023 - Jun 2025)</>,
        focus: (
          <em>
            Investigación para cerrar la brecha entre sensores electrónicos y paneles humanos con
            ML predictivo aplicado a calidad sensorial y procesamiento de cacao.
          </em>
        ),
      },
      {
        name: "Universidad de los Andes",
        major: <>Pregrado en Ingeniería de Alimentos (Ago 2021 - Abr 2024)</>,
        focus: (
          <em>
            Investigación experimental en encapsulación de compuestos para mejorar desempeño
            fisicoquímico y sensorial de productos alimentarios.
          </em>
        ),
      },
      {
        name: "Universidad de los Andes",
        major: <>Pregrado en Ingeniería Química (Ene 2018 - Oct 2023)</>,
        focus: (
          <em>
            Primeras líneas de investigación en soporte a decisiones con datos para compatibilidad,
            encapsulación y optimización de procesos.
          </em>
        ),
      },
    ],
  },
  technical: {
    title: "Habilidades técnicas",
    display: true,
    categories: [
      {
        name: "ML aplicado y desarrollo de producto",
        skills: [
          { name: "Pipelines de ML de punta a punta", icon: "rocket" },
          { name: "Evaluación de modelos", icon: "statisticalAnalysis" },
          { name: "Ingeniería de variables", icon: "dataScience" },
          { name: "Experimentación", icon: "experimentalDesign" },
          { name: "Integración de APIs", icon: "grid" },
          { name: "Productos full-stack con IA", icon: "nextjs" },
          { name: "Despliegue a producción", icon: "aws" },
        ],
      },
      {
        name: "Programación y datos",
        skills: [
          { name: "Python", icon: "python" },
          { name: "SQL", icon: "sql" },
          { name: "R", icon: "r" },
          { name: "MATLAB", icon: "matlab" },
          { name: "pandas", icon: "dataScience" },
          { name: "NumPy", icon: "dataScience" },
          { name: "scikit-learn", icon: "machineLearning" },
          { name: "TensorFlow / Keras", icon: "tensorflow" },
          { name: "PyTorch", icon: "pytorch" },
          { name: "Jupyter Notebooks", icon: "grid" },
          { name: "RStudio", icon: "r" },
          { name: "matplotlib", icon: "dataViz" },
          { name: "seaborn", icon: "dataViz" },
        ],
      },
      {
        name: "ML e IA",
        skills: [
          { name: "Random Forest", icon: "machineLearning" },
          { name: "XGBoost", icon: "machineLearning" },
          { name: "SVM", icon: "machineLearning" },
          { name: "MLP", icon: "machineLearning" },
          { name: "Procesos Gaussianos", icon: "machineLearning" },
          { name: "k-means", icon: "machineLearning" },
          { name: "GMM", icon: "machineLearning" },
          { name: "kPCA", icon: "multivariateAnalysis" },
          { name: "VBGMM", icon: "multivariateAnalysis" },
          { name: "MDPs", icon: "grid" },
          { name: "Problemas de búsqueda / CSPs", icon: "grid" },
          { name: "Active Learning", icon: "experimentalDesign" },
          { name: "Aumento de datos", icon: "experimentalDesign" },
          { name: "Validación held-out", icon: "statisticalAnalysis" },
          { name: "Validación cruzada", icon: "statisticalAnalysis" },
        ],
      },
      {
        name: "NLP y LLMs",
        skills: [
          { name: "Clasificación asistida por LLM", icon: "rocket" },
          { name: "NLP basado en léxicos", icon: "book" },
          { name: "Clasificación de texto en español e inglés", icon: "globe" },
          { name: "Diseño de agentes conversacionales", icon: "grid" },
        ],
      },
      {
        name: "MLOps y despliegue",
        skills: [
          { name: "Docker", icon: "git" },
          { name: "Kubernetes", icon: "grid" },
          { name: "MLflow", icon: "rocket" },
          { name: "AWS", icon: "aws" },
          { name: "Flask", icon: "grid" },
          { name: "REST APIs", icon: "grid" },
          { name: "Next.js / React", icon: "nextjs" },
          { name: "Desarrollo frontend / backend", icon: "nextjs" },
          { name: "Plataformas SaaS", icon: "rocket" },
        ],
      },
      {
        name: "Estadística y modelado científico",
        skills: [
          { name: "PCA", icon: "multivariateAnalysis" },
          { name: "MCA", icon: "multivariateAnalysis" },
          { name: "ANOVA", icon: "statisticalAnalysis" },
          { name: "Análisis multivariado", icon: "multivariateAnalysis" },
          { name: "Redes neuronales artificiales", icon: "pytorch" },
          { name: "Inferencia bayesiana", icon: "statisticalAnalysis" },
          { name: "Cuantificación de incertidumbre", icon: "statisticalAnalysis" },
          { name: "Análisis de supervivencia", icon: "statisticalAnalysis" },
          { name: "Simulación estocástica", icon: "rocket" },
          { name: "Modelado predictivo", icon: "predictiveModeling" },
        ],
      },
      {
        name: "Geoespacial y análisis de redes",
        skills: [
          { name: "QGIS", icon: "globe" },
          { name: "Extracción de variables GIS", icon: "globe" },
          { name: "Integración de raster de terreno", icon: "globe" },
          { name: "Integración de raster climático", icon: "globe" },
          { name: "Análisis espacial de redes", icon: "grid" },
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
  title: "AI Products, Research & Technical Work",
  description: "Applied machine learning products, publications, and technical systems across industrial, scientific, and data-intensive applications.",
};

const workEs: Work = {
  path: "/work",
  label: "Proyectos",
  title: "Productos de IA, Investigación y Trabajo Técnico",
  description: "Productos de machine learning aplicado, publicaciones y sistemas técnicos en aplicaciones industriales, científicas y de datos complejos.",
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
      roleTitle: "Applied ML Engineer | Product Builder",
      roleBody: "Live AI systems spanning multimodal modeling, deployment, and stakeholder-ready interpretation.",
      phdTitle: "Cross-domain Practice",
      phdBody: "Applied work across industrial systems, food and sensory science, and material-focused data problems.",
      skillsTitle: "Technical Breadth",
      skillsBody: "ML, NLP, geospatial analytics, MLOps, and scientific experimentation in one stack.",
      mottoTitle: "Operating Principle",
      mottoBody: "Build useful intelligence systems, not isolated models.",
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
    researchPapers: "Research Systems",
    thesisDocuments: "Thesis Documents",
    projects: "Live Products & Projects",
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
      roleTitle: "Ingeniera aplicada de ML | Creadora de producto",
      roleBody: "Sistemas de IA en vivo con modelado multimodal, despliegue e interpretación para usuarios reales.",
      phdTitle: "Práctica en múltiples dominios",
      phdBody: "Trabajo aplicado en sistemas industriales, ciencia de alimentos y sensorial, y problemas de datos asociados a materiales.",
      skillsTitle: "Amplitud técnica",
      skillsBody: "ML, NLP, analítica geoespacial, MLOps y experimentación científica en un mismo stack.",
      mottoTitle: "Principio de trabajo",
      mottoBody: "Construir sistemas de inteligencia útiles, no modelos aislados.",
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
    researchPapers: "Sistemas de investigación",
    thesisDocuments: "Tesis",
    projects: "Productos y proyectos en vivo",
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
