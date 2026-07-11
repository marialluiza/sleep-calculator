type CycleInformation = {
  number: string;
  title: string;
  content: string;
};

type AboutCardProps = {
  information: CycleInformation;
  className?: string;
};

const AboutCard = ({ information, className }: AboutCardProps) => {
  return (
    <div className={`flex flex-col gap-3 px-8 py-4 border-border ${className}`}>
      <p className="text-sm text-muted-foreground font-mono">
        {information.number}
      </p>
      <h3 className="mb-3 text-lg text-foreground font-title">
        {information.title}
      </h3>
      <p className="text-sm text-muted-foreground font-mono">
        {information.content}
      </p>
    </div>
  );
};

export default AboutCard;
