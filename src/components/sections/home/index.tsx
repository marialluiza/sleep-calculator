import SleepCalculator from "@/features/sleep-calculator";
import IntroTitle from "./IntroTitle";
import SleepCyclesFacts from "./SleepCyclesFacts";
import AboutCycles from "./AboutCycles";

const HomeComponent = () => {
  return (
    <main className="px-30 py-10 ">
      <section className="w-full flex py-12 justify-between gap-20">
        <div className="w-1/2">
          <IntroTitle />
        </div>
        <div className="w-2/5">
          <SleepCalculator />
        </div>
      </section>

      <SleepCyclesFacts />

      <AboutCycles />
    </main>
  );
};

export default HomeComponent;
