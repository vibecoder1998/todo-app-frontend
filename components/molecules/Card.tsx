import Image from "next/image";
import Priority_Status from "../atoms/Priority";

export default function Card() {
  return (
    <section className="flex-row justtify-between">
      <div className="bg-red-500 h-2 w-2 rounded-2xl" />
        <div>
            <h3>Attend Nischal's Birthday Party</h3>
            <div className="flex justify-center">
                <p>Buy gifts on the way and pick up cake from the bakery</p>
                <Image
                    className="dark:invert"
                    src={"/next.svg"}
                    alt="Next.js logo"
                    width={50}
                    height={20}
                    priority
                />
            </div>

        </div>
        <Priority_Status/>
      <div/>
    </section>
  );
}
