import Constants from "./constants";

const Storage = {
  saveAccessToken: (accessToken) => {
    sessionStorage.setItem(Constants.GLICOCHECK_ADMIN_ACCESS_TOKEN_NAME, accessToken);
  },

  getAccessToken: () => {
    return sessionStorage.getItem(Constants.GLICOCHECK_ADMIN_ACCESS_TOKEN_NAME);
  },

  deleteAccessToken: () => {
    sessionStorage.removeItem(Constants.GLICOCHECK_ADMIN_ACCESS_TOKEN_NAME);
  },
};

export default Storage;
