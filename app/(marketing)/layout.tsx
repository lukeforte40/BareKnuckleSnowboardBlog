import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Bare Knuckle Snowboarding",
  description: "A blog about snowboarding information, reviews, and tutorials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>Bare Knuckle Snowboarding</h1>
        {children}
      </body>
    </html>
  );
}
