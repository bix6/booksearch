import React from 'react';
import Search from './Search/Search';
import BookList from "./BookList/BookList";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theResponse: ""
        }
    }

    newSearch(value) {
        let url = "https://www.googleapis.com/books/v1/volumes";
        const key = "AIzaSyDB4At8HO52HJPUIDGyAa2TyuKUgCxyvLE";
        url += `?q=${value}&key=${key}`;
        const options = {
            method: 'GET'
        };
        
        fetch(url, options)
            .then(response => {
                if (response.ok) {
                    return response;
                }
                throw new Error(response.statusText);
            })
            .then(response => {
                this.setState({
                    theResponse: response.json()
                })
                console.log(this.state.theResponse);
            })
            .catch(error => console.log(error.message));
    }

    render() {
        return (
            <main className='App'>
                    <h1>Google Book Search</h1>
                    <Search newSearch={value => this.newSearch(value)} />
                    <BookList />
            </main>
        );
    }
}

export default App;