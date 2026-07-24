import type { SVGProps } from "react";
import {
  siAuth0,
  siGin,
  siHostinger,
  siNextdotjs,
  siPayloadcms,
  siPosthog,
  siReactquery,
} from "simple-icons";
import {
  AmazonwebservicesOriginalWordmark,
  DockerOriginal,
  FastapiOriginal,
  GithubactionsOriginal,
  GoOriginal,
  GooglecloudOriginal,
  JestPlain,
  MapboxOriginal,
  MicrosoftsqlserverOriginal,
  PostgresqlOriginal,
  PostmanOriginal,
  SqliteOriginal,
  ZustandOriginal,
} from "devicons-react";
import {
  CreditCard,
  Database,
  FileCode2,
  MessageSquareText,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

type SimpleIconData = {
  title: string;
  hex: string;
  path: string;
};

function brandFill(hex: string) {
  return `#${hex === "000000" ? "ffffff" : hex}`;
}

function SimpleBrandIcon({
  icon,
  className,
}: {
  icon: SimpleIconData;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={cn("h-10 w-10", className)}
      fill={brandFill(icon.hex)}
    >
      <path d={icon.path} />
    </svg>
  );
}

/** Data-URI for places that still need an <img src> (e.g. animated tooltip). */
export function simpleIconSrc(icon: SimpleIconData) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="${brandFill(icon.hex)}"><path d="${icon.path}"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export const nextjsIconSrc = simpleIconSrc(siNextdotjs);

const lucideClass = "h-10 w-10 text-neutral-300";

/** Registry of tech logos from devicons-react + simple-icons (no local downloads). */
export const brandIconMap = {
  nextjs: () => <SimpleBrandIcon icon={siNextdotjs} />,
  go: (props: SVGProps<SVGElement>) => (
    <GoOriginal size="40" aria-hidden {...props} />
  ),
  sql: () => <Database className={lucideClass} aria-hidden />,
  zustand: (props: SVGProps<SVGElement>) => (
    <ZustandOriginal size="40" aria-hidden {...props} />
  ),
  tanstack: () => <SimpleBrandIcon icon={siReactquery} />,
  mapbox: (props: SVGProps<SVGElement>) => (
    <MapboxOriginal size="40" aria-hidden {...props} />
  ),
  twig: () => <FileCode2 className={lucideClass} aria-hidden />,
  gin: () => <SimpleBrandIcon icon={siGin} />,
  fastapi: (props: SVGProps<SVGElement>) => (
    <FastapiOriginal size="40" aria-hidden {...props} />
  ),
  payloadcms: () => <SimpleBrandIcon icon={siPayloadcms} />,
  postgresql: (props: SVGProps<SVGElement>) => (
    <PostgresqlOriginal size="40" aria-hidden {...props} />
  ),
  mssql: (props: SVGProps<SVGElement>) => (
    <MicrosoftsqlserverOriginal size="40" aria-hidden {...props} />
  ),
  sqlite: (props: SVGProps<SVGElement>) => (
    <SqliteOriginal size="40" aria-hidden {...props} />
  ),
  docker: (props: SVGProps<SVGElement>) => (
    <DockerOriginal size="40" aria-hidden {...props} />
  ),
  githubactions: (props: SVGProps<SVGElement>) => (
    <GithubactionsOriginal size="40" aria-hidden {...props} />
  ),
  aws: (props: SVGProps<SVGElement>) => (
    <AmazonwebservicesOriginalWordmark size="40" aria-hidden {...props} />
  ),
  gcp: (props: SVGProps<SVGElement>) => (
    <GooglecloudOriginal size="40" aria-hidden {...props} />
  ),
  hostinger: () => <SimpleBrandIcon icon={siHostinger} />,
  auth0: () => <SimpleBrandIcon icon={siAuth0} />,
  jest: (props: SVGProps<SVGElement>) => (
    <JestPlain size="40" aria-hidden {...props} />
  ),
  postman: (props: SVGProps<SVGElement>) => (
    <PostmanOriginal size="40" aria-hidden {...props} />
  ),
  openai: () => <Sparkles className={lucideClass} aria-hidden />,
  telnyx: () => <MessageSquareText className={lucideClass} aria-hidden />,
  autumn: () => <CreditCard className={lucideClass} aria-hidden />,
  posthog: () => <SimpleBrandIcon icon={siPosthog} />,
} as const;

export type BrandIconKey = keyof typeof brandIconMap;

export function BrandIcon({
  name,
  className,
}: {
  name: BrandIconKey;
  className?: string;
}) {
  const Icon = brandIconMap[name];
  if (!Icon) return null;

  return (
    <span
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center [&>svg]:h-10 [&>svg]:w-10",
        className,
      )}
      aria-hidden
    >
      <Icon />
    </span>
  );
}
