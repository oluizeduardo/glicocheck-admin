import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

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
      sessionStorage.setItem("accessToken", access_token);

      // Returns void to indicate successful login.
      return Promise.resolve();
    } catch (error) {
      let message;
      if (error.message.includes("404")) message = "User not found.";
      else message = "Error during login.";

      return Promise.reject(new Error(message));
    }
  },

  logout: async () => {
    // Clean sessionStorage
    sessionStorage.removeItem("accessToken");
    // Returns void to indicate successful logout.
    return Promise.resolve();
  },

  checkAuth: async () => {
    // Check if there is an access token in the sessionStorage.
    const accessToken = sessionStorage.getItem("accessToken");
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
