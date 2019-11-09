import { FETCH_COURSE_DETAIL } from "../Action/type";

let initCourse = {}

const CourseDetail = (state = initCourse, { type, payload }) => {
    switch (type) {
        case FETCH_COURSE_DETAIL:
            {
                state = payload;
                return {...state };
            }

        default:
            return state;
    }
}


export default CourseDetail