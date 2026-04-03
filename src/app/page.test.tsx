import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Home from './page';

describe('Home', () => {
  it('페이지 제목이 렌더링된다', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'To get started, edit the page.tsx file.',
    );
  });

  it('Documentation 링크가 존재한다', () => {
    render(<Home />);

    const [link] = screen.getAllByRole('link', { name: 'Documentation' });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', expect.stringContaining('nextjs.org/docs'));
  });
});
