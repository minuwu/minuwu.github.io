import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Education } from './Education';

// Mock Section component as it has animations that might interfere with simple unit tests
vi.mock('../layout/Section', () => ({
    Section: ({ children, title }: any) => (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
}));

describe('Education Component', () => {
    it('renders education details correctly', () => {
        render(<Education />);

        expect(screen.getByText(/B.Sc. Engineering in CSE/i)).toBeInTheDocument();
        expect(screen.getByText(/Rangamati Science and Technology University/i)).toBeInTheDocument();
        expect(screen.getByText(/3.73/i)).toBeInTheDocument();
        expect(screen.getByText(/March 2020 – February 2026/i)).toBeInTheDocument();
    });
});
