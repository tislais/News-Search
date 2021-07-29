import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';

const ArticleList = ({ articles }) => {
  // const articleMap = articles.map((article) => (
  //   <li key={article.title}>
  //     <Article
  //       title={article.title}
  //       author={article.author}
  //       description={article.description} />
  //   </li>
  // ));
  // return articleMap;
  return <h1 className="text-9xl">Article List</h1>
}

ArticleList.propTypes = {};

export default ArticleList;