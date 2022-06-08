import { act, fireEvent, render, screen } from '@testing-library/react';
import Axios from 'axios';
import React from 'react';
import Posts from '../components/Posts';

jest.mock('axios');

describe('Posts', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render a list posts', async () => {
    const posts = [{
      id: 1,
      title: 'The way the world rolls',
      body: 'Lorem ipsum dolor sit',
    }, {
      id: 2,
      title: 'As e be na im e be',
      body: "I'm trying but I'm not getting it enough",
    }];
    (Axios.get as jest.Mock).mockResolvedValue({ data: posts });

    await act(async () => {
      render(<Posts />);
    });

    expect(screen.queryByText('The way the world rolls')).toBeInTheDocument();
    expect(screen.queryByText('Lorem ipsum dolor sit')).toBeInTheDocument();
    expect(screen.queryByText('The way the world rolls')).toBeInTheDocument();
    expect(screen.queryByText("I'm trying but I'm not getting it enough")).toBeInTheDocument();

    const [showButton] = screen.queryAllByRole('button');
    expect(showButton).toHaveTextContent('Hide');
    fireEvent.click(showButton);
    expect(showButton).toHaveTextContent('Show');
    expect(screen.queryByText('The way the world rolls')).toBeNull();
    expect(screen.queryByText('Lorem ipsum dolor sit')).toBeNull();
    expect(screen.queryByText('The way the world rolls')).toBeNull();
    expect(screen.queryByText("I'm trying but I'm not getting it enough")).toBeNull();

    fireEvent.click(showButton);
    expect(showButton).toHaveTextContent('Hide');
    expect(screen.queryByText('The way the world rolls')).toBeInTheDocument();
    expect(screen.queryByText('Lorem ipsum dolor sit')).toBeInTheDocument();
    expect(screen.queryByText('The way the world rolls')).toBeInTheDocument();
    expect(screen.queryByText("I'm trying but I'm not getting it enough")).toBeInTheDocument();
  });

  it('should render a an error message', async () => {
    (Axios.get as jest.Mock).mockRejectedValue(new Error());

    await act(async () => {
      render(<Posts />);
    });

    expect(screen.queryByRole('button')).toBeNull();
    expect(screen.queryByText(/Something went wrong/)).toBeInTheDocument();
  });
});
