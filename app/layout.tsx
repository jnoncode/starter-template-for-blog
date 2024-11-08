import type { Metadata } from "next";
import "./globals.css";

// components
import Navigation from "../src/components/global/Navigation";
import Footer from "../src/components/global/Footer";

// your blog title
import { blogTitle } from "@/custom/navigation";

export const metadata: Metadata = {
  title: blogTitle,
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark">
      <body>
        <Navigation />
        <div className="pt-[70px] dark:bg-zinc-900 dark:text-zinc-100">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
