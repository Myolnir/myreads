import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchBooks from './components/SearchBooks'
import Mybooks from './components/Mybooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    });
  };

  moveToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState((state) => {
          books: state.books
            .filter(bookFilter => book.id !== bookFilter.id)
            .concat(shelf !== 'none' ? [{...book, shelf}] : [])
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchBooks books={this.state.books}/>
        )}/>
        <Route exact path='/' render={() => (
          <Mybooks
            books={this.state.books}
            moveToShelf={this.moveToShelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
