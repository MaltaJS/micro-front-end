import { newE2EPage } from '@stencil/core/testing';

describe('card', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<card></card>');
    const element = await page.find('card');
    expect(element).toHaveClass('hydrated');
  });
});
