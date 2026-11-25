import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SASA EduAssess Uganda — AI-Powered Assessment Platform",
    template: "%s · SASA EduAssess",
  },
  description:
    "AI-powered exam question generation, question banks and examination papers aligned to Uganda's NCDC curriculum and UNEB assessment standards.",
  keywords: [
    "Uganda",
    "NCDC",
    "UNEB",
    "exam questions",
    "question bank",
    "assessment",
    "education",
  ],
  openGraph: {
    title: "SASA EduAssess Uganda",
    description:
      "Generate curriculum-aligned exam questions and assemble complete examination papers from O-Level to A-Level.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f2f4f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en" suppressHydrationWarning><body suppressHydrationWarning>{children}</body></html>;
}
