interface ISection {
  children: React.ReactElement;
  className?: string;
  id: string;
}

const Section = ({ id, children, className = "" }: ISection) => {
  return (
    <section
      id={id}
      className={`w-full max-w-[1200px] text-white ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
