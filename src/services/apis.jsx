const REACT_APP_BASE_URL = import.meta.env.REACT_APP_BASE_URL

const BASE_URL = REACT_APP_BASE_URL 

export const categories = {
    CATEGORIES_API :"/course/showAllCategories",
}

export const endpoints = {
    SENDOTP_API: BASE_URL + "/auth/sendotp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    RESETPASSTOKEN_API: BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
  };