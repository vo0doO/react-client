import {HttpService} from "@qiwi/let-fly-at-http/build";
import config from "../config";
import ls from "../storage/localStorage";
import {dispatch} from "../ui/model";

export class ApiHttpClient extends HttpService {
    constructor() {
        super(config.apiUrl, {
            headers: {
                'Accept': 'appication/json',
                'Content-Type': 'appication/json'
            }, credentials: "include"
        }, 50000)
    };
    _request(url, options) {
        options.headers.authorization = `Bearer ${ls.getItem('jwt')}`;

        return super._request(url, options).catch((err)=>{
            if (err.response.status === 401) {
                dispatch.auth.logout();
            }
            // TODO(vo0doo): timeout-error => logout
            // TODO(vo0doo): response-error => request
            throw err;
        })
    }
}