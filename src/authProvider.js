import apiClient from "./utils/apiClient";
import Storage from "./utils/storage";

/**
 * Personalized auth provider.
 */
const authProvider = {
  login: async (credentials) => {
    const { username, password } = credentials;

    try {
      // Send request to /login.
      const response = await apiClient.post("/authentication/login", {
        email: username,
        password,
      });

      // Save the access token.
      const { access_token } = response.data;
      Storage.saveAccessToken(access_token);

      // Returns void to indicate successful login.
      return Promise.resolve();
    } catch (error) {
      let message;
      if (error.message.includes("404")) {
        message = "User not found.";
      } else {
        message = "Error during login.";
      }

      return Promise.reject(new Error(message));
    }
  },

  logout: async () => {
    Storage.deleteAccessToken();
    return Promise.resolve();
  },

  checkAuth: async () => {
    const accessToken = Storage.getAccessToken();
    const isAuthenticated = !!accessToken;
    return isAuthenticated ? Promise.resolve() : Promise.reject();
  },

  checkError: async (error) => {
    console.error(error);
    return Promise.resolve();
  },

  getPermissions: () => Promise.resolve(),
};

export default authProvider;
