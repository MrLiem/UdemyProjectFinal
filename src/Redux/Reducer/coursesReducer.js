import { FETCH_COURSES } from '../Action/type';
import * as localStorage from '../../Services/localStorage'
import { DELETE_COURSE, ADD_COURSE } from '../Action/CourseActions';
let initState = {
    availableCourses: [],
    userCourses: []
};

const courseReducer = (state = initState, { type, payload }) => {
    const userId = localStorage.getFromLocalStorage().userId;

    switch (type) {
        case FETCH_COURSES:
            {
                const updatedUserCourses = payload.filter(course => course.owner === userId)
                return {
                    ...state,
                    availableCourses: payload,
                    userCourses: updatedUserCourses
                }

            }
        case DELETE_COURSE:
            {
                const updatedCourses = state.availableCourses.filter(course => course.id !== payload);
                const updatedUserCourses = state.userCourses.filter(course => course.id !== payload);
                return {
                    ...state,
                    availableCourses: updatedCourses,
                    userCourses: updatedUserCourses
                }
            }

        case ADD_COURSE:
            {
                const updatedAvailableCourses = [...state.availableCourses, payload];
                const updatedUserCourses = [...state.userCourses, payload];
                console.log(updatedUserCourses)
                return {
                    ...state,
                    availableCourses: updatedAvailableCourses,
                    userCourses: updatedUserCourses
                }
            }
        default:
            return state;
    }

}

export default courseReducer