import type { Metadata } from "next";
import "./globals.css";
import { host_grotesk } from "@/components/fonts";
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: "Ascendence",
  description: "Empowering you to ascend beyond financial limits: Take control of your finances, achieve your goals, and experience limitless growth with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${host_grotesk.className} w-screen overflow-x-hidden bg-white dark:bg-black text-black dark:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}