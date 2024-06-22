export const projects: {
  title: string;
  tags: string[];
  shortDesc: string;
  longDesc: string;
  images: string[];
  url: string;
}[] = [
    {
      title: "AI Virtual YouTuber",
      tags: ["Openai", "MMVC", "Web", "Canva", "Stable Diffusion"],
      shortDesc: "A virtual YouTube streamer that chats and interacts with viewers in real-time, achieving more than 500 subscribers to date.",
      longDesc: `This project is an AI-powered virtual YouTuber designed to emulate live streamers using LLM and virtual avatars. Our AI virtual YouTuber can engage in real-time interactions with viewers, featuring a unique appearance, voice, and personality.

- Real-Time Interaction: Implemented a pipeline system to optimize for latency.

- Unique Persona: Distinctive look, voice, and personality, achieved by fine-tuning LLM and voice models.

- Backend System: Highly customizable in-browser backend system, supports both fully automated operations and manual moderation.

- Continuous Learning: Continuously improves the LLM model from the data collected during live streams.`,
      images: [
        "/aivtb/Frame 1.png",
        "/aivtb/Frame 2.png",
        "/aivtb/Frame 3.png",
        "/aivtb/Frame 4.png",
      ],
      url: "https://github.com/Lifulifu/aivtb",
    },
    {
      title: "AIGO Competition Official Site",
      tags: ["Web", "Svelte"],
      shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      longDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt labore, sequi quis optio fugit animi sunt est laborum libero reprehenderit iusto ea modi earum et at. Obcaecati illo, voluptatibus sapiente minus, eaque unde, possimus tempora eveniet fugiat et officiis adipisci ullam mollitia sint suscipit pariatur libero ratione maxime laudantium facilis!",
      images: ["/aigo/Frame 6.png", "/aigo/Frame 5.png"],
      url: "/",
    },
    {
      title: "Discord LLM Agent",
      tags: ["Python", "Openai", "Vector DB"],
      shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      longDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt labore, sequi quis optio fugit animi sunt est laborum libero reprehenderit iusto ea modi earum et at. Obcaecati illo, voluptatibus sapiente minus, eaque unde, possimus tempora eveniet fugiat et officiis adipisci ullam mollitia sint suscipit pariatur libero ratione maxime laudantium facilis!",
      images: ["/dc/dc.jpg"],
      url: "/",
    },
    {
      title: "Mahjong Minigame",
      tags: ["Game", "Javascript"],
      shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      longDesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt labore, sequi quis optio fugit animi sunt est laborum libero reprehenderit iusto ea modi earum et at. Obcaecati illo, voluptatibus sapiente minus, eaque unde, possimus tempora eveniet fugiat et officiis adipisci ullam mollitia sint suscipit pariatur libero ratione maxime laudantium facilis!",
      images: ["/mj/Frame 4.png"],
      url: "/",
    },
    {
      title: "PromptHub",
      tags: ["Web", "Svelte"],
      shortDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      longDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      images: ['/prompthub/Frame 7.png', '/prompthub/Frame 8.png'],
      url: "/",
    },
  ];
