import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Anthony Zappala | Chemical Engineer & Process Designer",
  description:
    "Portfolio of Anthony Zappala, a chemical engineer specializing in sustainable process design, simulation, and computational modeling. Featuring projects in electrochemistry, process control, materials modeling, and reaction kinetics.",
  keywords:
    "chemical engineer, process simulation, Aspen Plus, process design, electrochemistry, Monte Carlo simulation, kinetics, MATLAB Simulink, sustainable engineering",
  authors: [{ name: "Anthony Zappala" }],
  creator: "Anthony Zappala",
  openGraph: {
    title: "Anthony Zappala | Chemical Engineer",
    description:
      "Sustainable chemical engineering projects in process design, electrochemistry, simulation, and computational modeling.",
    type: "website",
    images: [
      {
        url: "/electrochemical-reactor-magnesium.png",
        width: 1200,
        height: 630,
        alt: "Electrochemical reactor design for nutrient recovery from wastewater",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthony Zappala | Chemical Engineer",
    description:
      "Sustainable chemical engineering projects in process design, electrochemistry, simulation, and computational modeling.",
    images: ["/electrochemical-reactor-magnesium.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/placeholder-ahojw.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/placeholder-ahojw.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/placeholder-ahojw.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/placeholder-ahojw.png" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
