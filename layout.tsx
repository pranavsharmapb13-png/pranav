import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pranav Sharma — Digital Growth & Performance",
  description:
    "Pranav Sharma builds considered digital growth systems across paid media, search, analytics and brand.",
  metadataBase: new URL("https://pranavsharma.me"),
  openGraph: {
    title: "Pranav Sharma — Digital Growth & Performance",
    description:
      "Strategy, performance and brand storytelling for ambitious businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
