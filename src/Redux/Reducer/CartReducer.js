import { ADD_TO_CART, DELETE_FROM_CART } from "../Action/CartAction";
import { ADD_ORDER } from "../Action/OrderAction";

const initialState = {
    courses: {},
    totalAmount: 0
}


const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                courses: {...state.courses, [action.course.id]: action.course },
                totalAmount: state.totalAmount + action.course.price
            }
        case DELETE_FROM_CART:
            const updatedCourses = {...state.courses };
            delete updatedCourses[action.id];
            return {
                ...state,
                courses: updatedCourses,
                totalAmount: state.totalAmount - action.price
            }
        case ADD_ORDER:
            return initialState;
        default:
            return state;
    }
}

export default CartReducer