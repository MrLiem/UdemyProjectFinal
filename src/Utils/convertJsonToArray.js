import Course from "../models/Course";
import User from '../models/User'

const convertJsonToArray = coursesList => {
    let arrayCoursesList = [];
    for (const key in coursesList) {
        // console.log(key);
        const course = new Course(
            key,
            coursesList[key].title,
            coursesList[key].price,
            coursesList[key].imageUrl,
            coursesList[key].videoIntro,
            coursesList[key].description,
            coursesList[key].owner,
        );

        arrayCoursesList.push(course);
    }
    return arrayCoursesList;
}

export const convertUserJsonToArray = userList => {
    let arrayUserList = [];
    for (const key in userList) {
        // console.log(key);
        const user = new User(
            userList[key].userId,
            userList[key].name,
            userList[key].email,
            userList[key].phone,
            userList[key].userType,
            userList[key].password,
            userList[key].imageUrl
        );

        arrayUserList.push(user);
    }
    return arrayUserList;
}


export default convertJsonToArray