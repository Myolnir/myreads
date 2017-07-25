import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Book from '../src/components/Book';

describe("<Book />", () => {
  it("contains spec with an expectation", ()  => {
    const book = {};
    const moveToShelf = function(){}
    const bookWrapper = mount(
      <Book
        book={book}
        moveToShelf={moveToShelf}
      />
    )
    expect(bookWrapper.contains(book)).to.equal(true);
  });

});
