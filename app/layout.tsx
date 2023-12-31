import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { sidebar } from "@/data/data";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <main>
          <Navbar />

          <div className="w-[15rem] bg-slate-50 h-full fixed">
            <ul className="flex items-center justify-center flex-col h-full gap-5 ">
              {sidebar.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="ml-[15rem]">{children}</div>
        </main>
      </body>
    </html>
  );
}
