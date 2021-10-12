import React, { Component } from 'react';
import { Book } from './Book'
import { fetchBooksData} from '../services/FetchBooks'

export class BookList extends Component {
  static displayName = BookList.name;

  constructor(props) {
    super(props);
      this.state = { books: [], loading: true, isDisplaySingle: props.isDisplaySingle};
  }

  componentDidMount() {
      this.populateBooksData();
  }

    static renderBooksTable(books, isDisplaySingle) {
        if (isDisplaySingle) {
            return (
                <div>
                    <Book book={books[0]}></Book>   
                </div>
            );
        }

        else {
            return (
                <div>
                    {books.map(book =>
                        <Book book={book}></Book>
                    )}


                </div>
            );
        }
   
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
        : BookList.renderBooksTable(this.state.books, this.state.isDisplaySingle);

    return (
      <div>
        {contents}
      </div>
    );
    }

    async populateBooksData() {
        const data = await fetchBooksData();
        this.setState({ books: data, loading: false });
}
     
}
