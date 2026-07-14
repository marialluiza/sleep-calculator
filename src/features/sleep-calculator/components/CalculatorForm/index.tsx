import Button from "@/components/ui/Button";

type CalculatorFormType = {
  text: string;
  time: string;
  onTimeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  calculateResults: () => void;
};

const CalculatorForm = ({
  text,
  time,
  onTimeChange,
  calculateResults,
}: CalculatorFormType) => {
  return (
    <section className="flex flex-col gap-3">
      <p className="text-muted-foreground text-sm">{text}</p>
      <input
        type="time"
        value={time}
        onChange={onTimeChange}
        className="w-full bg-input-background px-3 py-3 text-2xl border-[1.5px] border-border focus:outline-none focus:border-primary transition-colors"
        style={{ colorScheme: "dark" }}
      />

      <Button
        text="CALCULAR JANELAS"
        className="py-3 mt-8 bg-primary text-primary-foreground hover:brightness-95"
        onClick={() => calculateResults()}
      />
    </section>
  );
};
export default CalculatorForm;
