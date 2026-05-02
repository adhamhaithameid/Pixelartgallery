export interface IconProject {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  tools: string[];
  description: string;
  motivation: string;
  process: string;
  beforeColor: string;
  beforeTextColor: string;
  beforeLabel: string;
  beforeSymbol: string;
  accentColor: string;
  imageKey: string;
}

export const iconProjects: IconProject[] = [
  {
    id: 1,
    slug: "calculator",
    name: "Calculator",
    tagline: "Turning math into memory.",
    tools: ["Aseprite", "32×32px"],
    description:
      "The calculator is one of the most iconic utility apps ever made. Its minimal interface — buttons, a display, a dark body — has been redesigned hundreds of times. But I wanted to strip it all the way back to where it all started: early digital displays, pixel fonts, and chunky buttons.",
    motivation:
      "I wanted to bring back the nostalgia of early digital interfaces. There's something beautiful about the way early pocket calculators looked — the hard edges, the segmented displays. Doing this in 32×32 pixels forced me to distill that entire aesthetic into its purest form.",
    process:
      "I started with the button grid, then worked backwards to fit a display. The hardest part was making the numpad legible at 32px while still keeping the dark body proportional. I ended up reducing the display to just a single row of two digits — which paradoxically made it feel more authentic.",
    beforeColor: "#1C1C1E",
    beforeTextColor: "#FFFFFF",
    beforeLabel: "Apple Calculator",
    beforeSymbol: "÷",
    accentColor: "#5E5CE6",
    imageKey: "calculator",
  },
  {
    id: 2,
    slug: "chess",
    name: "Chess",
    tagline: "Sixty-four squares. Infinite strategy.",
    tools: ["Aseprite", "32×32px"],
    description:
      "Chess is a game of patterns, strategy, and geometry. The grid-based nature of pixel art felt like a perfect mirror for the chessboard itself — both systems built entirely on squares. This redesign was less about the app and more about the game's visual DNA.",
    motivation:
      "Chess pieces are defined by their silhouettes. A pawn, a knight, a queen — you recognize them instantly by shape alone. I wanted to explore how few pixels you need before a shape becomes a piece. The answer, I found, was surprisingly few.",
    process:
      "I focused on the pawn — the most common piece and the one that defines the chess visual. The challenge was making a green field and dark piece feel chess-like without drawing a full board. A few well-placed darker pixels at the bottom gave it depth and groundedness.",
    beforeColor: "#3D7A3E",
    beforeTextColor: "#FFFFFF",
    beforeLabel: "Chess.com App",
    beforeSymbol: "♟",
    accentColor: "#4CAF50",
    imageKey: "chess",
  },
  {
    id: 3,
    slug: "clock",
    name: "Clock",
    tagline: "Every second, counted.",
    tools: ["Aseprite", "32×32px"],
    description:
      "Time is precise. Pixel art is precise. They were made for each other. The analog clock face is one of the oldest and most universal interfaces in human history — and one of the most challenging to recreate at a micro scale.",
    motivation:
      "I was drawn to the mathematical challenge: how do you draw a circle at 32×32 that actually looks round? And then how do you add clock hands that convey a specific time? The constraints forced a kind of elegance I wasn't expecting.",
    process:
      "Getting the circular bezel right took the longest. I used a reference grid for the Bresenham circle and iterated on the hour/minute markings. The hands were the last piece — I landed on a classic clock face showing roughly 10:10, which made the icon feel balanced and alive.",
    beforeColor: "#F2F2F7",
    beforeTextColor: "#1C1C1E",
    beforeLabel: "iOS Clock App",
    beforeSymbol: "🕙",
    accentColor: "#636366",
    imageKey: "clock",
  },
  {
    id: 4,
    slug: "contacts",
    name: "Contacts",
    tagline: "A person, in pixels.",
    tools: ["Aseprite", "32×32px"],
    description:
      "The Contacts app icon has always been about the human silhouette — a face, a head, a person. The challenge of pixel art is to carry that humanity through in dozens of pixels rather than thousands. The result is something more abstracted, yet somehow more personal.",
    motivation:
      "I was fascinated by how much personality a face can have at tiny resolutions. Think of the old Macintosh happy face, or the original Nintendo characters — identity emerges from pixel arrangement in a way that feels like magic.",
    process:
      "The trickiest part was the face — getting a readable nose, eyes, and hair structure without individual features blurring together. I used a warm brownish-orange background to contrast with the character sprite, which nods to the original contacts icon's warm, approachable palette.",
    beforeColor: "#E8622A",
    beforeTextColor: "#FFFFFF",
    beforeLabel: "iOS Contacts",
    beforeSymbol: "👤",
    accentColor: "#FF7043",
    imageKey: "contacts",
  },
  {
    id: 5,
    slug: "mail",
    name: "Mail",
    tagline: "The envelope. Reimagined.",
    tools: ["Aseprite", "32×32px"],
    description:
      "The envelope is perhaps the oldest digital icon metaphor still in active use. It predates the web, predates smartphones — it's been on screens since the first email clients. Bringing it into pixel art was both a tribute and a deconstruction.",
    motivation:
      "I wanted to explore what makes the mail icon instantly recognizable. It's just a white rectangle with a blue field and a triangular flap. But in the right proportions, with the right blues, it becomes unmistakably 'mail'. Pixel art strips away the gradients and leaves only that core geometry.",
    process:
      "The blue color choice was deliberate — a deep, saturated blue that echoes iOS Mail but with a retro kick. The white envelope lines needed to be at least 1px thick to read clearly. I found that the diagonal lines forming the flap 'V' are actually the most important detail — without them it's just a rectangle.",
    beforeColor: "#1688FB",
    beforeTextColor: "#FFFFFF",
    beforeLabel: "iOS Mail App",
    beforeSymbol: "✉",
    accentColor: "#1688FB",
    imageKey: "mail",
  },
  {
    id: 6,
    slug: "ms-todo",
    name: "MS To-Do",
    tagline: "The pixel perfect check.",
    tools: ["Aseprite", "32×32px"],
    description:
      "A checkmark is one of the simplest, most universally understood symbols. Done. Complete. Finished. In Microsoft's To-Do, it anchors the entire identity. Recreating it in pixel art forced me to think about where a checkmark actually lives and what makes it satisfying.",
    motivation:
      "There's something deeply satisfying about a checkmark — the visual equivalent of crossing something off a list. I wanted my pixel version to carry that same psychological weight. The blue had to be confident, the check had to be clean.",
    process:
      "The check itself was designed to feel 'clicked' — slightly chunky, with a clear downstroke and upstroke. I kept the background clean and bright to let the check breathe. The proportions took a few iterations; too thin and it disappears, too thick and it loses elegance.",
    beforeColor: "#2564CF",
    beforeTextColor: "#FFFFFF",
    beforeLabel: "Microsoft To-Do",
    beforeSymbol: "✓",
    accentColor: "#2564CF",
    imageKey: "ms-todo",
  },
  {
    id: 7,
    slug: "notes",
    name: "Notes",
    tagline: "Lines on yellow. Simple as that.",
    tools: ["Aseprite", "32×32px"],
    description:
      "Notes is one of Apple's most minimalist icons — a yellow notepad with ruled lines. At 32×32, the concept doesn't change, but the execution requires radical simplification. Every line must earn its place.",
    motivation:
      "I was drawn to how much the Notes icon relies on negative space. The yellow background does most of the work; the lines just confirm what you already know. In pixel art, that restraint becomes even more pronounced — and I found it refreshing.",
    process:
      "The yellow I chose is slightly more saturated than Apple's — it pushes toward gold, which feels more retro and deliberate. The lines are single pixels, evenly spaced. I added a thin top bar in slightly darker yellow to simulate the notepad's header. Less is more here.",
    beforeColor: "#FFCC02",
    beforeTextColor: "#1C1C1E",
    beforeLabel: "Apple Notes",
    beforeSymbol: "📝",
    accentColor: "#FFCC02",
    imageKey: "notes",
  },
  {
    id: 8,
    slug: "notion",
    name: "Notion",
    tagline: "The N. Bold and structural.",
    tools: ["Aseprite", "32×32px"],
    description:
      "Notion's identity is built around a single letterform — a serif N on a white background. It's deceptively simple. At 32×32, every pixel of that letterform carries structural weight, and the geometry of a bold N becomes almost architectural.",
    motivation:
      "I was curious whether Notion's icon would survive the pixel art process. The serif letterform is all about subtle curves and stroke modulation — things that pixel art traditionally fights against. Making it work felt like a real design challenge.",
    process:
      "I traced the letterform manually, pixel by pixel, starting from the verticals and working through the diagonal. The serifs were the hardest part — each one is only 2-3 pixels wide, yet they need to read as intentional. I chose to render the N in black on a clean white background to honor Notion's original minimal identity.",
    beforeColor: "#FFFFFF",
    beforeTextColor: "#000000",
    beforeLabel: "Notion App",
    beforeSymbol: "N",
    accentColor: "#000000",
    imageKey: "notion",
  },
  {
    id: 9,
    slug: "terminal",
    name: "Terminal",
    tagline: "The blinking cursor. The beginning of everything.",
    tools: ["Aseprite", "32×32px"],
    description:
      "The terminal is where code lives. It's the oldest persistent interface in computing — a black screen, a prompt, a blinking cursor. Designing a pixel art terminal icon felt like returning to the source: this is where pixel art and computing were born.",
    motivation:
      "Terminal iconography already has a pixel art aesthetic baked in — monospace fonts, scanlines, command prompts. I wanted my version to feel like it came from a different era, something you might have seen on a green-phosphor CRT in 1983.",
    process:
      "The dark background with light text was the obvious starting point. I used a deep near-black with subtle grey rather than pure black — it gives the icon depth. The terminal prompt '>' and underscore cursor are rendered in a lighter grey to contrast. The rounded corners are the only concession to modernity.",
    beforeColor: "#1C1C1E",
    beforeTextColor: "#CCCCCC",
    beforeLabel: "macOS Terminal",
    beforeSymbol: ">_",
    accentColor: "#32D74B",
    imageKey: "terminal",
  },
  {
    id: 10,
    slug: "vs-code",
    name: "VS Code",
    tagline: "The editor, distilled.",
    tools: ["Aseprite", "32×32px"],
    description:
      "VS Code's icon is one of the most distinctive in software — an abstract arrangement of blue squares that somehow communicates 'text editor'. Translating that into pixel art was an exploration of how iconography survives reduction and how brand identity persists even at the lowest resolution.",
    motivation:
      "As someone who spends hours in VS Code, I felt a personal stake in getting this right. The blue had to be the right blue — not Azure, not cobalt, but that specific VS Code electric blue. And the form had to hint at the angle-bracket shapes that define the original.",
    process:
      "I reworked the abstract logo form into a pixel-native arrangement. Rather than literally copying the vector logo, I let the pixel grid suggest how the shapes should live. The result is something that reads as VS Code without being a direct trace — it's a pixel-art interpretation, not a replica.",
    beforeColor: "#0066B8",
    beforeTextColor: "#FFFFFF",
    beforeLabel: "VS Code",
    beforeSymbol: "</>",
    accentColor: "#007ACC",
    imageKey: "vs-code",
  },
  {
    id: 11,
    slug: "x",
    name: "X (Twitter)",
    tagline: "X marks the pixel.",
    tools: ["Aseprite", "32×32px"],
    description:
      "When Twitter became X, the design world changed overnight. The clean, rounded bird was replaced by a stark, geometric X on black. Love it or hate it, it's one of the most dramatic rebrands in tech history — and one that lends itself perfectly to pixel art.",
    motivation:
      "The X logo is fundamentally geometric — two diagonal strokes crossing at the center. At 32×32, that geometry becomes pure. There's no room for subtlety; you either commit to the X or you don't. I wanted to see what happens when you give the rebrand the pixel treatment it almost seems to deserve.",
    process:
      "The challenge was anti-aliasing — or rather, the lack of it. A diagonal line in pixel art is always a staircase, not a smooth edge. But I leaned into that: the staircase IS the pixel art. The thick strokes, the high contrast, the black background — everything came together to make something that feels both modern and retro.",
    beforeColor: "#000000",
    beforeTextColor: "#FFFFFF",
    beforeLabel: "X / Twitter",
    beforeSymbol: "𝕏",
    accentColor: "#E7E9EA",
    imageKey: "x",
  },
  {
    id: 12,
    slug: "youtube",
    name: "YouTube",
    tagline: "Play. In 32 pixels.",
    tools: ["Aseprite", "32×32px"],
    description:
      "The YouTube play button is one of the most recognized symbols in digital culture. Billions of plays. Trillions of views. And at its core, just a red rounded rectangle with a white triangle. In pixel art, that simplicity becomes its superpower.",
    motivation:
      "I was curious whether YouTube's icon would survive the pixel process. It's so minimal already — just two shapes and two colors. But that minimalism made it one of the hardest icons to get right: with only 1024 pixels to work with, every misplaced pixel ruins the whole thing.",
    process:
      "The red needed to pop. I went with a slightly warm red to keep it energetic. The play triangle took multiple iterations — getting the centering perfect and ensuring the three sides read as a triangle rather than a blob at this scale was the main challenge. The rounded corners of the outer rectangle were done last.",
    beforeColor: "#FF0000",
    beforeTextColor: "#FFFFFF",
    beforeLabel: "YouTube App",
    beforeSymbol: "▶",
    accentColor: "#FF0000",
    imageKey: "youtube",
  },
];
