import {ApiHttpClient} from '../apiHttpClient';


export class UsersApiService {
    constructor() {
        this.client = new ApiHttpClient();
    }

    async user(){
        return await this.client.get('users/item')
    }

    async users () {
        return await this.client.get('users/items');
    }
}