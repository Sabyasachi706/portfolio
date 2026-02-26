import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sabyasachi Satapathy | Data Analyst Portfolio",
  description:
    "Data Analyst skilled in SQL, Python, Machine Learning, Excel, and Business Intelligence. 85.73% ML model accuracy. Portfolio showcasing analytics and data-driven projects.",
  keywords: [
    "Data Analyst",
    "SQL",
    "Python",
    "Machine Learning",
    "Power BI",
    "NIT Durgapur",
    "Sabyasachi Satapathy",
  ],
  authors: [{ name: "Sabyasachi Satapathy" }],
  openGraph: {
    title: "Sabyasachi Satapathy | Data Analyst Portfolio",
    description:
      "Data Analyst skilled in SQL, Python, Machine Learning, Excel, and Business Intelligence.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sabyasachi Satapathy | Data Analyst Portfolio",
    description:
      "Data Analyst skilled in SQL, Python, Machine Learning, Excel, and Business Intelligence.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sabyasachi Satapathy",
  jobTitle: "Aspiring Data Analyst",
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "National Institute of Technology Durgapur",
  },
  knowsAbout: ["SQL", "Python", "Machine Learning", "Data Analytics", "Power BI"],
  email: "sssatapathy256@gmail.com",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
