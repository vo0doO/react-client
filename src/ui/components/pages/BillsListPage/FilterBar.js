import * as React from "react";

export class FilterBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterDateFromChange = this.handleFilterDateFromChange.bind(this);
        this.handleFilterDateToChange = this.handleFilterDateToChange.bind(this);
    }
    handleFilterDateFromChange(e) {
        this.props.onFilterDateFromChange(e.target.value);
    }

    handleFilterDateToChange(e) {
        this.props.onFilterDateToChange(e.target.value);
    }
    render() {
        return(
            <div>
                <input
                    type="date"
                    value={this.props.dateFrom}
                    onChange={this.handleFilterDateFromChange}>
                </input>
                <input
                    type="date"
                    value={this.props.dateTo}
                    onChange={this.handleFilterDateToChange}>
                </input>
            </div>
        )
    }
}