import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren;

const Section = ({ children }: SectionProps) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Section;
