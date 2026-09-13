export type Role = {
  org: string;
  title: string;
  period: string;
  summary: string;
};

export const experience: Role[] = [
  {
    org: "Hertz New Technologies",
    title: "Junior ML Engineer",
    period: "Sep 2026 — present",
    summary:
      "Machine learning for autonomous systems and counter-UAS: multimodal detection, computer vision, prediction, and sensor data.",
  },
  {
    org: "Umbris",
    title: "Co-founder & CTO",
    period: "May 2026 — Sep 2026",
    summary:
      "Multimodal counter-UAS system fusing audio, RF, and vision, with a focus on edge inference and distributed sensing.",
  },
  {
    org: "Machine Learning Science Club, Rzeszów University of Technology",
    title: "Vice President",
    period: "Oct 2025 — present",
    summary:
      "Technical and organizational lead for research projects, events, and team development.",
  },
  {
    org: "MTU Aero Engines Polska",
    title: "Junior Data Scientist",
    period: "Nov 2025 — Apr 2026",
    summary:
      "Data warehouse modernization and aircraft engine analytics with dbt, Python, SQL, and Tableau.",
  },
  {
    org: "Education Support Foundation, Aviation Valley Association",
    title: "STEM Instructor",
    period: "Apr 2026 — Jun 2026",
    summary:
      "Taught electronics, programming, and STEM fundamentals in schools across Poland.",
  },
];