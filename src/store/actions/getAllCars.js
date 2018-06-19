import { API_URL } from '../../config';
import { FETCH_CARS, RECEIVED_CARS_ERROR, RECEIVED_CARS_SUCCESS } from '../constants/car';

export function fetchCars() {
    return {
        type: FETCH_CARS
    }
}

export function receiveCarsSuccess(items) {
    return {
        type: RECEIVED_CARS_SUCCESS,
        items
    }
}

export function receiveCarsError(err) {
    return {
        type: RECEIVED_CARS_ERROR,
        err
    }
}


export function fetchCarsRequest() {
    return dispatch => {
        dispatch(fetchCars());
        return fetch(`${API_URL}/cars`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error with getting cars');
                }
            })
            .then(json => {
                dispatch(receiveCarsSuccess(json))
            })
            .catch(err => receiveCarsError(err));
    }
}


