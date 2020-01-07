import React from "react";
import Book from "../Book/Book";

class BookList extends React.Component {
    static defaultProps = {
        bookList: [
            {
                title: "Default Title1",
                image: "Default Image1",
                author: "Default Author1",
                price: "Default Price1",
                summary: "Default Summary1"
            },
            {
                title: "Default Title2",
                image: "Default Image2",
                author: "Default Author2",
                price: "Default Price2",
                summary: "Default Summary2"
            },
        ]
    };

    render() {
        const bookList = this.props.bookList.map((book, i) => <Book bookInfo={book} key={i} />);
        return (
            <div className="book-list">
                {bookList}
            </div>
        )
    }
}

export default BookList;