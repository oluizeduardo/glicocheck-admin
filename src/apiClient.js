import axios from 'axios';

const apiUrl = 'https://glicocheck.onrender.com/api';
const loginUrl = `${apiUrl}/security/login`;

const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Função para fazer login e obter o token de acesso
const login = async () => {
  try {
    const response = await apiClient.post(loginUrl, {
      email: 'costaeduardoluiz@gmail.com',
      password: 'asd',
    });

    const { accessToken } = response.data;
    return accessToken;
  } catch (error) {
    throw new Error('Falha ao fazer login');
  }
};

// Função para adicionar o token de acesso aos cabeçalhos da requisição
const addAuthHeader = (accessToken) => {
  apiClient.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};

// Data Provider personalizado para o React Admin
const dataProvider = {
  
  create: async (resource, params) => {
    try {
      const accessToken = await login();
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
      const accessToken = await login();
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
      const accessToken = await login();
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
      const accessToken = await login();
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
      const accessToken = await login();
      addAuthHeader(accessToken);

      const response = await apiClient.get(`/${resource}`);
      return {
        data: response.data,
        total: response.data.length,
      };
    } catch (error) {
      throw new Error('Falha ao obter a lista de recursos');
    }
  },

  getOne: async (resource, params) => {
    try {
      const accessToken = await login();
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
