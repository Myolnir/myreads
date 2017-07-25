import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookSelector extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    moveToShelf: PropTypes.func.isRequired
  }


  handleShelfChanger = (ev) => {
    ev.preventDefault();
    this.props.moveToShelf(this.props.book, ev.target.value);
  }

  render() {
    const { book } = this.props
    return (
      <div className="book-shelf-changer">
        <select
          value={book.shelf}
          onChange={(ev) => this.handleShelfChanger(ev)}
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
