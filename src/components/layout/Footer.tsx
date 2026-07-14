import Divider from "../ui/Divider";

const FooterComponent = () => {
  return (
    <footer className="w-full ">
      <Divider />
      <div className="flex justify-between px-6 py-4 md:px-30 md:py-6 text-muted-foreground text-xs font-mono tracking-wider">
        <h3>Ciclos do Sono - Calculadora</h3>
        <p>90 / ciclo</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
