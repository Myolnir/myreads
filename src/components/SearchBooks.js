import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import sortBy from 'sort-by'
import Book from './Book'
import * as BooksAPI from './../BooksAPI'


class SearchBooks extends Component {

  static propTypes = {
    moveToShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    results: []
  }

  updateQuery = (query) => {
    this.setState({ query });

    BooksAPI.search(query.trim()).then(resp => {
      let results = [];
      console.log(results)

      if (Array.isArray(resp)) {
        results = resp;
      }
      this.setState({ results });
    });
  }

  clearQuery = () => {
    this.setState({ query: '' })
    this.setState({ results: [] })
  }

  render() {
    const { query, results } = this.state
    const { moveToShelf } = this.props

    results.sort(sortBy('title'))

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

        {results.length !== 0 && (
          <div className='showing-books'>
            <span>Now showing {results.length} of {results.length} total</span>
            <button onClick={this.clearQuery}>Show all</button>
          </div>
        )}

        <div className="search-books-results">
          <ol className="books-grid">
            {results.map((book) => (
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
