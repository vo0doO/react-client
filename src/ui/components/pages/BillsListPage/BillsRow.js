import * as React from "react";
import {PropTypes} from 'prop-types';

export class BillsRow extends React.PureComponent {
    constructor(props) {
        super(props);
    }
    static propTypes = {
        bill: PropTypes
            .shape(
                {
                    idBills: PropTypes.number,
                    billsCount: PropTypes.number,
                    billsAmount: PropTypes.number,
                    billsPaidCount: PropTypes.number,
                    billsPaidAmount: PropTypes.number,
                    billsAddTimestamp: PropTypes.string
                }
            )
    };
    render() {
        const bill = this.props.bill;
        return (
            <tr>
                <td>{bill.idBills}</td>
                <td>{bill.billsCount}</td>
                <td>{bill.billsAmount}</td>
                <td>{bill.billsPaidCount}</td>
                <td>{bill.billsPaidAmount}</td>
                <td>{bill.billsAddTimestamp}</td>
            </tr>
        );
    }
}