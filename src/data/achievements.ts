export type Achievement = {
  event: string;
  result: string;
  year: number;
  summary: string;
};

export const achievements: Achievement[] = [
  {
    event: "Detect & Defend — European Defence Tech Hackathon",
    result: "1st place",
    year: 2026,
    summary:
      "Built DetMesh, a multimodal counter-UAS system combining audio, RF, and vision for drone detection. The work later became Umbris.",
  },
  {
    event: "Spaceshield Hack",
    result: "1st place, Space category",
    year: 2026,
    summary:
      "AgloMeter, a data-driven analysis of transport exclusion and accessibility. Led the team as project manager.",
  },
  {
    event: "HackCarpathia",
    result: "1st place, Drones category",
    year: 2025,
    summary:
      "WildGuard, an early wildfire detection system using drone imagery and sensor data, with an alert dashboard for emergency services.",
  },
];