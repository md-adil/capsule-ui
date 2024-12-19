import { useEffect, useRef, useState, type RefObject } from "react";

export function useElement<T = HTMLDivElement, U = unknown>(callback: (element: T) => U, deps: unknown[] = []) {
  const ref = useRef<T>(null);
  const [state, setState] = useState<U>();

  useEffect(() => {
    setState(callback(ref.current!));
  }, deps);

  useEffect(() => {
    function handleUpdate() {
      setState(callback(ref.current!));
    }
    window.addEventListener("resize", handleUpdate);
    return () => window.removeEventListener("resize", handleUpdate);
  }, []);

  if (state === undefined) return [ref] as const;
  return [ref, state] as const;
}

export function useRefCallback<T extends Element = Element>(onMount?: ((el: T) => void) | false) {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (!onMount || !ref.current) return;
    onMount(ref.current);
  }, [onMount]);
  return ref;
}

export function useShadowRoot<T extends Element>(ref: RefObject<T>, init: ShadowRootInit) {
  const [element, setElement] = useState<ShadowRoot>();
  useEffect(() => {
    if (element) return;
    setElement(ref.current!.attachShadow(init));
  }, []);
  return element;
}
