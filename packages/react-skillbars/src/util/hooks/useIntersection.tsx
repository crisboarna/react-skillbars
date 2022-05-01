import { RefObject, useEffect, useState } from 'react';

/**
 * Hook used for checking whether provided component is in viewport or not based on configured thresholds
 * @param ref
 * @param options
 * @param isServer
 */
export const useIntersection = (
  ref: RefObject<HTMLElement>,
  options: IntersectionObserverInit,
  isServer: boolean
): IntersectionObserverEntry | null => {
  const [intersectionObserverEntry, setIntersectionObserverEntry] =
    useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    if (
      !isServer &&
      ref.current &&
      typeof IntersectionObserver === 'function'
    ) {
      const handler = (entries: IntersectionObserverEntry[]) => {
        setIntersectionObserverEntry(entries[0]);
      };

      const observer = new IntersectionObserver(handler, options);
      observer.observe(ref.current);

      return () => {
        setIntersectionObserverEntry(null);
        observer.disconnect();
      };
    }
    return () => {
      return;
    };
  }, [ref.current, options.threshold, options.root, options.rootMargin]);

  return intersectionObserverEntry;
};
