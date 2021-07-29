import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('News search container', () => {

  // User enters a search term and app passes that term into an API request
  // GET https://newsapi.org/v2/everything?q=bitcoin&apiKey=API_KEY

  it('Renders the search bar', async () => {
    render(<NewsSearch />);

    // Search input is rendered
    const searchInput = screen.getByLabelText('Search');

    // User enters search term
    fireEvent.change(searchInput, { target: { value: 'covid' }});
    expect(searchInput).toHaveValue('covid');

    // Display list of articles related to search term



  });
});