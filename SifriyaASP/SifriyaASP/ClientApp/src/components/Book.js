import React, { Component } from 'react';

export class Book extends Component {

    constructor(props) {
        super(props);
        this.state = {book: props.book};
    }     

    render() {        
        return (
            <div>                
                    <div className="m-1">
                        <div className="col-md-3"></div>
                        <div className="container text-center col-md-6 border border-primary">
                        <h3>{this.state.book.title}</h3>
                        <h5>{this.state.book.author}</h5>
                        <div>{this.state.book.publishedDate.year}</div>
                        <img className="rounded mx-auto d-block" src={this.state.book.pictureUrl} alt={this.state.book.title} />
                        <div>{this.state.book.summary}</div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
            </div>
        );
    }  
}
