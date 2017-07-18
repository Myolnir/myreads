import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookSelector extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    moveToShelf: PropTypes.func.isRequired
  }

  render() {
    const { book, moveToShelf } = this.props
    return (
      <div className="book-shelf-changer">
        <select onChange={
            (event) => this.props.moveToShelf(book, event.target.value)
          }
          value={book.shelf}
        >
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
  }
}

export default BookSelector
