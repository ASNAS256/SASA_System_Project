import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "SASA | AI Teaching & Assessment Studio",
  description: "AI-assisted teaching, curriculum intelligence and assessment for Uganda",
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en" suppressHydrationWarning><body suppressHydrationWarning>{children}</body></html>;
}
