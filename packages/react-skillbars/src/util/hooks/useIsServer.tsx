import { useEffect, useState } from 'react';

/**
 * As `useEffect` is only called on the client, this will execute and set state to false only on client
 */
export const useIsServer = () => {
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
  }, []);
  return isServer;
};
