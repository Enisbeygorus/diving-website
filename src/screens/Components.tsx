import { AllIcons } from "../assets/Icons";
import Button from "../components/Buttons/Button";
import Button2 from "../components/Buttons/Button2";
import ToggleCard from "../components/Card/ToggleCard";
import { Card } from "../components/Card/Card";

interface IComponentsRow {
  text: string;
  content: React.ReactNode;
}

const ComponentsRow = ({ text, content }: IComponentsRow) => {
  return (
    <div className="flex flex-col items-center w-full sm:w-2/3 mb-4">
      <h2 className="uppercase text-center text-2xl font-bold tracking-tight mb-2 text-gray-500">
        {text}
      </h2>
      <div
        // style={{ backgroundColor: "#2a3d5e" }}
        className="flex w-full justify-center max-w-xl p-2 md:p-4 flex-wrap bg-primaryLightBg1  border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        {content}
      </div>
    </div>
  );
};

const Components = () => {
  const allIcons: JSX.Element[] = Object.keys(AllIcons).map((key: string) => {
    const Icon = AllIcons[key as keyof typeof AllIcons];
    return (
      <div key={key} className="m-3">
        <Icon width={40} height={40} />
      </div>
    );
  });

  const buttons = (
    <div className="flex">
      <Button>Button 1</Button>
      <Button2 title={"Button 2"} />
    </div>
  );

  const colorDiv = (color: string) => {
    return (
      <div
        style={{ backgroundColor: color }}
        className="w-10 mx-2 h-10 rounded border-2 border-x-zinc-300"
      ></div>
    );
  };

  const colors = (
    <div className="flex">
      {colorDiv("#0369a1")}
      {colorDiv("#334155")}
      {colorDiv("#1f2937")}
      {colorDiv("#1e293b")}
      {colorDiv("#eaf5ff")}
    </div>
  );
  const textColors = (
    <div className="flex">
      {colorDiv("#6b7280")}
      {colorDiv("#fff")}
      {colorDiv("#000")}
    </div>
  );

  const cards = (
    <div>
      <div className="mb-4">
        <Card title="Card">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          magni minima dignissimos fugiat vitae neque eos optio impedit, cum id
          illo similique dicta eligendi tempore iure qui quibusdam magnam hic!
        </Card>
      </div>
      <div>
        <ToggleCard title="Toggle Card">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam vel
          ratione distinctio labore blanditiis iusto quod possimus! Eius, autem
          ut. Itaque consectetur veniam illum sit eligendi nihil et facere quod.
        </ToggleCard>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center p-2 pt-0">
      <ComponentsRow text="Icons" content={allIcons} />
      <ComponentsRow text="Colors" content={colors} />
      <ComponentsRow text="Text Colors" content={textColors} />
      <ComponentsRow text="Buttons" content={buttons} />
      <ComponentsRow text="Cards" content={cards} />
    </div>
  );
};

export default Components;
