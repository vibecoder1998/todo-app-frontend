import Image from "next/image";

export default function Card() {
  return (
    <section className="flex-row justtify-between">
      <div className="bg-red-500 h-2 w-2 rounded-2xl" />
      <div>
        <h3>Attend Nischal's Birthday Party</h3>
      </div>
      <div className="bg-red-500 h-2 w-2 rounded-2xl" />
    </section>
  );
}
