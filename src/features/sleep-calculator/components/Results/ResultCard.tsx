import { CalculateCyclesResult } from "../../types";

type ResultCardProps = {
  result: CalculateCyclesResult;
};

const ResultCard = ({ result }: ResultCardProps) => {
  return (
    <div
      key={result.id}
      className="flex items-center border-[1.5px] border-border p-3 hover:border-primary/40 transition-colors"
    >
      <div className={`w-1 h-12 rounded-full mr-3 ${result.bgColor}`} />
      <div className="w-full flex flex-col">
        <span
          className="text-foreground text-lg"
          style={{ fontFamily: "'Lora', serif" }}
        >
          {result.recommendedTime}
        </span>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{result.amountCycles} ciclos</span>
          <div className="w-1 h-1 rounded-full bg-muted-foreground" />
          <span>{result.totalHours}h</span>
        </div>
      </div>
      <p className={`${result.textColor}`}>{result.typeCycle}</p>
    </div>
  );
};

export default ResultCard;
