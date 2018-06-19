import { API_URL } from '../../config';
import { FETCH_CAR_VOTE, VOTE_CAR_SUCCESS, VOTE_CAR_ERROR } from '../constants/carVotes';
import { fetchRandomCarRequest } from './';

export function fetchCarVote() {
    return {
        type: FETCH_CAR_VOTE
    }
}

export function carVoteSuccess(items) {
    return {
        type: VOTE_CAR_SUCCESS,
        items
    }
}

export function carVoteError(err) {
    return {
        type: VOTE_CAR_ERROR,
        err
    }
}

export function fetchCarVoteRequest(vote) {
    return dispatch => {
        dispatch(fetchCarVote());
        return fetch(`${API_URL}/cars-votes?userKey=${vote.userKey}&carId=${vote.carId}&isLike=${vote.isLike}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Error with voting');
                }
            })
            .then(json => {
                dispatch(carVoteSuccess(json));
                dispatch(fetchRandomCarRequest());
            })
            .catch(err => carVoteError(err));
    }
}


