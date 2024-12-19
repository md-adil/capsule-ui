import { useEffect } from "react";

export type KeydownHandler = (e: KeyboardEvent) => void;
export interface KeydownOption {
  enabled?: boolean;
  match?: string;
  preventDefault?: boolean;
}

export function useKeydown(
  callback?: KeydownHandler,
  { enabled = true, preventDefault = false, match }: KeydownOption = {},
) {
  useEffect(() => {
    if (!callback) {
      enabled = false;
    }
    function keydownHandler(e: KeyboardEvent) {
      if (match && e.key !== match) return;
      if (preventDefault) {
        e.preventDefault();
      }
      callback!(e);
    }
    if (enabled) {
      document.addEventListener("keydown", keydownHandler);
    } else {
      document.removeEventListener("keydown", keydownHandler);
    }
    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
  }, [enabled, callback]);
}

export function useEscapeKey(handler: KeydownHandler | undefined, option?: KeydownOption) {
  return useKeydown(handler, { ...option, match: "Escape" });
}

export function useEnterKey(handler: KeydownHandler | undefined, option?: KeydownOption) {
  return useKeydown(handler, { ...option, match: "Enter" });
}

export function useBackspaceKey(handler: KeydownHandler | undefined, option?: KeydownOption) {
  return useKeydown(handler, { ...option, match: "Backspace" });
}
