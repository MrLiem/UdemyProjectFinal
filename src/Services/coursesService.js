import axios from 'axios'

class CourseService {
    fetchCourseDetail() {
        return axios({
            url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=111",
            method: 'GET'
        })
    }

    fetchCourses() {
        return axios({
            url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
            method: 'GET'
        })
    }
}

export default new CourseService()