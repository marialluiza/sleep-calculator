import AboutCard from "./AboutCard";

type ContentAboutCycle = {
  number: string;
  title: string;
  content: string;
};

type AboutCardsProps = {
  content: ContentAboutCycle[];
};

const AboutCardsGrid = ({ content }: AboutCardsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {content.map((information, index) => {
        const isLeftColunm = index % 2 === 0;
        const isFirstRow = index < 2;

        return (
          <AboutCard
            key={index}
            information={information}
            className={[
              isLeftColunm && "md:border-r",
              isFirstRow && "md:border-b",
            ]
              .filter(Boolean)
              .join(" ")}
          />
        );
      })}
    </div>
  );
};

export default AboutCardsGrid;
