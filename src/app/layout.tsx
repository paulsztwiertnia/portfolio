import type { Metadata } from "next";
import { Michroma, Open_Sans } from "next/font/google";
import "./globals.css";

const michroma = Michroma({
  variable: "--font-michroma",
  subsets: ["latin"],
  weight: "400",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Paul Sztwiertnia | Software Engineer",
  description: "Toronto-based software engineer and entrepreneur",
  icons: {
    icon: "/icons/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${michroma.variable} ${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
