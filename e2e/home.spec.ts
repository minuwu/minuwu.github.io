import { test, expect } from '@playwright/test';

test('home page loads and displays brand', async ({ page }) => {
    await page.goto('/');
    const brandNav = page.locator('nav').getByText('Minuwu').first();
    await expect(brandNav).toBeVisible();
});

test('navigation links scroll to sections', async ({ page }) => {
    await page.goto('/');

    // Test clicking 'Projects' link
    const projectsLink = page.getByRole('link', { name: 'Projects', exact: true }).first();
    await projectsLink.click();

    // The section should be visible (it uses framer-motion so it might animate in)
    const projectsSection = page.locator('#projects');
    await expect(projectsSection).toBeVisible();
});

test('section expansion works', async ({ page }) => {
    await page.goto('/');

    // Find a section that is NOT default expanded (Experience is default false)
    const experienceHeader = page.getByRole('button', { name: /Experience/i });

    // Click to expand
    await experienceHeader.click();

    // Verify content is visible
    const experienceContent = page.locator('#section-content-experience');
    await expect(experienceContent).toBeVisible();
});

test('mobile menu works', async ({ page }) => {
    // Force mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const menuButton = page.getByLabel('Toggle navigation menu');
    await expect(menuButton).toBeVisible();

    // Open menu
    await menuButton.click();

    // Check if menu links are visible
    const mobileAboutLink = page.locator('nav').getByRole('link', { name: 'About' });
    await expect(mobileAboutLink).toBeVisible();

    // Close menu by clicking a link
    await mobileAboutLink.click();

    // Wait for the slide-up animation and check it is no longer in viewport/visible
    await expect(mobileAboutLink).not.toBeInViewport();
});

test('CV download link exists', async ({ page }) => {
    await page.goto('/');
    const downloadLink = page.getByRole('link', { name: /Download CV/i }).first();
    await expect(downloadLink).toBeVisible();
    await expect(downloadLink).toHaveAttribute('href', /.*\.pdf/);
});


