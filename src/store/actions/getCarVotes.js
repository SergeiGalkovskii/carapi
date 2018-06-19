import { API_URL } from '../../config';
import { FETCH_GET_CAR_VOTES, RECEIVED_CAR_VOTES_SUCCESS, RECEIVED_CAR_VOTES_ERROR } from '../constants/carVotes';

export function fetchCarVotes() {
    return {
        type: FETCH_GET_CAR_VOTES
    }
}

export function receiveCarVotesSuccess(items) {
    return {
        type: RECEIVED_CAR_VOTES_SUCCESS,
        items
    }
}

export function receiveCarVotesError(err) {
    return {
        type: RECEIVED_CAR_VOTES_ERROR,
        err
    }
}

export function fetchCarVotesRequest() {
    return dispatch => {
        dispatch(fetchCars());
        return fetch(`${API_URL}/cars-votes`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error with getting car votes');
                }
            })
            .then(json => {
                dispatch(receiveCarVotesSuccess(json))
            })
            .catch(err => receiveCarVotesError(err));
    }
}


