import React from 'react';
import Search from './Search/Search';
import BookList from "./BookList/BookList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: []
        }
    }

    newSearch(searchTerm) {
		const options = {
            method: 'GET'
		};
        let url = "https://www.googleapis.com/books/v1/volumes";
        const key = "AIzaSyDB4At8HO52HJPUIDGyAa2TyuKUgCxyvLE";
        url += `?q=${searchTerm}&key=${key}`;
		
        fetch(url, options)
            .then(response => {
                if (response.ok) {
					return response.json();
				}
				throw new Error(response.statusText);
            })
            .then(responseJson => {
                const bookList = responseJson.items.map(book => {
                    const bookDict = {
                        title: "n/a",
                        image: "n/a",
                        author: "n/a",
                        price: "n/a",
                        summary: "n/a" 
                    };
                    if (book.volumeInfo) {
                        bookDict.title = book.volumeInfo.title
                            ? book.volumeInfo.title
                            : "n/a";
                        bookDict.image = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
                            ? book.volumeInfo.imageLinks.thumbnail
                            : "n/a";
                        bookDict.author = book.volumeInfo.authors
                            ? book.volumeInfo.authors.join(', ')
                            : "n/a";
                        bookDict.price = book.saleInfo.listPrice && book.saleInfo.listPrice.amount
                            ? book.saleInfo.listPrice.amount
                            : "n/a";
                        bookDict.summary = book.volumeInfo.description
                            ? book.volumeInfo.description
                            : "n/a";
                    }
                    return bookDict;
                })
                this.setState({
                    bookList: bookList
				})
            })
            .catch(error => console.log(error.message));
    }

    render() {
        return (
            <main className='App'>
                    <h1>Google Book Search</h1>
                    <Search newSearch={searchTerm => this.newSearch(searchTerm)} />
                    <BookList bookList={this.state.bookList}/>
            </main>
        );
    }
}

export default App;