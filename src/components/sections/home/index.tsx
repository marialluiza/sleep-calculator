import SleepCalculator from "@/features/sleep-calculator";
import IntroTitle from "./IntroTitle";
import SleepCyclesFacts from "./SleepCyclesFacts";
import AboutCycles from "./AboutCycles";

const HomeComponent = () => {
  return (
    <main className="px-6 md:px-30 md:py-10">
      <section className="w-full grid grid-cols-1 md:grid-cols-2 py-12 justify-between gap-10 md:gap-20">
        <IntroTitle />
        <SleepCalculator />
      </section>

      <SleepCyclesFacts />

      <AboutCycles />
    </main>
  );
};

export default HomeComponent;
