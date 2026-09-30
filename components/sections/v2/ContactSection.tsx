import { site } from "@/lib/content";
import { Reveal } from "@/components/motion/Reveal";
import { CTABanner } from "@/components/decor/CTABanner";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 lg:py-32 scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-[var(--container-wide)] px-6 md:px-10 lg:px-16">
        <Reveal>
          <CTABanner
            eyebrow="// Get in touch"
            headline={
              <>
                Let&apos;s build something <span className="text-violet">quietly ambitious</span>.
              </>
            }
            body="I take on a small number of focused projects each year — usually product work with a strong editorial or design-led brief. The fastest way to start is an email."
            primary={{ label: `Email — ${site.email}`, href: `mailto:${site.email}` }}
            secondary={
              site.twitter
                ? { label: "On X", href: site.twitter }
                : undefined
            }
          />
        </Reveal>
      </div>
    </section>
  );
}