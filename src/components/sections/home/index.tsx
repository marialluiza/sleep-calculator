import SleepCalculator from "@/features/sleep-calculator";
import IntroTitle from "./IntroTitle";

const HomeComponent = () => {
  return (
    <main className="p-6 w-full flex">
      <section className="w-1/2">
        <IntroTitle />
      </section>
      <section className="w-1/2">
        <SleepCalculator />
      </section>
    </main>
  );
};

export default HomeComponent;
