type Information = {
  value: string;
  unit: string;
  label: string;
};

type CycleFactProps = {
  information: Information;
};

const CycleFact = ({ information }: CycleFactProps) => {
  return (
    <div className="px-4 py-4 md:px-8 md:first:pl-0">
      <p className="text-primary font-title text-3xl">
        {information.value}
        <span className="text-muted-foreground ml-1.5 text-sm tracking-widest">
          {information.unit}
        </span>
      </p>
      <span className="text-sm text-muted-foreground tracking-widest">
        {information.label}
      </span>
    </div>
  );
};

export default CycleFact;
