
export const setUserData = (username, password, email) => {
    const userData = {username, password, email};
    localStorage.setItem("userData", JSON.stringify(userData));
}

export const getUserData = () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    return userData;
}

export const clearUserData = () => {
    localStorage.removeItem("userData");
}