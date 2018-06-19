import { INIT_USER } from '../constants/user';

export function initUser(id) {
    return {
        type: INIT_USER,
        id
    }
}