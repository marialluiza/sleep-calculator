import { useState } from "react";
import AboutButton from "./AboutButton";
import AboutCardsGrid from "./AboutCardsGrid";

const AboutCycles = () => {
  const [chevronOpen, setChevronOpen] = useState<boolean>(false);

  const content = [
    {
      number: "01",
      title: "O que é um ciclo de sono?",
      content:
        "Cada ciclo dura aproximadamente 90 minutos e percorre quatro estágios: sono leve (N1 e N2), sono profundo (N3) e sono REM. É durante o REM que consolidamos memórias e processamos emoções.",
    },
    {
      number: "02",
      title: "Quantos ciclos você precisa?",
      content:
        "Adultos saudáveis precisam de 4 a 6 ciclos completos por noite — o equivalente a 6 a 9 horas de sono. Menos de 4 ciclos compromete a recuperação física e cognitiva.",
    },
    {
      number: "03",
      title: "Porque acordar no ciclo certo?",
      content:
        "Despertar no meio do sono profundo (N3) causa inércia do sono — aquela sensação de torpor e desorientação. Acordar ao fim de um ciclo, quando o sono é mais leve, deixa você alerta e disposto.",
    },
    {
      number: "04",
      title: "O tempo para adormecer",
      content:
        "A maioria dos adultos leva de 10 a 20 minutos para adormecer. Nossas janelas já incorporam 15 minutos de latência para que os cálculos reflitam o tempo real de sono, não apenas o tempo na cama.",
    },
  ];

  const handleButton = () => {
    setChevronOpen((prev) => prev === false && true);
  };

  return (
    <section>
      <div className="w-full py-12">
        <AboutButton chevronOpen={chevronOpen} onClick={handleButton} />

        {chevronOpen && <AboutCardsGrid content={content} />}
      </div>
    </section>
  );
};

export default AboutCycles;
