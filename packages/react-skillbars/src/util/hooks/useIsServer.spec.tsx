import { useIsServer } from './useIsServer';
import { renderHook } from '@testing-library/react';

describe('useIsServer', () => {
  test('returns value', () => {
    const { result } = renderHook(() => useIsServer());
    expect(result.current).toEqual(false);
  });
});
