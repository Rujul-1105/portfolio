import { z } from "zod";
import siteJson from "@/data/site.json";
import projectsJson from "@/data/projects.json";
import experienceJson from "@/data/experience.json";
import nowJson from "@/data/now.json";
import skillsJson from "@/data/skills.json";
import type {
    SiteConfig,
    ProjectsFile,
    ExperienceFile,
    NowFile,
    SkillsFile,
} from "@/types/content";

// --------------------------------------------------------------------------
// Zod schemas — fail the build on any drift from the interfaces.
// --------------------------------------------------------------------------

const socialPlatformSchema = z.enum([
    "github",
    "x",
    "linkedin",
    "readcv",
    "email",
    "website",
    "are.na",
    "spotify",
]);

const siteSchema = z.object({
    name: z.string().min(1),
    handle: z.string().min(1),
    twitter: z.string().url().optional(),
    github: z.string().url().optional(),
    tagline: z.string().min(1),
    role: z.string().min(1),
    location: z.string().optional(),
    email: z.string().email(),
    bio: z.string().min(1),
    bio_footer: z.string().min(1),
    avatar: z.string().optional(),
    ogImage: z.string().optional(),
    socials: z
        .array(
            z.object({
                label: z.string().min(1),
                // Allow both absolute URLs and in-site relative paths (e.g. /cv.pdf)
                href: z.string().min(1),
                icon: socialPlatformSchema,
            })
        )
        .min(1),
    nav: z.array(z.object({ label: z.string().min(1), href: z.string().min(1) })).min(1),
    meta: z.object({
        titleTemplate: z.string().min(1),
        description: z.string().min(1),
        themeColor: z.string().min(1),
    }),
}) satisfies z.ZodType<SiteConfig>;

const projectSchema = z.object({
    slug: z.string().min(1),
    title: z.string().min(1),
    year: z.string().min(1),
    summary: z.string().min(1),
    description: z.string().min(1),
    role: z.string().optional(),
    stack: z.array(z.string()).min(1),
    links: z
        .array(
            z.object({
                kind: z.enum(["live", "github", "writeup", "video", "docs", "thread"]),
                href: z.string().url(),
                label: z.string().optional(),
            })
        )
        .min(1),
    cover: z.object({
        src: z.string().min(1),
        alt: z.string().min(1),
        width: z.number().positive(),
        height: z.number().positive(),
        aspect: z.enum(["16/9", "4/3", "3/2", "1/1", "21/9"]),
    }),
    gallery: z
        .array(
            z.object({
                src: z.string(),
                alt: z.string(),
                width: z.number(),
                height: z.number(),
                aspect: z.enum(["16/9", "4/3", "3/2", "1/1", "21/9"]),
            })
        )
        .optional(),
    featured: z.boolean().optional(),
    status: z.enum(["shipped", "in-progress", "archived"]).optional(),
    previewUrl: z.string().url().optional(),
});

const projectsSchema = z.object({
    projects: z.array(projectSchema).min(1),
}) satisfies z.ZodType<ProjectsFile>;

const experienceSchema = z.object({
    experience: z
        .array(
            z.object({
                company: z.string().min(1),
                role: z.string().min(1),
                url: z.string().url().optional(),
                start: z.string().min(1),
                end: z.union([z.string(), z.literal("present")]),
                location: z.string().optional(),
                summary: z.string().min(1),
                highlights: z.array(z.string()).optional(),
                stack: z.array(z.string()).optional(),
                kind: z.enum(["work", "internship", "freelance", "research", "teaching"]),
            })
        )
        .min(1),
}) satisfies z.ZodType<ExperienceFile>;

const nowSchema = z.object({
    updated: z.string().min(1),
    window: z.string().optional(),
    headline: z.string().min(1),
    blocks: z
        .array(
            z.object({
                title: z.string().min(1),
                body: z.string().min(1),
                items: z.array(z.string()).optional(),
            })
        )
        .min(1),
    links: z.array(z.object({ label: z.string(), href: z.string() })).optional(),
}) satisfies z.ZodType<NowFile>;

const skillsSchema = z.object({
    skills: z
        .array(
            z.object({
                category: z.string().min(1),
                items: z.array(z.string().min(1)).min(1),
            })
        )
        .min(1),
}) satisfies z.ZodType<SkillsFile>;

// --------------------------------------------------------------------------
// Validated exports — validation runs at module load.
// --------------------------------------------------------------------------

export const site: SiteConfig = siteSchema.parse(siteJson);
export const projects: ProjectsFile = projectsSchema.parse(projectsJson);
export const experience: ExperienceFile = experienceSchema.parse(experienceJson);
export const now: NowFile = nowSchema.parse(nowJson);
export const skills: SkillsFile = skillsSchema.parse(skillsJson);

// Sorted helper — newest first.
export const experienceSorted = [...experience.experience].sort((a, b) =>
    b.start.localeCompare(a.start)
);

export const projectsSorted = [...projects.projects].sort((a, b) => b.year.localeCompare(a.year));
