import React, { Component } from 'react'
import { Book } from '../components/Book'
import { UseFetchBooksData} from '../hooks/FetchBooks'
import { Loader } from '../components/Loader';



 function BookList() {

        let books = UseFetchBooksData('books');

        let content;
        if (books.loading) {
            content = <Loader></Loader>

        }
        if (books.data) {
            content =
                <div>
                {books.data.map(book =>
                        <Book book={book}></Book>
                    )}
                </div>
        }

        return (
            <div>
                {content}
            </div>
        );
    
}
export default BookList;

