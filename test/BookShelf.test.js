import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { books }  from './book.fixture';
import BookShelf from '../src/components/BookShelf';

describe("<BookShelf />", () => {
  it("Should render the component", ()  => {
    const moveToShelf = function(){}
    const title = 'Test title'
    const bookWrapper = mount(
      <BookShelf
        books={books}
        moveToShelf={moveToShelf}
        title={title}
      />
    )
    expect(bookWrapper.html()).toMatchSnapshot();
  });

});
