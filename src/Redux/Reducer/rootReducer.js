import { combineReducers } from 'redux';
import CourseReducer from './coursesReducer'
import CourseDetail from './courseDetailReducer';
import Auth from './auth'
import CurrentUser from './currentUser'
import CartReducer from './CartReducer'
import OrderReducer from './OrderReducer'

const RootReducer = combineReducers({
    // toàn bộ state
    courseList: CourseReducer,
    courseDetail: CourseDetail,
    auth: Auth,
    currentUser: CurrentUser,
    cart: CartReducer,
    order: OrderReducer
})

export default RootReducer