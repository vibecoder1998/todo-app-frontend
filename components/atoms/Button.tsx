import Image from "next/image";

export default function Button() {
  return (
    <button className="flex gap-2 bg-red-400" onClick={() => {}}>
      <Image
        src={"/plus-large-svgrepo-com.svg"}
        className="text-red-500"
        alt="Plus icon"
        width={20}
        height={20}
        priority
      />
      <p className="font-bold">Add task</p>
    </button>
  );
}
