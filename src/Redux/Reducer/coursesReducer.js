import { FETCH_COURSES } from '../Action/type';
let initState = [];

const courseReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case FETCH_COURSES:
            {
                state = payload;
                return [...state]
            }
        default:
            return state;
    }

}

export default courseReducer