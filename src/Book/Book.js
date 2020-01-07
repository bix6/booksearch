import React from 'react';
import "./Book.css";

class Book extends React.Component {
    static defaultProps = {
        bookInfo: {
            title: "Default Title",
            image: "Default Image",
            author: "Default Author",
            price: "Default Price",
            summary: "Default Summary"
        }
    };

    render() {
        return (
            <div className="book">
                <h2>{this.props.bookInfo.title}</h2>
                <img src={this.props.bookInfo.image} alt="Book Cover"></img>
                <ol>
                    <li>Author: {this.props.bookInfo.author}</li>
                    <li>Price: {this.props.bookInfo.price}</li>
                    <li>{this.props.bookInfo.summary}</li>
                </ol>
            </div>
        );
    }
}

export default Book;