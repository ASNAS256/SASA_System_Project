"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, GraduationCap, Home, Sparkles } from "lucide-react";

const items = [
  { href: "/", label: "Overview", icon: Home },
  { href: "/workspace", label: "Teacher Workspace", icon: GraduationCap },
  { href: "/curriculum", label: "Curriculum Manager", icon: BookOpen },
  { href: "/prompt-studio", label: "SASA AI", icon: Sparkles },
];

export default function AppNavigation() {
  const pathname = usePathname();
  return (
    <header className="sasa-app-header">
      <div className="sasa-app-header-inner">
        <Link href="/" className="sasa-app-brand" aria-label="SASA EduAssess overview">
          <span className="sasa-app-brand-mark">S</span>
          <span className="sasa-app-brand-copy"><strong>SASA</strong></span>
        </Link>
        <nav className="sasa-app-nav" aria-label="Primary navigation">
          {items.map(({ href, label, icon: Icon }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return <Link key={href} href={href} className={`sasa-app-nav-link${active ? " active" : ""}`} aria-current={active ? "page" : undefined}>
              <Icon size={16} strokeWidth={2.1} aria-hidden="true" /><span>{label}</span>
            </Link>;
          })}
        </nav>
        <span className="sasa-app-header-note">Curriculum-informed assessment</span>
      </div>
    </header>
  );
}
