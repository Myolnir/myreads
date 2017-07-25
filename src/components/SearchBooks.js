import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import Book from './Book'

class SearchBooks extends Component {

  static propTypes = {
    moveToShelf: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired,
    searchBooks: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query });
    this.props.searchBooks(this.state.query)
  }

  componentDidMount() {
    this.props.searchBooks(this.state.query);
  }

  render() {
    const { query } = this.state
    const { moveToShelf, books } = this.props

    books.sort(sortBy('title'))

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>

        <div className="search-books-results">
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

export default SearchBooks
