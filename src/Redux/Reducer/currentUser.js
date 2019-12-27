import { FETCH_CURRENT_USER } from "../Action/type";

let initUser = {};

const currentUserReducer = (state = initUser, { type, payload }) => {
    // console.log(state)
    switch (type) {
        case FETCH_CURRENT_USER:
            state = payload;
            return state;
        default:
            return state;
    }
}

export default currentUserReducer