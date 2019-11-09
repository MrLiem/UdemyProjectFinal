import { combineReducers } from 'redux';
import CourseReducer from './coursesReducer'
import CourseDetail from './courseDetailReducer';
const RootReducer = combineReducers({
    // toàn bộ state
    courseList: CourseReducer,
    courseDetail: CourseDetail
})

export default RootReducer