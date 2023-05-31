import React from 'react';
import { Create, SimpleForm, TextInput, useDataProvider } from 'react-admin';

const BloodTypeCreate = (props) => {
  const dataProvider = useDataProvider();

  const handleCreate = (values) => {
    dataProvider
      .create('bloodtype', { data: values })
      .then(() => {
        // Redirecionar para a página de listagem após a criação bem-sucedida
        props.history.push('/bloodtype');
      })
      .catch((error) => {
        // Lidar com erros de criação, se necessário
        console.error('Erro ao criar o recurso:', error);
      });
  };

  return (
    <Create {...props} title="Criar tipo de sangue">
      <SimpleForm save={handleCreate}>
        <TextInput source="description" />
      </SimpleForm>
    </Create>
  );
};

export default BloodTypeCreate;
