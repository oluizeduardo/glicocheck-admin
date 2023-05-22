const authProvider = {
    login: ({ username, password }) => {
        const request = new Request('https://glicocheck.onrender.com/api', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('auth', JSON.stringify(auth));
            })
            .catch(() => {
                throw new Error('Network error')
            });
    },
    checkError: (error) => {
        const status = error.status;
        if (status === 401 || status === 403) {
            localStorage.removeItem('auth');
            return Promise.reject({ redirectTo: '/credentials-required' });
        }
        // other error code (404, 500, etc): no need to log out
        return Promise.resolve();
    },
    checkAuth: () =>
        // Required for the authentication to work
        localStorage.getItem('auth')
            ? Promise.resolve()
            : Promise.reject({ message: 'login.required' }),
    logout: () => {
        localStorage.removeItem('auth');
        return Promise.resolve('/LoginPage');
    },
    getIdentity: () => {
        try {
            const { id, fullName, avatar } = JSON.parse(localStorage.getItem('auth'));
            return Promise.resolve({ id, fullName, avatar });
        } catch (error) {
            return Promise.reject(error);
        }
    },

    getPermissions: () => {
        // Required for the authentication to work
        return Promise.resolve();
    }
};

export default authProvider;