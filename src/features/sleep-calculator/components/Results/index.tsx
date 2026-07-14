import { CalculateCyclesResult } from "../../types";
import ResultCard from "./ResultCard";

type ResultsProps = {
  results: CalculateCyclesResult[];
  resultTitle: string;
};

const Results = ({ results, resultTitle }: ResultsProps) => {
  const showTexts = results.length > 0;

  return (
    <section className="flex flex-col gap-3">
      {showTexts && (
        <h2 className="text-muted-foreground text-sm">{resultTitle}</h2>
      )}

      {results.map((result) => (
        <ResultCard key={result.id} result={result} />
      ))}

      {showTexts && (
        <p className="text-muted-foreground text-xs">
          * Inclui 10 min para adormecer
        </p>
      )}
    </section>
  );
};

export default Results;
