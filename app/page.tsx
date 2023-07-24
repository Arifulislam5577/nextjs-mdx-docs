"use client";
import Link from "next/link";
import { sidebar } from "@/data/data";

export default function Home() {
  return (
    <section>
      <div className="max-w-xs bg-slate-50 h-full fixed">
        <ul>
          {sidebar.map((item) => (
            <li key={item.id}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
