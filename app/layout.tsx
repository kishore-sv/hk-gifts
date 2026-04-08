import { Geist, Geist_Mono, Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"


import "./globals.css"
import { cn } from "@/lib/utils";
import Navbar from "@/components/nav-bar";
import Banner from "@/components/banner";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "HK Gifts",
  description: "HK Gifts",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable, "selection:bg-primary selection:text-primary-foreground")}
    >
      <body>
        <ThemeProvider>
          <Banner />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
