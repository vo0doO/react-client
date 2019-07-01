import * as React from 'react';
import {styled} from '@qiwi/pijma-core';
import {FilterBar} from "./FilterBar";
import {BillsTable} from "./BillsTable";

const ViewBillsContainer = styled('div')`
    width: 100%;
    margin: auto;
    padding: 40px;
    text-align: center;
`;

export class FilterableBillsTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            dateFrom: "",
            dateTo: ""
        };
        this.handleFilterDateFromChange = this.handleFilterDateFromChange.bind(this);
        this.handleFilterDateToChange = this.handleFilterDateToChange.bind(this);
    }
    handleFilterDateFromChange(dateFrom) {
        this.setState({
            dateFrom: dateFrom
        });
    }
    handleFilterDateToChange(dateTo) {
        this.setState({
            dateTo: dateTo
        });
    }
    render() {
        return(
            <ViewBillsContainer>
                <FilterBar
                    dateFrom={this.state.dateFrom}
                    dateTo={this.state.dateTo}
                    onFilterDateFromChange={this.handleFilterDateFromChange}
                    onFilterDateToChange={this.handleFilterDateToChange}>
                </FilterBar>
                <BillsTable
                    billsList={this.props.billsList.sort()}
                    dateFrom={this.state.dateFrom}
                    dateTo={this.state.dateTo}>
                </BillsTable>
            </ViewBillsContainer>
        )
    }
}