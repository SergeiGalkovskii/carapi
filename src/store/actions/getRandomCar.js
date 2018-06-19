import { API_URL } from '../../config';
import { FETCH_RANDOM_CAR, RECEIVED_RANDOM_CAR_SUCCESS, RECEIVED_RANDOM_CAR_ERROR } from '../constants/car';

export function fetchRandomCar() {
    return {
        type: FETCH_RANDOM_CAR
    }
}

export function receiveRandomCarSuccess(item) {
    return {
        type: RECEIVED_RANDOM_CAR_SUCCESS,
        item
    }
}

export function receiveRandomCarError(err) {
    return {
        type: RECEIVED_RANDOM_CAR_ERROR,
        err
    }
}

export function fetchCarsRequest() {
    return dispatch => {
        dispatch(fetchRandomCar());
        return fetch(`${API_URL}/cars/get-random`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error with getting random car');
                }
            })
            .then(json => {
                dispatch(receiveRandomCarSuccess(json))
            })
            .catch(err => receiveRandomCarError(err));
    }
}