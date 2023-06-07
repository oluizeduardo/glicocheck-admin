import axios from 'axios';

const apiUrl = 'https://glicocheck.onrender.com/api';
const loginUrl = `${apiUrl}/security/login`;

const apiClient = axios.create({
    baseURL: apiUrl,
    body: {
        'email': email,
        'password': password 
    },
    headers: {
        'Content-Type': 'application/json',
    },
});

const authProvider = {

    login: async () => {

        try {
            const response = await apiClient.post(loginUrl, {
                email: body.email,
                password: body.password
            });

            const { accessToken } = response.data;
            return accessToken;
        } catch (error) {
            throw new Error('Falha ao fazer login');
        }
    },
    // login: ({ email, password }) => {
    //     const request = new Request('https://glicocheck.onrender.com/api/security/login', {
    //         method: 'POST',
    //         body: JSON.stringify({ email, password }),
    //         headers: new Headers({ 'Content-Type': 'application/json' }),
    //     });
    //     return fetch(request)
    //         .then(response => {
    //             if (response.status < 200 || response.status >= 300) {
    //                 throw new Error(response.statusText);
    //             }
    //             return response.json();
    //         })
    //         .then(auth => {
    //             localStorage.setItem('auth', JSON.stringify(auth));
    //         })
    //         .catch(() => {
    //             throw new Error('Network error')
    //         });
    // },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject();
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    checkAuth: () => {
        const addAuthHeader = (accessToken) => {
            apiClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
        };
    },
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve();
    },
    getIdentity: () => {
        try {
            const { user_id, name } = JSON.parse(localStorage.getItem('auth'));
            return Promise.resolve({ user_id, name });
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getPermissions: () => {
        // Required for the authentication to work
        return Promise.resolve();
    },
    // ...
};
export default authProvider;