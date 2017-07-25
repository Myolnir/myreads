import React,  { Component } from 'react'
import PropTypes from 'prop-types'
import BookSelector from './booksSelector'


class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    moveToShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, moveToShelf } = this.props
    return (
      <li key={book.id}>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={
                {
                  width: 128,
                  height: 193,
                  backgroundImage:
                  `url("${book.imageLinks && book.imageLinks.thumbnail
                  }")`
                }
                }>
              </div>
            <BookSelector
              book={book}
              moveToShelf={moveToShelf}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.author}</div>
        </div>
      </li>
    )
  }
}

export default Book
