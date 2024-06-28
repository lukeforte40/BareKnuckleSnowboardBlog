import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog Landing Page.",
};

export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>
      {children}
    </section>
  }