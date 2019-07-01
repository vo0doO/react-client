import {ApiHttpClient} from "../apiHttpClient";


export class BillsApiService {
    constructor(props) {
        this.client = new ApiHttpClient();
    }
    async bills() {
        return await this.client.get('bills/items')
    }
    async billsByDate(dateFrom, dateTo) {
        return await this.client.get(
            'bills/filteredbydate',
            {
                dateFrom,
                dateTo
            })
    }
}