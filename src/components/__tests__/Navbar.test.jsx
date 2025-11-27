import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { vi } from 'vitest';
import { Navbar } from '../Navbar';

// Mock the IntersectionObserver
const mockIntersectionObserver = class {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
};
window.IntersectionObserver = mockIntersectionObserver;

describe('Navbar', () => {
  test('clicking a nav link scrolls to the correct section', () => {
    // Spy on scrollIntoView
    const scrollIntoViewMock = vi.fn();
    window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

    // Create a mock section to scroll to
    const featuresSection = document.createElement('section');
    featuresSection.id = 'features';
    document.body.appendChild(featuresSection);

    render(<Navbar />);

    const featuresLink = screen.getByText('Features');
    fireEvent.click(featuresLink);

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: 'smooth' });

    // Clean up the mock section
    document.body.removeChild(featuresSection);
  });
});
