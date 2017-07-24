import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Route} from 'react-router-dom'
import SearchBooks from './components/SearchBooks'
import ListBooks from './components/ListBooks'

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
    BooksAPI.update(book, shelf).then(data => {
      this.setState(({ books }) => {
          const isPresent = books.find(b => (
          b.id === book.id
        ));
        if (!! isPresent) {
          return {
            books: books.filter(b =>
              b.id === book.id ? b.shelf = shelf : b
            )
          }
        }
        return {
          books: books.concat(
            Object.assign({}, book, { shelf: shelf })
          )
        }
      });
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={({ history }) => (
          <SearchBooks
            moveToShelf={this.moveToShelf}
          />
        )}/>
        <Route exact path='/' render={({ history }) => (
          <ListBooks books={this.state.books} moveToShelf={this.moveToShelf} />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
