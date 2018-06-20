import React from 'react'

import DataApi from '../dataApi'
import { data } from '../testData'
import ArticleList from './article-list';

const api = new DataApi(data)

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    }
  }
  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  }
  render(){
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    )
  }
}

export default App
