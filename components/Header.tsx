import Image from "next/image";

interface HeaderProps {
  image: string;
}

export default function Header({ image }: HeaderProps) {
  return (
    <Image
      className="dark:invert"
      src={image}
      alt="Next.js logo"
      width={100}
      height={20}
      priority
    />
  );
}
