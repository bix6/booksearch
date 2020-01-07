import React from 'react';
import "./Book.css";

class Book extends React.Component {
    static defaultProps = {
        title: "Default Title",
        image: "Default Image",
        author: "Default Author",
        price: "Default Price",
        summary: "Default Summary"
    };

    render() {
        return (
            <div className="Book">
                <h2>{this.props.title}</h2>
                <img src={this.props.image} alt="Book Cover"></img>
                <ol>
                    <li>Author: {this.props.author}</li>
                    <li>Price: {this.props.price}</li>
                    <li>{this.props.summary}</li>
                </ol>
            </div>
        );
    }
}

export default Book;