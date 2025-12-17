
import Button from "../atoms/Button";
import Date from "../atoms/Date";
import Title from "../atoms/Title";

export default function Header() {
  return (
    <section className="flex-row mb-8 flex w-full items-center justify-between">
      <div>
        <Title />
        <Date />
      </div>
      <Button />
    </section>
  );
}
