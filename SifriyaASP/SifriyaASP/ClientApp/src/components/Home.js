import React, { Component } from 'react';
import { BookList } from './BookList'

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <h1>Welcome!</h1>
            <p>Here is our catalog:</p>
            <BookList isDisplaySingle={true}></BookList>
        </div>
    );
  }

}
