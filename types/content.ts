// Single source of truth for portfolio content shapes.
// JSON files in /data are validated against these at build time via lib/content.ts.

export type SocialPlatform =
    | "github"
    | "x"
    | "linkedin"
    | "readcv"
    | "email"
    | "website"
    | "are.na"
    | "spotify";

export interface Social {
    label: string;
    href: string;
    icon: SocialPlatform;
}

export interface NavItem {
    label: string;
    href: string;
}

export interface SiteConfig {
    name: string;
    handle: string;
    twitter?: string;
    github?: string;
    tagline: string;
    role: string;
    location?: string;
    email: string;
    bio: string;
    bio_footer: string;
    avatar?: string;
    ogImage?: string;
    socials: Social[];
    nav: NavItem[];
    meta: {
        titleTemplate: string;
        description: string;
        themeColor: string;
    };
}

export type ProjectLinkKind = "live" | "github" | "writeup" | "video" | "docs" | "thread";

export interface ProjectLink {
    kind: ProjectLinkKind;
    href: string;
    label?: string;
}

export type ProjectAspect = "16/9" | "4/3" | "3/2" | "1/1" | "21/9";

export interface ProjectMedia {
    src: string;
    alt: string;
    width: number;
    height: number;
    aspect: ProjectAspect;
}

export type ProjectStatus = "shipped" | "in-progress" | "archived";

export interface Project {
    slug: string;
    title: string;
    year: string;
    summary: string;
    description: string;
    role?: string;
    stack: string[];
    links: ProjectLink[];
    cover: ProjectMedia;
    gallery?: ProjectMedia[];
    featured?: boolean;
    status?: ProjectStatus;
    /** Opt-in iframe preview URL for the hover overlay. Leave unset for image fallback. */
    previewUrl?: string;
}

export interface ProjectsFile {
    projects: Project[];
}

export type ExperienceKind = "work" | "internship" | "freelance" | "research" | "teaching";

export interface ExperienceEntry {
    company: string;
    role: string;
    url?: string;
    start: string; // ISO "YYYY-MM"
    end: string | "present";
    location?: string;
    summary: string;
    highlights?: string[];
    stack?: string[];
    kind: ExperienceKind;
}

export interface ExperienceFile {
    experience: ExperienceEntry[];
}

export interface NowBlock {
    title: string;
    body: string;
    items?: string[];
}

export interface NowFile {
    updated: string; // ISO datetime
    window?: string;
    headline: string;
    blocks: NowBlock[];
    links?: { label: string; href: string }[];
}

export interface SkillCategory {
    category: string;
    items: string[];
}

export interface SkillsFile {
    skills: SkillCategory[];
}
