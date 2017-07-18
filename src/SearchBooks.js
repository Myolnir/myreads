import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import Book from './Book'

class SearchBooks extends Component {

  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {
    const { query } = this.state
    const { books } = this.props

    let showingBooks
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter((book) => match.test(book.author))
    } else {
      showingBooks = books
    }

    showingBooks.sort(sortBy('title'))

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

        {showingBooks.length !== books.length && (
          <div className='showing-books'>
            <span>Now showing {showingBooks.length} of {books.length} total</span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}

        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks.map((book) => (
              <Book book={book} />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
