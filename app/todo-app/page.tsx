"use client";

import Card from "@/components/molecules/Card";
import Header from "@/components/molecules/Header";

export default function TodoList() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Header />
        <Card />
      </main>
    </div>
  );
}
