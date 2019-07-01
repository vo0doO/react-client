import React from 'react';
import {Loader} from "../../common/Loader";
import {AuthLayout}from "../../common/AuthLayout/";
import {FilterableBillsTable} from "./FilterableBillsTable";


export class BillsListPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.loadBills = this.loadBills.bind(this);
    }

    componentDidMount() {
        return this.loadBills()
    }

    loadBills() {
        return this.props.getBills
    }

    render() {

        const { isInitial, isSubmiting, isOk, billsList } = this.props;

        return (
            <AuthLayout>
                {
                    isInitial && <Loader />
                }
                {
                    isSubmiting && <Loader />
                }
                {
                    isOk && <FilterableBillsTable billsList={billsList}></FilterableBillsTable>
                }
            </AuthLayout>
        );
    }
}
