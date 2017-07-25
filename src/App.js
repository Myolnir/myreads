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

  listBooks = () => {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ books });
      })
  }

  moveToShelf = (bookToChange, newShelf) => {
    BooksAPI.update(bookToChange, newShelf)
      .then(data => {
        this.setState(currentStatus => ({
          books: currentStatus.books.map(book => {
            if(bookToChange.id === book.id) {
              book.shelf = newShelf;
            }
            return book;
          })
        }));
      });
  }

  searchBooks = (query) => {
    if(query) {
      BooksAPI.search(query.trim())
        .then(response => {
          let books = [];
          if(Array.isArray(response)) {
            books = response;
          }
          if(Array.isArray(response.books)) {
            books = response.books;
          }
          this.setState({ books });
        });
    } else {
      this.setState({ books: [] });
    }
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/search" render={() => (
          <SearchBooks
            moveToShelf={this.moveToShelf}
            books={this.state.books}
            searchBooks={this.searchBooks}
          />
        )}/>
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            moveToShelf={this.moveToShelf}
            listBooks={this.listBooks}
           />
        )}/>
      </div>
    )
  }
}

export default BooksApp;
