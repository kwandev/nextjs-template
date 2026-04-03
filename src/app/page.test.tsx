import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import Home from './page';

vi.mock('@/shared/lib', () => ({
  api: {
    get: vi.fn().mockResolvedValue([
      {
        id: 1,
        albumId: 1,
        title: 'photo one',
        thumbnailUrl: 'https://via.placeholder.com/150/1',
        url: '',
      },
      {
        id: 2,
        albumId: 1,
        title: 'photo two',
        thumbnailUrl: 'https://via.placeholder.com/150/2',
        url: '',
      },
    ]),
  },
}));

describe('Home', () => {
  afterEach(cleanup);

  it('페이지 제목이 렌더링된다', async () => {
    const Page = await Home();
    render(Page);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Photos');
  });

  it('사진 목록이 렌더링된다', async () => {
    const Page = await Home();
    render(Page);

    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(2);
    expect(screen.getByText('photo one')).toBeInTheDocument();
    expect(screen.getByText('photo two')).toBeInTheDocument();
  });
});
