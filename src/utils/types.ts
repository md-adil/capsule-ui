import type { ChangeEvent, ElementType, MouseEvent, MouseEventHandler, ReactElement, ReactNode } from "react";

export type Timeout = ReturnType<typeof setTimeout>;
export type ArrayItem<T extends readonly unknown[]> = T[number];

// Props with *
export type PropsWithClass<P = unknown> = P & { className?: string };

export type PropsWithClasses<C extends string, P extends { classes?: { [key: string]: string } } = {}> = Omit<
  P,
  "classes"
> & {
  classes?: P["classes"] & { [K in C]?: string };
};
export type PropsWithClick<T = HTMLButtonElement> = { onClick?(e: MouseEvent<T>): void };

export type PropsWithAdornment<P extends { classes?: { [key: string]: string } } = {}> = {
  start?: ReactNode;
  end?: ReactNode;
} & PropsWithClasses<"start" | "end", P>;

export type WithAsProps = { as?: ElementType };
export type PropsWithAction<P = {}> = P & { action?: ReactNode };

// Done with *

// Events
export type ChangeHandler<V = string, E = Element> = (value: V, e: ChangeEvent<E>) => void;
export type ClickEvent = MouseEvent<HTMLButtonElement>;
export type ClickHandler = MouseEventHandler<HTMLButtonElement>;
// Done with events

// start sides and axis
export type SideX = "left" | "right";
export type SideY = "top" | "bottom";
export type Axis = "x" | "y";
export type Side = SideX | SideY;
export type Edge = SideY | SideX | `${SideY}-${SideX}`;
export type Direction = "start" | "end";
export type Dict<T = string> = Record<string, T>;

export type Orientation =
  | "ttb"
  | "trtbl"
  | "rtl"
  | "brttl"
  | "btt"
  | "blttr"
  | "ltr"
  | "tltbr"
  | "radialIn"
  | "radialOut";

export type TableAxis = "row" | "column";
// done with sides

// react
export type ReactChildren<T> = ReactElement<T> | ReactElement<T>[];
