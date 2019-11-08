import { combineReducers } from 'redux';
import CourseReducer from './coursesReducer'
const RootReducer = combineReducers({
    // toàn bộ state
    courseList: CourseReducer

})

export default RootReducer