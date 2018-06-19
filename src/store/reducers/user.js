import { INIT_USER } from "../constants/user";

const initialState = {};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_USER:
            return {
                ...state,
                id: action.id
            };
        default:
            return state;
    }
}

export default userReducer;