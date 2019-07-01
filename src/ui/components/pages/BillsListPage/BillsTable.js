import * as React from "react";
import {PropTypes} from 'prop-types';
import {BillsRow} from './BillsRow'

export class BillsTable extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        billsList:
            [
                {
                    idBills: 0,
                    billsCount: 0,
                    billsAmount: 0,
                    billsPaidCount: 0,
                    billsPaidAmount: 0,
                    billsAddTimestamp: Date,
                }
            ]
    };
    static propTypes = { billsList: PropTypes.array };

    render() {
        const dateFrom = this.props.dateFrom;
        const dateTo = this.props.dateTo;
        const rows = [];
        this.props.billsList.map(function (bill) {
            if (new Date(bill.billsAddTimestamp) <= new Date(dateFrom)) {
                return;
            }
            if (new Date(bill.billsAddTimestamp) >= new Date(dateTo)) {
                return
            }
            rows.push(
                <BillsRow
                    key={bill.billsAddTimestamp}
                    bill={bill}/>
            )

        });
        return (
            <table
                algin="center"
                border="1"
                rules="all"
                frame="border">
                <caption>The Bills</caption>
                <thead>
                <tr>
                    <td>Id</td>
                    <td>Count</td>
                    <td>Amount</td>
                    <td>Paid Count</td>
                    <td>Paid Amount</td>
                    <td>Add Timestamp</td>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        )
    }
}