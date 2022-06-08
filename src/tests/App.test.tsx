import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';


describe('App', () => {
  beforeEach(() => {
    render(<App />);
  })

  test('renders two search inputs', async () => {
    const input1 = screen.getByLabelText("Type Random");
    const input2 = screen.getByLabelText("Type Random Again");
    expect(input1).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(input1).toHaveAttribute("type", "search");
    expect(input2).toHaveAttribute("type", "search");

    fireEvent.change(input1, { target: { value: 'Name' } });
    fireEvent.change(input2, { target: { value: 'Game' } });

    expect(screen.getByText(/name/i)).toBeInTheDocument();
    expect(screen.getByText(/game/i)).toBeInTheDocument();
  });
});
