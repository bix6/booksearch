import React from 'react';
import './Filter.css';

class Filter extends React.Component {
    static defaultProps = {
        filterOptions: ["none", "partial", "full", "free-ebooks", "paid-ebooks", "ebooks"],
        printOptions: ["all", "books", "magazines"]
    };

    render() {
        const filterOptions = this.props.filterOptions.map((filter, i) => {
            return <option value={filter} key={i}>{filter}</option>;
        });
        const printOptions = this.props.printOptions.map((print, i) => {
            return <option value={print} key={i}>{print}</option>;
        })

        return (
            <div className="filter">
                <label>Filter:</label>
                <select className="filter-type" onChange={e => this.props.updateFilter(e.target.value)}>
                    {filterOptions}
                </select>
                <label>Print Type:</label>
                <select className="print-type" onChange={e => this.props.updatePrint(e.target.value)}>
                    {printOptions}
                </select>
            </div>
        );
    }
}

export default Filter;