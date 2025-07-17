/// <reference types="vitest/globals" />

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Rating from './Rating';

describe('Rating Component', () => {
  it('renders the heading', () => {
    render(<Rating />);
    expect(screen.getByText('Rate your experience')).toBeInTheDocument();
  });

  it('renders 5 stars', () => {
    render(<Rating />);
    const stars = screen.getAllByTestId('star');
    expect(stars).toHaveLength(5);
  });

  it('handles star clicks', () => {
    render(<Rating />);
    const stars = screen.getAllByTestId('star');
    fireEvent.click(stars[2]); // Click the 3rd star
    expect(screen.getByText('Good')).toBeInTheDocument();
  });

  it('shows modal on submit', () => {
    render(<Rating />);
    const stars = screen.getAllByTestId('star');
    fireEvent.click(stars[3]); // Click the 4th star
    fireEvent.click(screen.getByText('Submit'));
    expect(screen.getByText('Thank you', {exact: false})).toBeInTheDocument();
  });

  it('closes modal', () => {
    render(<Rating />);
    const stars = screen.getAllByTestId('star');
    fireEvent.click(stars[3]);
    fireEvent.click(screen.getByText('Submit'));
    fireEvent.click(screen.getByText('Close'));
    expect(screen.queryByText('Thank you')).not.toBeInTheDocument();
  });
});
