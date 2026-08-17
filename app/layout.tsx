import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://emmanuelcc-ict.github.io/Year-9-Job-Skills/"),
  title: "Year 9 Job Skills",
  description: "A Year 9 enterprise skills app for turning everyday experiences into resume and interview language.",
  alternates: {
    canonical: "/",
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
