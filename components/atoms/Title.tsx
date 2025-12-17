import Image from "next/image";

export default function Title() {
  return (
    <div className="flex items-center gap-4">
      <Image
        className="dark:invert"
        src={"/next.svg"}
        alt="Next.js logo"
        width={50}
        height={20}
        priority
      />
      <h1 className="text-xl font-bold text-black dark:text-white">
        Todo App
      </h1>
    </div>
  );
}
