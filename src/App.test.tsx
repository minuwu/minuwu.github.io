import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
    it('renders without crashing and displays the title', () => {
        render(<App />);

        // Checking for the brand title
        expect(screen.getAllByText(/Minuwu/i)[0]).toBeInTheDocument();
    });
});
