import React from 'react';
import { shallow, mount, render } from 'enzyme';
import BookSelector from '../src/components/booksSelector';
import { book }  from './book.fixture';

describe("<BookSelector />", () => {
  it("Should render the component", ()  => {
    const moveToShelf = function(){}
    const bookWrapper = mount(
      <BookSelector
        book={book}
        moveToShelf={moveToShelf}
      />
    )
    expect(bookWrapper.html()).toMatchSnapshot();
  });

});
