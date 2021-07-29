import React, { Component } from 'react';
import Search from '../components/Articles/Search';
import ArticleList from '../components/Articles/ArticleList';
import { fetchNews } from '../services/NewsAPI';

export default class NewsSearch extends Component {
  state = {
    searchTerm: 'hi',
    loading: true,
    articles: {}
  };

  handleChange = ({ target }) => {
    console.log(target);
    this.setState({ [target.name]: target.value });
  }; 

  async componentDidMount() {
    const articles = await fetchNews();
    console.log("COMPONENT DID MOUNT AND FETCH NEWS");
    this.setState({ articles: articles.articles, loading: false })
  }

  render() {
    const { searchTerm, articles, loading } = this.state;
    console.log(this.state.searchTerm);

    return (
      <>
        <Search 
          searchTerm={searchTerm} 
          onChange={this.handleChange} />

        {loading
          ? <h1>Loading...</h1>
          : <ArticleList articles={articles} />}
      </>
    );
  }
}