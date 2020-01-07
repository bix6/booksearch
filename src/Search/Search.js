import React from 'react';
import "./Search.css";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        };
    }

    changeValue(value) {
        this.setState({
            searchValue: value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.newSearch(this.state.searchValue);
    }

    render () {
        return (
            <form className="search" onSubmit={e => this.handleSubmit(e)}>
                <label htmlFor="search">Search:</label>
                <input 
                    type="text" 
                    placeholder="dragons, mario, etc." 
                    id="search" 
                    name="search"
                    onChange={e => this.changeValue(e.target.value)} />
                <button type="submit">Search</button>
            </form>
        );
    }
}

export default Search;