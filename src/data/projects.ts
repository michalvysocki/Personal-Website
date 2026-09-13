export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  year: number;
  inProgress?: boolean,
  tags: string[];
  links: { label: string; href: string }[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: "anchor",
    title: "Anchor",
    subtitle: "path consistency for latent world models",
    description:
      "A self-supervised mechanism that penalizes disagreement between horizon-conditioned direct prediction and autoregressive rollout, aimed at reducing compound error in latent rollouts. Designed as an importable component rather than a standalone architecture.",
    year: 2026,
    inProgress: true,
    tags: ["world models", "self-supervised learning"],
    links: [{ label: "Code", href: "https://github.com/m1chelangelo11/Anchor" }],
    featured: true,
  },
  {
    slug: "drone-audio-detection",
    title: "Drone Audio Detection",
    subtitle: "acoustic early warning, and where it breaks",
    description:
      "A Random Forest classifier on MFCC features reaching strong held-out metrics that then failed on real recordings while misflagging ambient noise. The case study is built around that gap: real-world test sets at fixed distances, cross-drone generalization, and an explicit account of what the training data does not contain.",
    year: 2026,
    inProgress: true,
    tags: ["audio ML", "sim-to-real", "embedded"],
    links: [{ label: "Code", href: "#" }],
    featured: true,
  },
  {
    slug: "doc-research-os",
    title: "Doc Research OS",
    subtitle: "a document research tool I actually use",
    description:
      "A local RAG system for reading and querying research material: FastAPI backend, ChromaDB vector store, React frontend, running under Docker Compose. Built to make studying under load tractable.",
    year: 2026,
    inProgress: true,
    tags: ["RAG", "information retrieval"],
    links: [{ label: "Code", href: "#" }],
    featured: true,
  },
];