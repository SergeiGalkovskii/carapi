import {
    FETCH_CARS, RECEIVED_CARS_ERROR, RECEIVED_CARS_SUCCESS,
    FETCH_RANDOM_CAR, RECEIVED_RANDOM_CAR_SUCCESS, RECEIVED_RANDOM_CAR_ERROR
} from "../constants/car";

const initialState = {
    allCars: {
        items: [],
        isLoading: false
    },
    randomCar: {
        isLoading: false
    }
};

const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CARS:
            return {
                ...state,
                allCars: { ...state.allCars, isLoading: true }
            };
        case RECEIVED_CARS_SUCCESS:
            return {
                ...state,
                allCars: { ...state.allCars, items: action.items, isLoading: false }
            };
        case RECEIVED_CARS_ERROR:
            return {
                ...state,
                allCars: { ...state.allCars, err: action.err, isLoading: false }
            };
        case FETCH_RANDOM_CAR:
            return {
                ...state,
                randomCar: { ...state.randomCar, isLoading: true }
            };
        case RECEIVED_RANDOM_CAR_SUCCESS:
            return {
                ...state,
                allCars: { ...state.randomCar, item: action.item, isLoading: false }
            };
        case RECEIVED_RANDOM_CAR_ERROR:
            return {
                ...state,
                allCars: { ...state.randomCar, err: action.err, isLoading: false }
            };
        default:
            return state;
    }
}

export default carsReducer;