import Divider from "@/components/ui/Divider";
import CycleFact from "./CycleFact";

const SleepCyclesFacts = () => {
  const cycleInformations = [
    {
      value: "90",
      unit: "min",
      label: "por ciclo",
    },
    {
      value: "4-6",
      unit: "ciclos",
      label: "por noite",
    },
    {
      value: "6-9",
      unit: "horas",
      label: "total ideal",
    },
    {
      value: "10",
      unit: "min",
      label: "para adormecer",
    },
  ];

  return (
    <section className="md:mt-14">
      <div className="font-mono">
        <Divider />
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 md:divide-x md:divide-border">
          {cycleInformations.map((information, key) => (
            <CycleFact key={key} information={information} />
          ))}
        </div>

        <Divider />
      </div>
    </section>
  );
};

export default SleepCyclesFacts;
