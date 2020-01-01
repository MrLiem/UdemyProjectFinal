import { FETCH_CURRENT_USER } from "../Action/type";
import { LOG_OUT } from "../../Services/authService";

let initUser = {
    id: '',
    info: {}
};

const currentUserReducer = (state = initUser, { type, payload, id }) => {
    switch (type) {
        case FETCH_CURRENT_USER:
            return {
                ...state,
                id: id,
                info: payload
            };
        case LOG_OUT:
            return initUser;
        default:
            return state;
    }
}

export default currentUserReducer