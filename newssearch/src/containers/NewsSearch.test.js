import React from 'react';
import { render, screen } from '@testing-library/react';
import Article from '../components/Articles/Article';
import NewsSearch from './NewsSearch';

describe('News search container', () => {

  // User enters a search term and app passes that term into an API request
  // GET https://newsapi.org/v2/everything?q=bitcoin&apiKey=API_KEY

  it('Renders the search bar', async () => {
    render(<NewsSearch />);

    const searchTerm = screen.getByLabelText('Search:');
  });
});