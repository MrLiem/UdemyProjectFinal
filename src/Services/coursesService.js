import axios from 'axios'

class CourseService {
    fetchCourseDetail(id) {
        return axios({
            url: `https://udemyproject-49572.firebaseio.com/products/${id}.json`,
            method: 'GET'
        })

    }

    fetchCourses() {
        return axios({
            url: 'https://udemyproject-49572.firebaseio.com/products.json',
            method: 'GET'
        })
    }



}

export default new CourseService()