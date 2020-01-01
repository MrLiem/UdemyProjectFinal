import { FETCH_COURSE_DETAIL, AUTHENTICATE } from './type'
import CourseService from '../../Services/coursesService'
import Course from '../../models/Course'


// async action hành động ko đồng bộ
// trong khi gửi action đến store thì gọi luôn api fetch dữ liệu từ server về

const reduxAction = (type, payload) => {
    return {
        type: type,
        payload: payload
    }
}


//async action : vừa trong lúc dispatch lên store thì gọi API lấy dữ liệu từ server
export const fetchCourseDetail = (id) => {
    const convertToCourse = (id, data) => {
        return new Course(id, data.title, data.price, data.imageUrl, data.videoIntro, data.description, data.owner);
    }
    return async(dispatch) => {
        CourseService
            .fetchCourseDetail(id)
            .then(res => {
                dispatch({
                    type: FETCH_COURSE_DETAIL,
                    payload: convertToCourse(id, res.data)
                })
            }).catch(err => {
                console.log(err);
            })

    }
}






export default reduxAction