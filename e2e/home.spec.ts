import { expect, test } from '@playwright/test';

test('홈페이지에 제목이 표시된다', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('To get started');
});

test('Documentation 링크가 동작한다', async ({ page }) => {
  await page.goto('/');

  const link = page.getByRole('link', { name: 'Documentation' });
  await expect(link).toBeVisible();
  await expect(link).toHaveAttribute('href', /nextjs\.org\/docs/);
});
