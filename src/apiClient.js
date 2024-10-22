import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * @return The access token in the session storage. 
 */
const getAccessToken = () => {
  return sessionStorage.getItem('accessToken');
};

/**
 * Adds bearer token to the Authentication header.
 * @param {string} accessToken 
 */
const addAuthHeader = (accessToken) => {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};

/**
 * Personalized data provider.
 */
const dataProvider = {
  
  create: async (resource, params) => {
    try {
      const accessToken = getAccessToken();
      addAuthHeader(accessToken);

      const response = await apiClient.post(`/${resource}`, params.data);
      return {
        data: response.data,
      };
    } catch (error) {
      throw new Error(`Falha ao criar o recurso ${resource}`);
    }
  },

  update: async (resource, params) => {
    try {
      const accessToken = getAccessToken();
      addAuthHeader(accessToken);

      const response = await apiClient.put(`/${resource}/${params.id}`, params.data);
      return {
        data: response.data,
      };
    } catch (error) {
      throw new Error(`Falha ao atualizar o recurso ${resource}`);
    }
  },

  delete: async (resource, params) => {
    try {
      const accessToken = getAccessToken();
      addAuthHeader(accessToken);

      const response = await apiClient.delete(`/${resource}/${params.id}`);
      return {
        data: response.data,
      };
    } catch (error) {
      throw new Error(`Falha ao obter o recurso ${resource}`);
    }
  },

  deleteMany: async (resource, params) => {
    try {
      const accessToken = getAccessToken();
      addAuthHeader(accessToken);

      const { ids } = params;
      const requests = ids.map((id) => apiClient.delete(`/${resource}/${id}`));
      await Promise.all(requests);

      return {
        data: ids,
      };
    } catch (error) {
      throw new Error(`Falha ao excluir os recursos ${resource}`);
    }
  },

  getList: async (resource, params) => {
    try {
      const accessToken = getAccessToken();
      addAuthHeader(accessToken);

      const response = await apiClient.get(`/${resource}`);
      return {
        data: response.data,
        total: response.data.length,
      };
    } catch (error) {
      throw new Error(`Falha ao obter a lista de recursos ${resource}`);
    }
  },

  getOne: async (resource, params) => {
    try {
      const accessToken = getAccessToken();
      addAuthHeader(accessToken);

      const response = await apiClient.get(`/${resource}/${params.id}`);
      return {
        data: response.data,
      };
    } catch (error) {
      throw new Error(`Falha ao obter o recurso ${resource}`);
    }
  },
};

export default dataProvider;
