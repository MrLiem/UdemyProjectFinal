import { FETCH_COURSE_DETAIL } from './type'
import CourseService from '../../Services/coursesService'


// async action hành động ko đồng bộ
// trong khi gửi action đến store thì gọi luôn api fetch dữ liệu từ server về

const reduxAction = (type, payload) => {
    return {
        type: type,
        payload: payload
    }
}

//async action : vừa trong lúc dispatch lên store thì gọi API lấy dữ liệu từ server
export const fetchCourseDetail = (maKhoaHoc) => {
    return (dispatch) => {
        CourseService
            .fetchCourseDetail(maKhoaHoc)
            .then(res => {
                dispatch({
                    type: FETCH_COURSE_DETAIL,
                    payload: res.data
                })
            }).catch(err => {
                console.log(err);
            })

    }
}




export default reduxAction