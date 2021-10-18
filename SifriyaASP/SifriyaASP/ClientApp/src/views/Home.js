import React, { Component } from 'react';
import  BookGallery  from '../components/BookGallery'

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <h1>Welcome!</h1>
                <p>Here is our catalog:</p>
                <BookGallery />
            </div>
        );
    }

}

