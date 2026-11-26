import type { Metadata } from "next";
import "./globals.css";
import AppNavigation from "./components/AppNavigation";

export const metadata: Metadata = {
  title: "SASA | Assessment for Uganda",
  description:
    "Curriculum-informed question generation, teacher review, classroom activities and examination papers for Uganda.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body suppressHydrationWarning>
        <AppNavigation />
        {children}
      </body>
    </html>
  );
}
