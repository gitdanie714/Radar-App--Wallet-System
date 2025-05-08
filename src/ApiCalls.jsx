import axios from 'axios';

const proxyUrl = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "https://radar2.pythonanywhere.com/";

// API Endpoints
const endpoints = {
  signup: `${baseUrl}signup/`,
  login: `${baseUrl}login/`,
  verifyUserToken: `${baseUrl}verify-token/`,

  getUsername: `${baseUrl}get-username/`,
  getProfileInfo: `${baseUrl}get-username-email-fullname/`,
  getUserImg: `${baseUrl}get-user-profile-pic/`,

  getWalletBalance: `${baseUrl}get-wallet-balance/`,
  sendMoney: `${baseUrl}send-money/`,
  depositMoney: `${baseUrl}topup-wallet/`,

  checkPin: `${baseUrl}check-pin-availability/`,
  createPin: `${baseUrl}create-wallet-pin/`,
  changePin: `${baseUrl}change-wallet-pin/`,

  getAllUserTransactions: `${baseUrl}get-all-transactions/`,
  getUserNotifications: `${baseUrl}get-all-user-notifications/`,

  validateUser: `${baseUrl}check-user-existence-with-username/`,
  getUsernamePic: `${baseUrl}get-username-and-prof-pic/`,

  changeProfileInfo: `${baseUrl}change-username-email-fullname/`,
  changePassword: `${baseUrl}change-password-logged-in/`
};

const header = {
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  }
};

// API Service
export const apiService = {
  signup: (full_name, username, email, password) => 
    axios.post(endpoints.signup, { user_type: "user", full_name, username, email, password }),

  login: (username_or_email, password) => 
    axios.post(endpoints.login, { username_or_email, password }),

  verifyUserToken: (token, email, full_name, username, password) => 
    axios.post(endpoints.verifyUserToken, { full_name, username, email, password, token }),

  getUsername: (user_id) => 
    axios.post(endpoints.getUsername, { user_id }, header),

  getWalletBalance: (user_id) => 
    axios.post(endpoints.getWalletBalance, { user_id }, header),

  checkPin: (user_id) => 
    axios.post(endpoints.checkPin, { user_id }, header),

  createPin: (user_id, wallet_pin) => 
    axios.post(endpoints.createPin, { user_id, wallet_pin }),

  changePin: (data) => 
    axios.post(endpoints.changePin, data),

  sendMoney: (sender_id, receiver_username, amount, wallet_pin) => 
    axios.post(endpoints.sendMoney, { sender_id, receiver_username, amount, wallet_pin }, header),

  depositMoney: (amount, user_id) => 
    axios.post(endpoints.depositMoney, { amount, user_id }, header),

  getAllUserTransactions: (user_id) => 
    axios.post(endpoints.getAllUserTransactions, { user_id }, header),

  getUserNotifications: (user_id) => 
    axios.post(endpoints.getUserNotifications, { user_id }, header),

  changeProfileInfo: (user_id) => 
    axios.post(endpoints.changeProfileInfo, { user_id }, header),

  changePassword: (data) => 
    axios.post(endpoints.changePassword, { data }, header),

  getProfileInfo: (user_id) => 
    axios.post(endpoints.getProfileInfo, { user_id }, header),

  getUserImg: (user_id) => 
    axios.post(endpoints.getUserImg, { user_id }, header),

  validateUser: (username) => 
    axios.post(endpoints.validateUser, { username }, header)
};
