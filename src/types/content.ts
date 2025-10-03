export type LinkOut = { href: string; label: string };

export type TextContent = {
  type: "text";
  title: string;
  body: string;
  img?: string;
  audioSrc?: string; // optional MP3 path
  link?: LinkOut;
};

export type ImageContent = {
  type: "image";
  title: string;
  src: string;
  alt?: string;
  caption?: string;
};

export type VideoContent = {
  type: "video";
  title: string;
  embedUrl: string; // https://www.youtube.com/embed/...
};

export type AudioContent = {
  type: "audio";
  title: string;
  src: string; // e.g. /media/Contravision%20Christmas%20Save%20the%20Date.mp3
};

export type MenuItem =
  | string // optional: raw HTML string
  | {
      title: string; // dish name (will be bold)
      info?: string; // description (regular weight)
      html?: string; // alternatively, supply a pre-marked-up HTML string
    };

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export type MenuContent = {
  type: "menu";
  title: string;
  body: string;
  sections: MenuSection[];
  audioSrc?: string; // optional MP3 path
};

export type DayContent =
  | TextContent
  | ImageContent
  | VideoContent
  | AudioContent
  | MenuContent;
