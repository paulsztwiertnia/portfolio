"use client";

import Image from "next/image";
import { PinContainer } from "@/components/ui/3d-pin";

type ProjectPinProps = {
  title: string;
  description: string;
  src: string;
  url: string;
  color: string;
};

function pinLabel(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function hasImage(src: string) {
  return Boolean(src) && !src.endsWith("/");
}

export default function ProjectPin({
  title,
  description,
  src,
  url,
  color,
}: ProjectPinProps) {
  return (
    <div className="min-h-[28rem] w-full flex items-center justify-center py-4">
      <PinContainer title={pinLabel(url)} href={url}>
        <div className="flex basis-full flex-col tracking-tight text-slate-100/50 w-[18rem] min-h-[22rem] sm:w-[20rem]">
          <h3 className="pb-2 m-0 font-bold text-base text-slate-100">
            {title}
          </h3>
          <p className="m-0 p-0 text-sm font-normal text-slate-400 font-open-sans">
            {description}
          </p>
          <div className="relative w-full rounded-lg mt-4 overflow-hidden h-40 shrink-0">
            {hasImage(src) ? (
              <Image
                src={src}
                alt={title}
                fill
                sizes="320px"
                className="object-cover object-top"
              />
            ) : (
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${color} 0%, #111111 100%)`,
                }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
