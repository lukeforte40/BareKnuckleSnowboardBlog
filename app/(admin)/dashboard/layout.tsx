import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard Landing Page.",
};

export function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>
      {children}
    </section>
  }