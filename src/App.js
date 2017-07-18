import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchBooks from './SearchBooks'
import Mybooks from './Mybooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchBooks books={this.state.books}/>
        )}/>
        <Route exact path='/' render={() => (
          <Mybooks books={this.state.books}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp;
