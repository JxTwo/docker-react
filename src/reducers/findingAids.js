import { GET_FINDINGAIDS } from '../actions/types';

const initialState = {
    findingAids: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_FINDINGAIDS:
            return {
                ...state,
                findingAids: action.payload
            }
        default:
            return state;
    }
}