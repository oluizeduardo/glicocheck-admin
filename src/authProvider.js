import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
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
        const response = await apiClient.post('/security/login', {
          email: username,
          password: password,
        });
  
        // Save the access token.
        const { accessToken } = response.data;
        sessionStorage.setItem('accessToken', accessToken);

        // Returns void to indicate successful login.
        return Promise.resolve();

      } catch (error) {
        return Promise.reject(new Error('Error during login'));
      }
    },
  
    logout: async () => {
        // Clean sessionStorage
        sessionStorage.removeItem('accessToken');
        // Returns void to indicate successful logout.
        return Promise.resolve();
    },

    checkAuth: async () => {
        // Check if there is an access token in the sessionStorage.
        const accessToken = sessionStorage.getItem('accessToken');
        const isAuthenticated = !!accessToken;
        return isAuthenticated ? Promise.resolve() : Promise.reject();
      },
  };
  
  export default authProvider;
  