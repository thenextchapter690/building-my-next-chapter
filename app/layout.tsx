import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  src: "../public/fonts/inter-latin.woff2",
  variable: "--font-body",
  weight: "100 900",
  display: "swap",
});

const serif = localFont({
  src: "../public/fonts/dm-serif-display-latin.woff2",
  weight: "400",
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.URL ?? "http://localhost:3000"),
  title: "Building My Next Chapter | Samiya",
  description:
    "Samiya is a student, builder, and founder from India creating AI products, documenting the journey, and turning ideas into real projects.",
  openGraph: {
    title: "Building My Next Chapter | Samiya",
    description:
      "Follow Samiya's journey building AI products and explore Labello, Petal Planner, Tech Nest, and Petal Writes.",
    type: "website",
    images: [
      {
        url: "/project/labello.png",
        alt: "Labello AI learning platform preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Building My Next Chapter | Samiya",
    description:
      "Follow Samiya's journey building AI products and exploring meaningful ideas.",
    images: ["/project/labello.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${serif.variable}`}>
        {children}
      </body>
    </html>
  );
}
