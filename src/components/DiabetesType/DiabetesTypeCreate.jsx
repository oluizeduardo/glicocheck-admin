import { Create, SimpleForm, TextInput, required, useDataProvider } from 'react-admin';

const DiabetesTypeCreate = (props) => {
    const dataProvider = useDataProvider();
    const handleCreate = (values) => {
        dataProvider
            .create('diabetestype', { data: values })
            .then(() => {
                // Redirecionar para a página de listagem após a criação bem-sucedida
                props.history.push('/diabetestype');
            })
            .catch((error) => {
                // Lidar com erros de criação, se necessário
                console.error('Erro ao criar o recurso:', error);
            });
    };
    return (
        <Create {...props} title="Criar tipo de diabetes">
            <SimpleForm save={handleCreate}>
                <TextInput source="description" validate={[required()]} />
            </SimpleForm>
        </Create>
    );
};

export default DiabetesTypeCreate;