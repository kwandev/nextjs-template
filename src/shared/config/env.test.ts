import { afterEach, describe, expect, it, vi } from 'vitest';
import { parseUrl } from './env';

describe('parseUrl', () => {
  it('유효한 URL을 정규화해 반환한다', () => {
    expect(parseUrl('TEST_URL', 'https://example.com/v1')).toBe('https://example.com/v1');
  });

  it('끝 슬래시를 제거한다(base + path 결합 시 슬래시 중복 방지)', () => {
    expect(parseUrl('TEST_URL', 'https://example.com/')).toBe('https://example.com');
  });

  it('잘못된 값이면 변수명을 포함해 throw 한다', () => {
    expect(() => parseUrl('TEST_URL', 'not-a-url')).toThrow('TEST_URL');
  });
});

describe('env.apiBaseUrl', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.resetModules();
  });

  it('빈 값이면 데모 엔드포인트로 폴백한다', async () => {
    // 빈 문자열도 미설정으로 취급해야 한다: ?? 였다면 parseUrl('')가 모듈 로드 시점에 throw.
    vi.stubEnv('NEXT_PUBLIC_API_BASE_URL', '');
    vi.resetModules();
    const { env } = await import('./env');
    expect(env.apiBaseUrl).toBe('https://jsonplaceholder.typicode.com');
  });

  it('설정되면 정규화해 사용한다', async () => {
    vi.stubEnv('NEXT_PUBLIC_API_BASE_URL', 'https://api.example.com/');
    vi.resetModules();
    const { env } = await import('./env');
    expect(env.apiBaseUrl).toBe('https://api.example.com');
  });
});
