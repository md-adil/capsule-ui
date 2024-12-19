import { useEffect, useState, type PropsWithChildren } from "react";

export function NoSSR({ children }: PropsWithChildren) {
  const [client, setClient] = useState(false);
  useEffect(() => {
    setClient(true);
  }, []);
  if (!client) return null;
  return <>{children}</>;
}
