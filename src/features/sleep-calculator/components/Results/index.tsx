import { CalculateCyclesResult } from "../../types";
import ResultCard from "./ResultCard";

type ResultsProps = {
  results: CalculateCyclesResult[];
  resultTitle: string;
};

const Results = ({ results, resultTitle }: ResultsProps) => {
  return (
    <section className="flex flex-col gap-3">
      {results.length > 0 && (
        <h2 className="text-muted-foreground text-sm">{resultTitle}</h2>
      )}

      {results.map((result) => (
        <ResultCard key={result.id} result={result} />
      ))}
    </section>
  );
};

export default Results;
