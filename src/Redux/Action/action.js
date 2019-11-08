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

//




export default reduxAction