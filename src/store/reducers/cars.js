import { FETCH_CARS, RECEIVED_CARS_ERROR, RECEIVED_CARS_SUCCESS } from "../constants/car";

const initialState = {
    cars: [],
    isLoading: false
};

const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CARS:
            return {
                ...state,
                isLoading: true
            };
        case RECEIVED_CARS_SUCCESS:
            return {
                ...state,
                cars: action.cars,
                isLoading: false
            };
        case RECEIVED_CARS_ERROR:
            return {
                ...state,
                err: action.err,
                isLoading: false
            };
        default:
            return state
    }
}

export default carsReducer;