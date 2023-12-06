import { createRef, MutableRefObject } from 'react';
import { createRoot } from 'react-dom/client';
import * as TestUtils from 'react-dom/test-utils';
import { intersectionObserver } from '@shopify/jest-dom-mocks';
import { useIntersection } from './useIntersection';
import { renderHook } from '@testing-library/react';

describe('useIntersection', () => {
  const observe = jest.fn();
  const unobserve = jest.fn();
  const disconnect = jest.fn();

  beforeEach(() => {
    intersectionObserver.mock();
    const IO = IntersectionObserver;
    jest.spyOn(IO.prototype, 'disconnect');
    jest
      .spyOn(global, 'IntersectionObserver')
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      .mockImplementation(() => ({ observe, unobserve, disconnect }));
    IntersectionObserver.prototype = IO.prototype;
  });

  afterEach(() => {
    intersectionObserver.restore();
    jest.resetAllMocks();
  });

  describe('useIntersection', () => {
    const container = document.createElement('div');
    let targetRef: MutableRefObject<HTMLDivElement | null>;

    it('should be defined', () => {
      expect(useIntersection).toBeDefined();
    });

    it('is server, does nothing', () => {
      TestUtils.act(() => {
        targetRef = createRef();
        const root = createRoot(container);
        root.render(<div ref={targetRef} />);
      });

      expect(intersectionObserver.observers).toHaveLength(0);
      const observerOptions = { root: null, threshold: 0.8 };

      renderHook(() => useIntersection(targetRef, observerOptions, true));

      expect(intersectionObserver.observers).toHaveLength(0);
      expect(observe).toHaveBeenCalledTimes(0);
    });

    it('not server, should setup an IntersectionObserver targeting the ref element and using the options provided', () => {
      TestUtils.act(() => {
        targetRef = createRef();
        const root = createRoot(container);
        root.render(<div ref={targetRef} />);
      });

      expect(intersectionObserver.observers).toHaveLength(0);
      const observerOptions = { root: null, threshold: 0.8 };

      renderHook(() => useIntersection(targetRef, observerOptions, false));
      expect(observe).toHaveBeenCalled();
      expect(observe).toHaveBeenCalledWith(targetRef.current);
    });

    it('should return null if a ref without a current value is provided', () => {
      targetRef = createRef();

      const { result } = renderHook(() =>
        useIntersection(targetRef, { root: null, threshold: 1 }, false)
      );
      expect(result.current).toBe(null);
    });

    it('should return null if IntersectionObserver is not supported', () => {
      targetRef = createRef();
      targetRef.current = document.createElement('div');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      delete window.IntersectionObserver;

      expect(() =>
        renderHook(() => useIntersection(targetRef, {}, false))
      ).not.toThrow();
    });
  });
});
