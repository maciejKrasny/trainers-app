import ky from "ky";
import store from '../redux/store/store';
import {api_url} from "./setup";

const kyClient = ky.extend({
    prefixUrl: api_url,
    hooks: {
        beforeRequest: [
            (config) => {
            const token = store.getState().authorizationUsers.authorization?.token;
                if (token) {
                    config.headers.set('Authorization', `Bearer ${token}`);
                }
                config.headers.set('Content-Type', 'application/json');
            }
        ]
    }
})

export default kyClient;