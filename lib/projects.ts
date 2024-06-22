export const projects: {
  title: string;
  tags: string[];
  shortDesc: string;
  longDesc: string;
  images: string[];
  url?: string;
}[] = [
    {
      title: "AI Virtual YouTuber",
      tags: ["Openai", "MMVC", "Web", "Canva", "Stable Diffusion"],
      shortDesc: "A virtual YouTube streamer that chats and interacts with viewers in real-time.",
      longDesc: `This project is an AI-powered virtual YouTuber designed to emulate live streamers using LLM and virtual avatars. Our AI virtual YouTuber can engage in real-time interactions with viewers, featuring a unique appearance, voice, and personality, attracting more than 500 subscribers to date.

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
      shortDesc: "Official promotion page for an AI Competition.",
      longDesc: `The Official promotion page for the AIGO Competition, which aims to predict housing prices in Taiwan using AI/ML techniques, attracting 972 teams to participate.

(Website is not visible because the competition has ended.)      `,
      images: ["/aigo/Frame 6.png", "/aigo/Frame 5.png"],
      url: "https://tbrain.trendmicro.com.tw/Competitions/Details/30",
    },
    {
      title: "Discord LLM Agent",
      tags: ["Python", "Openai", "Vector DB"],
      shortDesc: "A multi-modal LLM agent that is context-aware and able to use external tools like Python interpreter and web search.",
      longDesc: `A multi-modal LLM agent that supports multi-turn conversation and able to use external tools like Python interpreter and web text/image search. The agent can recognize user's images and can use vector search to find reaction images. Implemented in Python and uses Discord as interface.`,
      images: ["/dc/dc.jpg"],
      url: "https://github.com/Lifulifu/nekopapa-dc",
    },
    {
      title: "Mahjong Minigame",
      tags: ["Game", "Javascript"],
      shortDesc: "Mahjong minigame with physics engine in Javascript.",
      longDesc:
        "Mahjong minigame with physics engine in Javascript. The objective is to arrange a valid hand of tiles on the platform.",
      images: ["/mj/Frame 4.png"],
      url: "https://github.com/Lifulifu/MJgame",
    },
    {
      title: "PromptHub",
      tags: ["Web", "Sveltekit"],
      shortDesc: "A prompt sharing social media platform.",
      longDesc: `A social media platform that allows users to share prompts, chat sessions and AI generated images, supporting various AI services as source. Implemented in Sveltekit and sqlite as database.

(Code will be open-sourced soon)`,
      images: ['/prompthub/Frame 7.png', '/prompthub/Frame 8.png'],
    },
  ];
