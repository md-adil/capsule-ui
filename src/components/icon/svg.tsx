import type { CSSInterpolation } from "@emotion/serialize";
import { forwardRef, useId, type FC, type ReactElement, type SVGProps } from "react";
import { colors, spacing, type Color } from "../../theme/theme.js";
import { pick } from "lodash-es";

export type ReactSvgElement = ReactElement<SVGProps<SVGSVGElement>>;

const svgStyles: CSSInterpolation = {
  label: "svg",
  flexShrink: 0,
  userSelect: "none",
  fontSize: spacing(6),
  outline: "none",
};

export interface SvgIconProps extends SVGProps<SVGSVGElement> {
  color?: Color;
}

interface SVGElementProps extends SvgIconProps {
  children: ReactSvgElement;
  name: string;
}
const SVGElement = forwardRef<SVGSVGElement, SVGElementProps>(function Svg({ children, color, name, ...props }, ref) {
  const { props: root } = children;
  const { fill = "currentColor" } = root;
  return (
    <svg
      aria-hidden="true"
      height="1em"
      width="1em"
      focusable={false}
      aria-label={name}
      fill={fill}
      css={[svgStyles, color && { color: colors[color] }]}
      {...pick(root, "xmlns", "viewBox")}
      {...props}
      ref={ref}
    >
      {root.children}
    </svg>
  );
});

export function withSvg(
  Component: FC<SVGProps<SVGSVGElement>>,
  name: string = Component.displayName ?? Component.name,
) {
  const Svg = forwardRef<SVGSVGElement, SvgIconProps>(function Svg({ color, ...props }, ref) {
    return (
      <Component
        aria-hidden="true"
        height="1em"
        width="1em"
        focusable={false}
        aria-label={name}
        css={[svgStyles, color && { color: colors[color] }]}
        {...props}
        ref={ref}
      />
    );
  });
  Svg.displayName = name;
  return Svg;
}

/**
 * @experimental
 */
export function createSvgWithId(callback: (id: string) => ReactSvgElement, name: string) {
  const SvgIcon = forwardRef<SVGSVGElement, SvgIconProps>(function SvgIcon(props, ref) {
    const id = name + useId();
    return (
      <SVGElement {...props} name={name} data-id={id} ref={ref}>
        {callback(id)}
      </SVGElement>
    );
  });
  SvgIcon.displayName = name;
  return SvgIcon;
}

export function createSvg(el: ReactSvgElement, name: string) {
  const SvgIcon = forwardRef<SVGSVGElement, SvgIconProps>(function SvgIcon(props, ref) {
    return (
      <SVGElement {...props} name={name} ref={ref}>
        {el}
      </SVGElement>
    );
  });
  SvgIcon.displayName = name;
  return SvgIcon;
}
