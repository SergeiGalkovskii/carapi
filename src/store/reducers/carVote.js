import {
    FETCH_GET_CAR_VOTES, RECEIVED_CAR_VOTES_SUCCESS, RECEIVED_CAR_VOTES_ERROR,
    FETCH_CAR_VOTE, VOTE_CAR_SUCCESS, VOTE_CAR_ERROR
} from "../constants/carVotes";

const initialState = {
    carVotes: {
        items: [],
        isLoading: false
    },
    vote: {
        isLoading: false
    }
};

const carVoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_GET_CAR_VOTES:
            return {
                ...state,
                carVotes: { ...state.carVotes, isLoading: true }
            };
        case RECEIVED_CAR_VOTES_SUCCESS:
            return {
                ...state,
                carVotes: { ...state.carVotes, items: action.items, isLoading: false }
            };
        case RECEIVED_CAR_VOTES_ERROR:
            return {
                ...state,
                carVotes: { ...state.carVotes, err: action.carVotes, isLoading: false }
            };
        case FETCH_CAR_VOTE:
            return {
                ...state,
                vote: { ...state.vote, isLoading: true }
            };
        case VOTE_CAR_SUCCESS:
            return {
                ...state,
                vote: { ...state.randomCar, isLoading: false }
            };
        case VOTE_CAR_ERROR:
            return {
                ...state,
                vote: { ...state.vote, err: action.err, isLoading: false }
            };
        default:
            return state;
    }
}

export default carVoteReducer;