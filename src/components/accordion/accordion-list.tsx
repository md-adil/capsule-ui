import { createContext, useContext, type ReactNode } from "react";

export interface AccordionContextProps {
  active?: number;
  onChange(active: number): void;
}
export const AccordionContext = createContext<AccordionContextProps>({ onChange() {} });

export function useAccordion() {
  return useContext(AccordionContext);
}

export interface AccordionListProps extends AccordionContextProps {
  children: ReactNode;
}

export function AccordionList({ children, ...props }: AccordionListProps) {
  return <AccordionContext.Provider value={props}>{children}</AccordionContext.Provider>;
}
