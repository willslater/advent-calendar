export type LinkOut = { href: string; label: string };

export type TextContent = {
  type: "text";
  title: string;
  body: string;
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
  embedUrl: string;
};

export type DayContent = TextContent | ImageContent | VideoContent;
