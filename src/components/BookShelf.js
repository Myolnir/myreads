import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    moveToShelf: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    const { books, moveToShelf, title } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map((book) => (
              <Book
                key={book.id}
                book={book}
                moveToShelf={moveToShelf}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
