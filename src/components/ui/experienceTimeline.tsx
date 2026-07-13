"use client";

import { Briefcase, GraduationCap } from "lucide-react";
import type { ReactNode } from "react";
import { Timeline } from "./timeline";

function JobHighlights({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 hidden sm:flex flex-col gap-3 list-none p-0 m-0 font-open-sans">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm text-neutral-400 leading-relaxed">
          <span
            aria-hidden
            className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60 shrink-0"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function TimelineCard({
  company,
  role,
  icon,
  highlights,
  note,
}: {
  company: string;
  role: string;
  icon: ReactNode;
  highlights?: string[];
  note?: string;
}) {
  return (
    <div className="transition-transform duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-3 mb-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-black text-white">
          {icon}
        </div>
        <div>
          <p className="font-bold text-white font-open-sans">{company}</p>
          <p className="text-neutral-400 font-light font-open-sans">{role}</p>
        </div>
      </div>
      {highlights ? <JobHighlights items={highlights} /> : null}
      {note ? (
        <p className="mt-4 hidden sm:block text-sm text-neutral-400 font-light font-open-sans leading-relaxed">
          {note}
        </p>
      ) : null}
    </div>
  );
}

const experienceData = [
  {
    title: "2024 – Present",
    content: (
      <TimelineCard
        company="Bold Internet Solutions"
        role="Full Stack Software Engineer"
        icon={<Briefcase className="h-4 w-4" />}
        highlights={[
          "Built accessible web apps compliant with Ontario AODA and WCAG 2.1 Level AA standards.",
          "Developed a Node.js/Express REST API and bilingual Next.js app for Ontario heritage data — with Mapbox clustering, multilingual search, and Craft CMS GraphQL integration.",
          "Built an ETL microservice syncing 1,600+ heritage sites via zero-downtime table-swap with versioned backups.",
          "Architected Craft CMS powering 4 bilingual sites and gov portals serving 15,000+ users, including a Passport funding planner with 92% positive feedback.",
        ]}
      />
    ),
  },
  {
    title: "2023 – 2024",
    content: (
      <TimelineCard
        company="MYC Graphics"
        role="Full Stack Software Engineer"
        icon={<Briefcase className="h-4 w-4" />}
        highlights={[
          "Built performant AWS web apps with Next.js, React, and TypeScript for enterprise clients including Home Depot, Flynn Group, Circle K, and Ellis Don — with Auth0 auth and MySQL-backed project tracking.",
          "Developed a React app for VistaPrint to program NFC business cards, optimizing the production pipeline for Android/iOS tap-to-share contact cards.",
        ]}
      />
    ),
  },
  {
    title: "2021 – 2023",
    content: (
      <TimelineCard
        company="Novell Software Solutions"
        role="Full Stack Software Engineer"
        icon={<Briefcase className="h-4 w-4" />}
        highlights={[
          "Delivered responsive Next.js and React web applications that improved online visibility, engagement, and revenue for client projects.",
          "Built and deployed RESTful backend services with Python/FastAPI and Go/Gin on AWS, configured behind Nginx reverse proxy.",
        ]}
      />
    ),
  },
  {
    title: "2018 – 2023",
    content: (
      <TimelineCard
        company="Ryerson University"
        role="BSc. Computer Science"
        icon={<GraduationCap className="h-4 w-4" />}
        note="With a focus on software development, operating systems, networking and databases."
      />
    ),
  },
];

export default function ExperienceTimeline() {
  return (
    <Timeline
      data={experienceData}
      title="Experience"
      description="My Journey."
    />
  );
}
