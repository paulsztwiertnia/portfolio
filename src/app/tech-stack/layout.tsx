import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech Stack | Paul Sztwiertnia",
  description:
    "The languages, frameworks, databases, and infrastructure Paul Sztwiertnia uses to build accessible web apps, APIs, and production systems.",
};

export default function TechStackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
