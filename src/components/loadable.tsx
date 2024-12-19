import { useState, type FC } from "react";

export function loadable<P>(Component: FC<P>) {
  const Wrapped: FC<P> = function Wrapped(props: P) {
    const { onClick, ...base } = props as any;
    const [loading, setLoading] = useState(false);
    async function handleClick(...args: unknown[]) {
      try {
        setLoading(true);
        const response = await onClick(...args);
        setLoading(false);
        return response;
      } catch (err) {
        setLoading(false);
        throw err;
      }
    }
    return <Component loading={loading} {...base} onClick={handleClick} />;
  };
  Wrapped.displayName = Component.displayName;
  return Wrapped;
}
