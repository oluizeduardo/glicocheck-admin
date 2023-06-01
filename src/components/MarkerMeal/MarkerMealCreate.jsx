import { Create, SimpleForm, TextInput, useDataProvider } from 'react-admin';

const MarkerMealCreate = (props) => {
    const dataProvider = useDataProvider();

    const handleCreate = (values) => {
        dataProvider
            .create('markermeal', { data: values })
            .then(() => {
                // Redirecionar para a página de listagem após a criação bem-sucedida
                props.history.push('/markermeal');
            })
            .catch((error) => {
                // Lidar com erros de criação, se necessário
                console.error('Erro ao criar o recurso:', error);
            });
    };

    return (
        <Create {...props} title="Criar tipo de refeição">
            <SimpleForm save={handleCreate}>
                <TextInput source="description" />
            </SimpleForm>
        </Create>
    );
};

export default MarkerMealCreate;