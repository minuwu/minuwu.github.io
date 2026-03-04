import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Section } from './Section';

describe('Section Component', () => {
    it('is collapsed by default and shows content when clicked', () => {
        render(
            <Section id="test" title="Test Title">
                <div data-testid="content">Hidden Content</div>
            </Section>
        );

        // Content should not be in the document initially because of AnimatePresence and conditional rendering
        expect(screen.queryByTestId('content')).not.toBeInTheDocument();

        // Click the button to expand
        const button = screen.getByRole('button');
        fireEvent.click(button);

        // Content should now be visible
        expect(screen.getByTestId('content')).toBeInTheDocument();
        expect(button).toHaveAttribute('aria-expanded', 'true');
    });

    it('is expanded by default if defaultExpanded is true', () => {
        render(
            <Section id="test" title="Test Title" defaultExpanded={true}>
                <div data-testid="content">Visible Content</div>
            </Section>
        );

        expect(screen.getByTestId('content')).toBeInTheDocument();
        const button = screen.getByRole('button');
        expect(button).toHaveAttribute('aria-expanded', 'true');
    });
});
