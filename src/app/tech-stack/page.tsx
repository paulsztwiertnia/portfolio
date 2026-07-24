"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Spotlight } from "@/components/ui/spotlight";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BrandButton } from "@/components/ui/brand-button";
import { BrandIcon } from "@/components/ui/brand-icon";
import {
  featuredTech,
  techStackSections,
  type TechItem,
} from "@/app/content/tech-stack";

const sectionClassName = "pt-20 md:pt-28 scroll-mt-[72px]";

function TechIcon({ item }: { item: TechItem }) {
  if (item.brandIcon) {
    return <BrandIcon name={item.brandIcon} />;
  }

  if (item.icon) {
    return (
      <Image
        src={item.icon}
        alt={item.title}
        width={40}
        height={40}
        className="h-10 w-10 object-contain"
      />
    );
  }

  return null;
}

export default function TechStackPage() {
  return (
    <main className="main pb-24 md:pb-32">
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden pt-28 text-center">
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-60"
          fill="#a33ef4"
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 max-w-3xl"
        >
          <p className="mb-3 text-lg font-light text-white/70 md:text-xl">
            Toolkit
          </p>
          <TextGenerateEffect
            as="h1"
            words="My tech stack."
            className="mb-4 text-3xl font-bold md:text-5xl"
            duration={0.25}
          />
          <p className="mx-auto max-w-2xl font-open-sans text-base font-light leading-relaxed text-neutral-300 md:text-lg">
            Languages, frameworks, databases, and infrastructure I use to ship
            accessible web apps, APIs, CMS platforms, and production systems —
            from government portals to product work like Servd.
          </p>
          <div className="mt-10 flex w-full flex-row items-center justify-center">
            <AnimatedTooltip items={featuredTech} />
          </div>
        </motion.div>
      </section>

      <nav
        aria-label="Tech stack sections"
        className="sticky top-20 z-40 mx-auto w-fit max-w-full overflow-x-auto rounded-full bg-neutral-950/80 px-4 py-2 backdrop-blur-[10px]"
      >
        <ul className="flex w-max flex-wrap items-center justify-center gap-x-1 gap-y-2 text-sm text-white/55">
          {techStackSections.map((section, index) => (
            <li key={section.id} className="flex items-center gap-1">
              {index > 0 ? (
                <span className="px-2 text-white/20" aria-hidden>
                  /
                </span>
              ) : null}
              <a
                href={`#${section.id}`}
                className="transition hover:text-white"
              >
                {section.eyebrow}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {techStackSections.map((section) => (
        <motion.section
          key={section.id}
          id={section.id}
          className={sectionClassName}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="text-white">
            <h2 className="text-lg font-light text-white/70 md:text-xl">
              {section.eyebrow}
            </h2>
            <p className="mb-2 text-2xl font-light md:text-3xl">
              {section.title}
            </p>
            <p className="max-w-2xl font-open-sans text-sm font-light leading-relaxed text-neutral-400 md:text-base">
              {section.description}
            </p>
          </div>
          <HoverEffect
            layoutId={`hover-${section.id}`}
            items={section.items.map((item) => ({
              title: item.title,
              description: item.description,
              link: item.link,
              icon:
                item.brandIcon || item.icon ? (
                  <TechIcon item={item} />
                ) : undefined,
            }))}
          />
        </motion.section>
      ))}

      <section className={`${sectionClassName} text-center text-white`}>
        <h2 className="mb-3 text-lg font-light text-white/70 md:text-xl">
          Want to build something?
        </h2>
        <p className="mb-8 text-2xl font-light md:text-3xl">Let&apos;s talk.</p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <BrandButton href="/" showIcon={false}>
            Back to home
          </BrandButton>
          <BrandButton
            href="https://calendly.com/consulation-novellsoftwaresolutions/software-solutions-consultation"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Me
          </BrandButton>
        </div>
      </section>
    </main>
  );
}
