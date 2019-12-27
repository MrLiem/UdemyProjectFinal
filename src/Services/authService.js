import { AUTHENTICATE, LOGIN } from "../Redux/Action/type";
// test
import CourseService from './coursesService'
import UserService from './userService'
import User from '../models/User'
import { convertUserJsonToArray } from '../Utils/convertJsonToArray'
import { FETCH_CURRENT_USER } from '../Redux/Action/type'
import * as localStorage from './localStorage'

export const signUp = (email, password) => {
    return async dispatch => {
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAhZ2Eh2BOM4oIC27Qj0H8gnYhgTlv_yx0', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            });

        if (!response.ok) {
            const errorResData = await response.json();
            const errorId = errorResData.error.message;
            let message = 'Something went wrong!';
            if (errorId === 'EMAIL_EXISTS') {
                message = ' The email address is already in use by another account.!'
            }
            throw new Error(message);
        }
        const resData = await response.json();
        localStorage.saveToLocalStorage(resData.idToken, resData.localId);
        // dispatch({ type: AUTHENTICATE, token: resData.idToken, userId: resData.localId });


        //them user vao database
        // let user = new User(resData.localId, "None", resData.email, 'None', 'HV', 'None', 'None');
        // UserService
        //     .addUser(user)
        //     .then(res => {
        //         console.log(res.data)
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });


    }
};

export const signIn = (email, password) => {
    // console.log(email, password)
    return async dispatch => {
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhZ2Eh2BOM4oIC27Qj0H8gnYhgTlv_yx0', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            });

        if (!response.ok) {
            const errorResData = await response.json();
            const errorId = errorResData.error.message;
            let message = 'Something went wrong!';
            if (errorId === 'EMAIL_NOT_FOUND') {
                message = 'This email could not be found!'
            } else if (errorId === 'INVALID_PASSWORD') {
                message = 'This password is not valid!'
            }
            throw new Error(message);
        }

        const resData = await response.json();
        localStorage.saveToLocalStorage(resData.idToken, resData.localId);
        // console.log("resData", resData);
        // dispatch({ type: AUTHENTICATE, token: resData.idToken, userId: resData.localId });


        // UserService
        //     .fetchUser()
        //     .then(res => {
        //         const currentUser = convertUserJsonToArray(res.data).filter(el => el.email === resData.email);
        //         // console.log(currentUser[0])
        //         dispatch({ type: FETCH_CURRENT_USER, payload: currentUser[0] })
        //     }).catch(err => {
        //         console.log(err);
        //     })

    }
};