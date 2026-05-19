import type { Metadata } from "next";
import "./globals.css"
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
import { Github, GithubIcon, HugeiconsIcon } from "@hugeicons/core-free-icons";
import { Analytics } from '@arthurreira/analytics/client'
import { ThemeProvider } from "@/components/theme-provider";
import { buttonVariants } from "@arthurreira/ui";
export const metadata: Metadata = {
  title: "af-weather | Finnish & Brazilian Cities",
  description: "Weather for cities in Finland and Brazil"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", inter.variable)} suppressHydrationWarning>
      <body className={inter.variable}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          <main className="container mx-auto p-2">
            <nav className="w-full  ">
              <div className="container flex h-16 items-center space-x-4  sm:space-x-6">
                <Link
                  href="/"
                  className="text-sm font-medium transition-colors text-primary hover:scale-105 font-heading"
                >
                  Af Weather
                </Link>
                <div className="mx-auto">
                <Link
                  href="/about"
                  className={cn(
                    buttonVariants({ variant: "link" }),
                  )}
                >
                  About
                </Link>
                 
                </div>
                <Link
                  href="https://github.com/arthurreira/af-weather"
                  target="_blank"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </Link>

              </div>
              <div className=" text-center p-2.5 font-mono text-xs text-muted-foreground">
              (Press <kbd>d</kbd> to toggle dark mode)
            </div>

            </nav>
              <Analytics 
                apiKey={process.env.NEXT_PUBLIC_ANALYTICS_KEY!}
                apiUrl={process.env.NEXT_PUBLIC_ANALYTICS_URL!}
              />
            {children}


          </main>
        </ThemeProvider>
      </body>

    </html>
  );
}
