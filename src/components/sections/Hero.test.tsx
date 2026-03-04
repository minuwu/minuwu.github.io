import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hero } from './Hero';

describe('Hero Component', () => {
    it('renders the brand and headline', () => {
        render(<Hero />);

        // Check for the name in parts as it is split into span and strong tags
        expect(screen.getByText('M')).toBeInTheDocument();
        expect(screen.getByText(/ohammad Minhazul Abedin/)).toBeInTheDocument();

        expect(screen.getByText(/RESILIENT./i)).toBeInTheDocument();
        expect(screen.getByText(/CREATIVE./i)).toBeInTheDocument();
        expect(screen.getByText(/PRECISE./i)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /Initiate Contact/i })).toBeInTheDocument();
    });
});
