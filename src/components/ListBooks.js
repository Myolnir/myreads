import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'
import BookShelfs from './BookShelfs'

class ListBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    moveToShelf: PropTypes.func.isRequired
  }

  render() {
    const { books, moveToShelf } = this.props
    const currentlyReading = books.filter((book) =>  book.shelf === 'currentlyReading')
    const wantToRead = books.filter((book) =>  book.shelf === 'wantToRead')
    const read = books.filter((book) =>  book.shelf === 'read')
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelfs books={currentlyReading} moveToShelf={moveToShelf} title='Currently Reading'/>
          <BookShelfs books={wantToRead} moveToShelf={moveToShelf} title='Want To Read'/>
          <BookShelfs books={read} moveToShelf={moveToShelf} title='Read'/>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }

}

export default ListBooks
