import apiClient from './utils/apiClient';
import Storage from './utils/storage';

/**
 * Personalized data provider.
 */
const dataProvider = {
  
  create: async (resource, params) => {
    try {
      addAuthHeader(Storage.getAccessToken());
      const response = await apiClient.post(`/${resource}`, params.data);
      return {
        data: response.data,
      };
    } catch (error) {
      throw new Error(`Failed to create resource ${resource}.`);
    }
  },

  update: async (resource, params) => {
    try {
      addAuthHeader(Storage.getAccessToken());
      const response = await apiClient.put(`/${resource}/${params.id}`, params.data);
      return {
        data: response.data,
      };
    } catch (error) {
      throw new Error(`Failed to update resource ${resource}.`);
    }
  },

  delete: async (resource, params) => {
    try {
      addAuthHeader(Storage.getAccessToken());
      const response = await apiClient.delete(`/${resource}/${params.id}`);
      return {
        data: response.data,
      };
    } catch (error) {
      throw new Error(`Failed to delete resource ${resource}.`);
    }
  },

  deleteMany: async (resource, params) => {
    try {
      addAuthHeader(Storage.getAccessToken());
      const { ids } = params;
      const requests = ids.map((id) => apiClient.delete(`/${resource}/${id}`));
      await Promise.all(requests);

      return {
        data: ids,
      };
    } catch (error) {
      throw new Error(`Failed to delete resources ${resource}.`);
    }
  },

  getList: async (resource, params) => {
    try {
      addAuthHeader(Storage.getAccessToken());
      const response = await apiClient.get(`/${resource}`);
      return {
        data: response.data,
        total: response.data.length,
      };
    } catch (error) {
      throw new Error(`Failed to get resources ${resource}.`);
    }
  },

  getOne: async (resource, params) => {
    try {
      addAuthHeader(Storage.getAccessToken());
      const response = await apiClient.get(`/${resource}/${params.id}`);
      return {
        data: response.data,
      };
    } catch (error) {
      throw new Error(`Failed to get resource ${resource}.`);
    }
  },
};

const addAuthHeader = (accessToken) => {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};

export default dataProvider;
