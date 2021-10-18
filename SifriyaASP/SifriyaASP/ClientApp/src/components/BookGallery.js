import React from 'react'
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import { UseFetchBooksData } from '../hooks/FetchBooks'
import { Loader } from './Loader';

function BookGallery() {

    let books = UseFetchBooksData('books');
    let ImgUrls = [];
    let content;

    if (books.loading) {
        content = <Loader></Loader>
    }
    if (books.data) {

        books.data.forEach((book) => {
            const { pictureUrl: url } = book;
            const { title: title } = book;
            ImgUrls.push({ original: url, thumbnail: url, description: title})
        });

        content =
            <ImageGallery items={ImgUrls} showPlayButton={false} />
    }

    return (
        <div>
            {content}
        </div>
    );   
}
export default BookGallery;