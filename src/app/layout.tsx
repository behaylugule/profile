import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { metadata } from "./metadata";
import ThemeScript from "@/components/ThemeScript";
import Providers from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <ThemeScript />
          <Layout>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
