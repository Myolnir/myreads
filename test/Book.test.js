import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Book from '../src/components/Book';
import { book }  from './book.fixture';

describe("<Book />", () => {
  it("Should render the component", ()  => {
    const moveToShelf = function(){}
    const bookWrapper = mount(
      <Book
        book={book}
        moveToShelf={moveToShelf}
      />
    )
    expect(bookWrapper.html()).toMatchSnapshot();
  });

});
