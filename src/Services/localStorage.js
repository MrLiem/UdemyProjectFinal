export const saveToLocalStorage = (token, userId) => {
    let user = { 'token': token, 'userId': userId }
    localStorage.setItem('user', JSON.stringify(user))


}
export const getFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('user'));
    return data;
}